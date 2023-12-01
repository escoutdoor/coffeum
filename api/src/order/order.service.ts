import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { OrderDto } from './order.dto'
import { orderFields, orderItemFields } from './order.object'

@Injectable()
export class OrderService {
	constructor(private prisma: PrismaService) {}

	async orderById(id: string) {
		return this.prisma.order.findUnique({
			where: {
				id,
			},
			select: orderFields,
		})
	}

	async getAll(userId: string) {
		return this.prisma.orderItem.findMany({
			where: {
				order: {
					userId,
				},
			},
			select: orderItemFields,
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
}
