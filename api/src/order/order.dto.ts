import { EnumOrderStatus } from '@prisma/client'
import { Type } from 'class-transformer'
import {
	ArrayMinSize,
	IsArray,
	IsEnum,
	IsNumber,
	IsOptional,
	IsString,
	ValidateNested,
} from 'class-validator'

export class OrderDto {
	@IsEnum(EnumOrderStatus)
	status: EnumOrderStatus

	@IsArray()
	@ArrayMinSize(1)
	@ValidateNested({ each: true })
	@Type(() => OrderItemDto)
	items: OrderItemDto[]

	@IsOptional()
	@IsString()
	description: string
}

export class OrderItemDto {
	@IsNumber()
	quantity: number

	@IsString()
	productId: string
}
