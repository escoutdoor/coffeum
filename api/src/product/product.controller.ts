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
	async deleteProductById(@Param('id') id: string) {
		return this.productService.deleteProductById(id)
	}

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
	async createProduct(@Body() dto: ProductDto) {
		return this.productService.createProduct(dto)
	}

	@Put(':id')
	@Auth('ADMIN')
	async updateProductById(
		@Param('id') productId: string,
		@Body() dto: ProductDto
	) {
		return this.productService.updateProduct(productId, dto)
	}

	@Get(':id')
	async getProductById(@Param('id') id: string) {
		return this.productService.getProductById(id)
	}

	@Get('similar/:productId')
	async getSimilarProducts(@Param('productId') productId: string) {
		return this.productService.getSimilar(productId)
	}

	@Get('/brands/getAll')
	async getAllBrands() {
		return this.productService.getAllBrands()
	}

	@Get('byBrand/:brand')
	async getProductsByBrand(
		@Query() dto: SortingDataDto,
		@Param('brand') brand: string
	) {
		return this.productService.getProductsByBrand(brand, dto)
	}
}
