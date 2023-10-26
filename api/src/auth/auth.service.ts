import {
	Injectable,
	BadRequestException,
	UnauthorizedException,
	NotFoundException,
} from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { LoginDto, RegisterDto } from './dto/auth.dto'
import { hash } from 'argon2'
import { JwtService } from '@nestjs/jwt'
import { User } from '@prisma/client'
import { verify } from 'argon2'

@Injectable()
export class AuthService {
	constructor(
		private prisma: PrismaService,
		private jwt: JwtService
	) {}

	async register(dto: RegisterDto) {
		const existsUser = await this.prisma.user.findUnique({
			where: {
				email: dto.email,
			},
		})

		if (existsUser) {
			throw new BadRequestException('User already exists')
		}

		const user = await this.prisma.user.create({
			data: {
				firstName: dto.firstName,
				email: dto.email,
				password: await hash(dto.password),
			},
		})

		const tokens = await this.issueToken(user.id)

		return {
			user: this.getUserFields(user),
			...tokens,
		}
	}

	private async issueToken(userId: string) {
		const data = { id: userId }

		const accessToken = this.jwt.sign(data, {
			expiresIn: '1h',
		})

		const refreshToken = this.jwt.sign(data, {
			expiresIn: '3d',
		})

		return { accessToken, refreshToken }
	}

	private getUserFields(user: User) {
		return {
			id: user.id,
			email: user.email,
		}
	}

	async login(dto: LoginDto) {
		const user = await this.validateUser(dto)
		const tokens = await this.issueToken(user.id)

		return {
			user: this.getUserFields(user),
			...tokens,
		}
	}

	async getNewTokens(refreshToken: string) {
		const result = await this.jwt.verifyAsync(refreshToken)
		if (!result) {
			throw new UnauthorizedException('Invalid refresh token')
		}

		const user = await this.prisma.user.findUnique({
			where: {
				id: result.id,
			},
		})

		if (!user) {
			throw new NotFoundException('User not found')
		}

		const tokens = await this.issueToken(user.id)

		return {
			user: this.getUserFields(user),
			...tokens,
		}
	}

	private async validateUser(dto: LoginDto) {
		const user = await this.prisma.user.findUnique({
			where: {
				email: dto.email,
			},
		})

		if (!user) {
			throw new NotFoundException('User already exists')
		}

		const isValidPassword = await verify(user.password, dto.password)

		if (!isValidPassword) {
			throw new UnauthorizedException('Invalid password')
		}

		return user
	}
}
