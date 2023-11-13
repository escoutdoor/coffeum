import { Type } from 'class-transformer'
import {
	IsEmail,
	IsObject,
	IsOptional,
	IsPhoneNumber,
	IsString,
	ValidateNested,
} from 'class-validator'

export class AddressDto {
	@IsOptional()
	@IsString()
	city: string

	@IsOptional()
	@IsString()
	mailroom: string
}

export class RecipientDto {
	@IsOptional()
	@IsString()
	firstName: string

	@IsOptional()
	@IsString()
	surName: string

	@IsOptional()
	@IsPhoneNumber()
	@IsString()
	phone: string

	@IsOptional()
	@IsObject()
	@ValidateNested()
	@Type(() => AddressDto)
	address: AddressDto
}

export class UserDto {
	@IsOptional()
	@IsString()
	firstName: string

	@IsOptional()
	@IsString()
	surName?: string

	@IsEmail()
	email: string

	@IsOptional()
	@IsString()
	password: string

	@IsOptional()
	@IsString()
	avatarPath?: string

	@IsOptional()
	@IsObject()
	@ValidateNested()
	@Type(() => RecipientDto)
	recipient: RecipientDto
}
