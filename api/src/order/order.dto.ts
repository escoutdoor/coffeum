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

export class AddressDto {
	@IsString()
	city: string

	@IsString()
	mailroom: string
}

export class RecipientDto {
	@IsString()
	firstName: string

	@IsString()
	surName: string

	@IsPhoneNumber()
	@IsString()
	phone: string

	@IsObject()
	@ValidateNested()
	@Type(() => AddressDto)
	address: AddressDto
}

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

	@IsObject()
	@ValidateNested()
	@Type(() => RecipientDto)
	recipient: RecipientDto
}

export class OrderItemDto {
	@IsNumber()
	quantity: number

	@IsString()
	productId: string
}
