import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { promotionFields } from './promotion.object'
import { PromotionDto, UpdatePromotionDto } from './promotion.dto'

@Injectable()
export class PromotionService {
	constructor(private prisma: PrismaService) {}

	async getAll() {
		return this.prisma.promotion.findMany({
			select: promotionFields,
		})
	}

	async getById(id: string) {
		const promotion = await this.prisma.promotion.findUnique({
			where: {
				id: id,
			},
			select: promotionFields,
		})

		if (!promotion) {
			throw new NotFoundException('Акцію не знайдено')
		}

		return promotion
	}

	async create(dto: PromotionDto) {
		return this.prisma.promotion.create({
			data: dto,
			select: promotionFields,
		})
	}

	async update(id: string, dto: UpdatePromotionDto) {
		const promotion = await this.getById(id)

		return this.prisma.promotion.update({
			where: { id },
			data: dto,
			select: promotionFields,
		})
	}

	async delete(id: string) {
		const promotion = await this.getById(id)

		await this.prisma.promotion.delete({
			where: { id },
		})

		return 'Акцію видалено'
	}
}
