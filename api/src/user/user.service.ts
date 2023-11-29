import {
	Injectable,
	NotFoundException,
	BadRequestException,
} from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { UserDto } from './user.dto'
import { userFields } from './user.object'
import { EnumSort, IFilterSortDto } from 'src/product/product.dto'
import { Prisma } from '@prisma/client'

@Injectable()
export class UserService {
	constructor(private prisma: PrismaService) {}

	async getAll(dto: IFilterSortDto) {
		const orderBy: Prisma.UserOrderByWithRelationInput[] = []

		switch (dto.sortBy) {
			case EnumSort.NEWEST:
				orderBy.push({ createdAt: 'desc' })
				break
			case EnumSort.OLDEST:
				orderBy.push({ createdAt: 'asc' })
				break
		}

		const where: Prisma.UserWhereInput = dto.searchTerm
			? {
					OR: [
						{
							firstName: {
								contains: dto.searchTerm,
								mode: 'insensitive',
							},
						},
						{
							surName: {
								contains: dto.searchTerm,
								mode: 'insensitive',
							},
						},
						{
							email: {
								contains: dto.searchTerm,
								mode: 'insensitive',
							},
						},
						{ id: dto.searchTerm },
					],
			  }
			: {}

		return await this.prisma.user.findMany({
			where,
			select: userFields,
			orderBy,
		})
	}

	async getProfileById(id: string) {
		const user = await this.prisma.user.findUnique({
			where: { id },
			select: userFields,
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
				avatarPath: dto.avatarPath,
				recipient: {
					[user.recipient ? 'update' : 'create']: {
						...dto.recipient,
					},
				},
			},
			select: userFields,
		})
	}

	async toggleFavorite(id: string, productId: string) {
		const user = await this.getProfileById(id)

		const isExists = user.favorites.some(
			product => product.product.id === productId
		)

		return await this.prisma.user.update({
			where: {
				id,
			},
			data: {
				favorites: {
					[isExists ? 'deleteMany' : 'create']: {
						productId,
					},
				},
			},
			select: userFields,
		})
	}
}
