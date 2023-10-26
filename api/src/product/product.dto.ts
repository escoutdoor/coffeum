import {
	IsString,
	IsNumber,
	IsArray,
	IsEnum,
	ArrayMinSize,
	IsOptional,
} from 'class-validator'

export type ProductType =
	| 'coffee'
	| 'coffee-machines'
	| 'accessories'
	| 'tea'
	| 'cocoa-chocolate'
	| 'markdown'

const ProductTypes: ProductType[] = [
	'coffee',
	'coffee-machines',
	'accessories',
	'tea',
	'cocoa-chocolate',
	'markdown',
]

export enum EnumProductSort {
	DESCPRICE = 'desc-price',
	ASCPRICE = 'asc-price',
	RATING = 'rating',
	POPULARITY = 'popularity',
}

export class ProductDto {
	@IsString()
	name: string
	@IsString()
	description: string
	@IsEnum(ProductTypes)
	type: string
	@IsNumber()
	originalPrice: number
	@IsNumber()
	discountedPrice: number
	@IsString()
	country: string
	@IsString()
	brand: string
	@IsNumber()
	quantity: number
	@IsArray()
	@IsString({ each: true })
	@ArrayMinSize(1)
	categories: string[]
}

export class SortingDataDto {
	@IsOptional()
	@IsString()
	category?: string

	@IsOptional()
	@IsString()
	minPrice?: string

	@IsOptional()
	@IsString()
	maxPrice?: string

	@IsOptional()
	@IsString()
	availability?: string

	@IsOptional()
	@IsString()
	brands?: string

	@IsOptional()
	@IsString()
	countries?: string

	@IsOptional()
	@IsString()
	packing?: string

	@IsOptional()
	@IsString()
	composition?: string

	@IsOptional()
	@IsEnum(EnumProductSort)
	sortBy?: EnumProductSort

	@IsOptional()
	@IsString()
	limit: string

	@IsOptional()
	@IsString()
	page: string
}

export class GetAllProductsDto {
	@IsOptional()
	@IsString()
	searchTerm?: string
	sortBy: EnumProductSort
	@IsOptional()
	@IsString()
	limit?: string
	@IsOptional()
	@IsString()
	page?: string
}
