import { Transform } from 'class-transformer'
import {
	IsString,
	IsNumber,
	IsArray,
	IsEnum,
	ArrayMinSize,
	IsOptional,
	MinLength,
	Min,
} from 'class-validator'

export enum EnumProductType {
	COFFEE = 'coffee',
	COFFEE_MACHINES = 'coffee-machines',
	TEA = 'tea',
	ACCESSORIES = 'accessories',
	COCOA_CHOCOLATE = 'cocoa-chocolate',
	MARKDOWN = 'markdown',
}

export enum EnumSort {
	DESC_PRICE = 'desc-price',
	ASC_PRICE = 'asc-price',
	POPULARITY = 'popularity',
	NEWEST = 'newest',
	OLDEST = 'oldest',
}

export class ProductDto {
	@IsString()
	@MinLength(3, {
		message: 'Назва продукту має містити не менше 3 символів',
	})
	name: string

	@IsString()
	@MinLength(3, {
		message: 'Опис продукту має містити не менше 3 символів',
	})
	description: string

	@IsString()
	image: string

	@IsEnum(EnumProductType)
	@MinLength(3, {
		message: 'Мінімальная довжина типу продукту - 3 символи',
	})
	type: string

	@IsNumber()
	@Min(0, {
		message: 'Мінімальна ціна - 1 грн',
	})
	originalPrice: number

	@IsNumber()
	@Min(0, {
		message: 'Мінімальная ціна зі знижкою - 0 грн',
	})
	discountedPrice: number

	@IsString()
	@MinLength(3, {
		message: 'Мінімальная довжина країни - 3 символи',
	})
	country: string

	@IsOptional()
	@IsString()
	packing: string

	@IsString()
	@MinLength(3, {
		message: 'Назва бренду має містити не менше 3 символів',
	})
	brand: string

	@IsNumber()
	@Min(0, {
		message: 'Мінімальна кількість - 0 грн',
	})
	quantity: number

	@IsOptional()
	@IsArray()
	composition: string[]

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
	sortBy: EnumSort

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
