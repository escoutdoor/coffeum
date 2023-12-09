import { IsOptional, IsString, MinLength } from 'class-validator'

export class PromotionDto {
	@IsString()
	@MinLength(3, {
		message: 'Мінімальна довжина назви знакціїижки 3 символи',
	})
	name: string

	@IsString()
	imagePath: string

	@IsString()
	@MinLength(3, {
		message: 'Мінімальна довжина опису акції 3 символи',
	})
	description: string
}

export class UpdatePromotionDto {
	@IsOptional()
	@IsString()
	@MinLength(3, {
		message: 'Мінімальна довжина назви акції 3 символи',
	})
	name: string

	@IsOptional()
	@IsString()
	imagePath: string

	@IsOptional()
	@IsString()
	@MinLength(3, {
		message: 'Мінімальна довжина опису знижки 3 символи',
	})
	description: string
}
