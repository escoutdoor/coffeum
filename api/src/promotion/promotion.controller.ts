import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common'
import { PromotionService } from './promotion.service'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { PromotionDto, UpdatePromotionDto } from './promotion.dto'

@Controller('promotions')
export class PromotionController {
	constructor(private readonly promotionService: PromotionService) {}

	@Get()
	async getAll() {
		return this.promotionService.getAll()
	}

	@Get(':id')
	async getById(@Param('id') id: string) {
		return this.promotionService.getById(id)
	}

	@UsePipes(new ValidationPipe())
	@Post()
	@Auth('ADMIN')
	async create(@Body() dto: PromotionDto) {
		return this.promotionService.create(dto)
	}

	@UsePipes(new ValidationPipe())
	@Put(':id')
	@Auth('ADMIN')
	async update(@Param('id') id: string, @Body() dto: UpdatePromotionDto) {
		return this.promotionService.update(id, dto)
	}

	@Delete(':id')
	@Auth('ADMIN')
	async delete(@Param('id') id: string) {
		return this.promotionService.delete(id)
	}
}
