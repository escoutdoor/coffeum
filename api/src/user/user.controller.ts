import {
	Body,
	Controller,
	UsePipes,
	ValidationPipe,
	Get,
	Put,
	HttpCode,
	Patch,
	Param,
	Query,
} from '@nestjs/common'
import { UserService } from './user.service'
import { UserDto } from './user.dto'
import { CurrentUser } from 'src/auth/decorators/user.decorator'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { IFilterSortDto } from 'src/product/product.dto'
import { Role } from '@prisma/client'

@Controller('users')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@UsePipes(new ValidationPipe())
	@Get('')
	@Auth('ADMIN')
	async getAll(@Query() dto: IFilterSortDto) {
		return await this.userService.getAll(dto)
	}

	@Get('profile')
	@Auth('USER')
	async getProfile(@CurrentUser('id') id: string) {
		return await this.userService.getProfileById(id)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Put('profile')
	@Auth('USER')
	async update(@CurrentUser('id') id: string, @Body() dto: UserDto) {
		return await this.userService.update(id, dto)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Put('modify/:userId')
	@Auth('ADMIN')
	async modify(
		@Param('userId') userId: string,
		@Body() dto: UserDto & { role?: Role }
	) {
		return await this.userService.modify(userId, dto)
	}

	@HttpCode(200)
	@Patch('profile/favorites/:productId')
	@Auth('USER')
	async toggleFavorites(
		@CurrentUser('id') id: string,
		@Param('productId') productId: string
	) {
		return await this.userService.toggleFavorite(id, productId)
	}
}
