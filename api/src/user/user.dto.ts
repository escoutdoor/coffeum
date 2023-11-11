import { IsEmail, IsOptional, IsString } from 'class-validator'

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
}
