import { IsNumber, IsString } from 'class-validator'

export class ReviewDto {
	@IsString()
	text: string

	@IsNumber()
	rating: number

	@IsString()
	productId: string
}
