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
	GetAllProductsDto,
	ProductDto,
	ProductType,
	SortingDataDto,
} from './product.dto'

@Controller('products')
export class ProductController {
	constructor(private readonly productService: ProductService) {}

	@Delete(':id')
	async deleteProductById(@Param('id') id: string) {
		return this.productService.deleteProductById(id)
	}

	@Get()
	@UsePipes(new ValidationPipe())
	async getAll(@Query() dto: GetAllProductsDto) {
		return this.productService.getAll(dto)
	}

	@Get('type/:type')
	async getAllByType(
		@Query() dto: SortingDataDto,
		@Param('type') type: ProductType
	) {
		return this.productService.getAllByType(type, dto)
	}

	@Post()
	@UsePipes(new ValidationPipe())
	async createProduct(@Body() dto: ProductDto) {
		return this.productService.createProduct(dto)
	}

	@Put(':id')
	async updateProductById(@Param('id') @Body() id: string, dto: any) {
		return this.productService.updateProduct(id, dto)
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
