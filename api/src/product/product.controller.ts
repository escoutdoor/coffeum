import {
	Controller,
	Post,
	Body,
	Param,
	ValidationPipe,
	UsePipes,
	Get,
	Delete,
	Put,
	Query,
} from '@nestjs/common'
import { ProductService } from './product.service'
import {
	EnumProductType,
	IFilterSortDto,
	ProductDto,
	SortingDataDto,
} from './product.dto'
import { Auth } from 'src/auth/decorators/auth.decorator'

@Controller('products')
export class ProductController {
	constructor(private readonly productService: ProductService) {}

	@Delete(':id')
	@Auth('ADMIN')
	async deleteById(@Param('id') id: string) {
		return this.productService.deleteById(id)
	}

	@UsePipes(new ValidationPipe())
	@Get()
	async getAll(@Query() dto: IFilterSortDto) {
		return this.productService.getAll(dto)
	}

	@UsePipes(new ValidationPipe({ transform: true }))
	@Get('type/:type')
	async getAllByType(
		@Query() dto: SortingDataDto,
		@Param('type') type: EnumProductType
	) {
		return this.productService.getAllByType(type, dto)
	}

	@UsePipes(new ValidationPipe())
	@Post()
	@Auth('ADMIN')
	async create(@Body() dto: ProductDto) {
		return this.productService.create(dto)
	}

	@Put(':id')
	@Auth('ADMIN')
	async updateById(@Param('id') productId: string, @Body() dto: ProductDto) {
		return this.productService.updateById(productId, dto)
	}

	@Get(':id')
	async byId(@Param('id') id: string) {
		return this.productService.byId(id)
	}

	@Get('similar/:productId')
	async getSimilar(@Param('productId') productId: string) {
		return this.productService.getSimilar(productId)
	}

	@Get('/brands/getAll')
	async getBrands() {
		return this.productService.getBrands()
	}

	@Get('byBrand/:brand')
	async getByBrand(
		@Query() dto: SortingDataDto,
		@Param('brand') brand: string
	) {
		return this.productService.getByBrand(brand, dto)
	}
}
