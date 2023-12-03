import {
	Controller,
	Get,
	Param,
	Post,
	Query,
	Body,
	UsePipes,
	ValidationPipe,
	Delete,
} from '@nestjs/common'
import { OrderService } from './order.service'
import { OrderDto } from './order.dto'
import { CurrentUser } from 'src/auth/decorators/user.decorator'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { IFilterSortDto } from 'src/product/product.dto'

@Controller('orders')
export class OrderController {
	constructor(private readonly orderService: OrderService) {}

	@Get('')
	@Auth('USER')
	async byUserId(@CurrentUser('id') userId: string) {
		return this.orderService.byUserId(userId)
	}

	@UsePipes(new ValidationPipe())
	@Get('all')
	@Auth('ADMIN')
	async getAll(@Query() dto: IFilterSortDto) {
		return this.orderService.getAll(dto)
	}

	@UsePipes(new ValidationPipe())
	@Post('')
	@Auth('USER')
	async create(@Body() dto: OrderDto, @CurrentUser('id') userId: string) {
		return this.orderService.create(dto, userId)
	}

	@Delete('/:orderId')
	@Auth('USER')
	async cancel(@Param('orderId') orderId: string) {
		return this.orderService.cancel(orderId)
	}
}
