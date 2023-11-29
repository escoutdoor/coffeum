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
	async updateProfile(@CurrentUser('id') id: string, @Body() dto: UserDto) {
		return await this.userService.updateProfile(id, dto)
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
