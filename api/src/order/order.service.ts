import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { OrderDto } from './order.dto'
import { returnOrderFields } from './order.object'

@Injectable()
export class OrderService {
	constructor(private prisma: PrismaService) {}

	async orderById(id: string) {
		return this.prisma.order.findUnique({
			where: {
				id,
			},
			select: returnOrderFields,
		})
	}

	async getAllByUserId(userId: string) {
		return this.prisma.order.findMany({
			where: {
				userId,
			},
			select: returnOrderFields,
		})
	}

	async createOrder(dto: OrderDto, userId: string) {
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
				recipient: {
					create: {
						firstName: dto.recipient.firstName,
						surName: dto.recipient.surName,
						phone: dto.recipient.phone,
						address: {
							create: dto.recipient.address,
						},
					},
				},
			},
			include: {
				items: true,
				recipient: {
					include: {
						address: true,
					},
				},
				user: true,
			},
		})
	}

	async cancelOrder(orderId: string) {
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
