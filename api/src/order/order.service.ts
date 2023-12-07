import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { OrderDto } from './order.dto'
import { orderFields } from './order.object'
import { EnumSort, IFilterSortDto } from 'src/product/product.dto'
import { Prisma } from '@prisma/client'
import { PaginationService } from 'src/pagination/pagination.service'

@Injectable()
export class OrderService {
	constructor(
		private prisma: PrismaService,
		private paginationService: PaginationService
	) {}

	async orderById(id: string) {
		return this.prisma.order.findUnique({
			where: {
				id,
			},
			select: orderFields,
		})
	}

	async byUserId(userId: string) {
		return await this.prisma.order.findMany({
			where: {
				userId,
			},
			select: orderFields,
		})
	}

	async create(dto: OrderDto, userId: string) {
		return this.prisma.order.create({
			data: {
				status: dto.status,
				description: dto.description,
				user: {
					connect: {
						id: userId,
					},
				},
				items: {
					create: dto.items,
				},
				firstName: dto.firstName,
				surName: dto.surName,
				phone: dto.phone,
				city: dto.city,
				mailroom: dto.mailroom,
			},
			select: orderFields,
		})
	}

	async cancel(orderId: string) {
		const order = await this.orderById(orderId)

		if (!order) {
			throw new NotFoundException("Order doesn't exist")
		}

		await this.prisma.order.delete({
			where: {
				id: orderId,
			},
		})

		return 'ORDER DELETED'
	}

	async getAll(dto: IFilterSortDto) {
		const orderBy: Prisma.OrderOrderByWithRelationInput[] = []

		switch (dto.sortBy) {
			case EnumSort.NEWEST:
				orderBy.push({ createdAt: 'desc' })
				break
			case EnumSort.OLDEST:
				orderBy.push({ createdAt: 'asc' })
				break
		}

		const where: Prisma.OrderWhereInput = dto.searchTerm
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
							phone: {
								contains: dto.searchTerm,
								mode: 'insensitive',
							},
						},
						{
							city: {
								contains: dto.searchTerm,
								mode: 'insensitive',
							},
						},
						{
							mailroom: {
								contains: dto.searchTerm,
								mode: 'insensitive',
							},
						},
						{
							description: {
								contains: dto.searchTerm,
								mode: 'insensitive',
							},
						},
						{
							id: {
								contains: dto.searchTerm,
								mode: 'insensitive',
							},
						},
					],
			  }
			: {}

		const { limit, skip } = this.paginationService.getPagination(dto)

		const orders = await this.prisma.order.findMany({
			where,
			orderBy,
			take: limit,
			skip,
			select: orderFields,
		})

		return orders
	}
}
