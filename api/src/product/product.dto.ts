import { Transform } from 'class-transformer'
import {
	IsString,
	IsNumber,
	IsArray,
	IsEnum,
	ArrayMinSize,
	IsOptional,
} from 'class-validator'

export enum EnumProductType {
	COFFEE = 'coffee',
	COFFEE_MACHINES = 'coffee-machines',
	TEA = 'tea',
	ACCESSORIES = 'accessories',
	COCOA_CHOCOLATE = 'cocoa-chocolate',
	MARKDOWN = 'markdown',
}

export enum EnumProductSort {
	DESC_PRICE = 'desc-price',
	ASC_PRICE = 'asc-price',
	RATING = 'rating',
	POPULARITY = 'popularity',
}

export class ProductDto {
	@IsString()
	name: string

	@IsString()
	description: string

	@IsEnum(EnumProductType)
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

export class IFilterSortDto {
	@IsOptional()
	@IsString()
	searchTerm: string

	@IsOptional()
	sortBy: EnumProductSort

	@IsOptional()
	@IsString()
	limit: string

	@IsOptional()
	@IsString()
	page: string
}
export class SortingDataDto extends IFilterSortDto {
	@IsOptional()
	@IsString()
	category: string

	@IsOptional()
	@IsString()
	minPrice: string

	@IsOptional()
	@IsString()
	maxPrice: string

	@IsOptional()
	@IsString()
	availability: string

	@IsOptional()
	@Transform(({ value }) => value.split(',').map(v => v.trim()))
	@IsArray()
	brands: string[]

	@IsOptional()
	@Transform(({ value }) => value.split(',').map(v => v.trim()))
	@IsArray()
	countries: string[]

	@IsOptional()
	@Transform(({ value }) => value.split(',').map(v => v.trim()))
	@IsArray()
	packing: string[]

	@IsOptional()
	@Transform(({ value }) => value.split(',').map(v => v.trim()))
	@IsArray()
	composition: string[]
}
