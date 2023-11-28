import {
	Controller,
	Get,
	Param,
	Post,
	Body,
	UsePipes,
	ValidationPipe,
	Delete,
} from '@nestjs/common'
import { OrderService } from './order.service'
import { OrderDto } from './order.dto'
import { CurrentUser } from 'src/auth/decorators/user.decorator'
import { Auth } from 'src/auth/decorators/auth.decorator'

@Controller('orders')
export class OrderController {
	constructor(private readonly orderService: OrderService) {}

	@Get('')
	@Auth('USER')
	async getAllByUserId(@CurrentUser('id') userId: string) {
		return this.orderService.getAllByUserId(userId)
	}

	@UsePipes(new ValidationPipe())
	@Post('')
	@Auth('USER')
	async createOrder(
		@Body() dto: OrderDto,
		@CurrentUser('id') userId: string
	) {
		return this.orderService.createOrder(dto, userId)
	}

	@Delete('/:orderId')
	@Auth('USER')
	async cancelOrder(@Param('orderId') orderId: string) {
		return this.orderService.cancelOrder(orderId)
	}
}
