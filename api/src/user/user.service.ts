import {
	Injectable,
	NotFoundException,
	BadRequestException,
	UnauthorizedException,
} from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { UserDto } from './user.dto'
import { returnUserFields } from './user-fields.object'
import { hash, verify } from 'argon2'
import { returnProductFields } from '../product/product-fields.object'

@Injectable()
export class UserService {
	constructor(private prisma: PrismaService) {}

	async getProfileById(id: string) {
		const user = await this.prisma.user.findUnique({
			where: { id },
			select: {
				...returnUserFields,
				favorites: {
					include: {
						product: {
							select: {
								...returnProductFields,
								categories: false,
							},
						},
					},
				},
			},
		})

		if (!user) {
			throw new NotFoundException('User not found')
		}

		return user
	}

	async updateProfile(id: string, dto: UserDto) {
		const isSameUser = await this.prisma.user.findUnique({
			where: {
				email: dto.email,
			},
		})

		if (isSameUser && isSameUser.id !== id) {
			throw new BadRequestException('Email is already taken')
		}

		const user = await this.getProfileById(id)

		return await this.prisma.user.update({
			where: { id },
			data: {
				firstName: dto.firstName,
				surName: dto.surName,
				email: dto.email,
				password: dto.password
					? await hash(dto.password)
					: user.password,
				avatarPath: dto.avatarPath,
				recipient: {
					[user.recipient ? 'update' : 'create']: {
						...dto.recipient,
						address: {
							[user.recipient?.address ? 'update' : 'create']:
								dto.recipient.address,
						},
					},
				},
			},
			select: {
				...returnUserFields,
			},
		})
	}

	async changePassword(user: UserDto, password?: string) {
		if (!password) {
			return user.password
		}

		const isPasswordValid = await verify(user.password, password)

		if (!isPasswordValid) {
			throw new UnauthorizedException('Invalid password')
		}

		return await hash(password)
	}

	async toggleFavorite(id: string, productId: string) {
		const user = await this.getProfileById(id)

		const isExists = user.favorites.some(
			product => product.productId === productId
		)

		return await this.prisma.user.update({
			where: { id: user.id },
			data: {
				favorites: {
					[isExists ? 'deleteMany' : 'create']: {
						productId,
					},
				},
			},
			include: {
				favorites: true,
			},
		})
	}
}
