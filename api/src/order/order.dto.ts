import { EnumOrderStatus } from '@prisma/client'
import { Type } from 'class-transformer'
import {
	ArrayMinSize,
	IsArray,
	IsEnum,
	IsNumber,
	IsObject,
	IsOptional,
	IsPhoneNumber,
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

	@IsString()
	firstName: string

	@IsString()
	surName: string

	@IsPhoneNumber()
	@IsString()
	phone: string

	@IsString()
	city: string

	@IsString()
	mailroom: string
}

export class OrderItemDto {
	@IsNumber()
	quantity: number

	@IsString()
	productId: string
}
