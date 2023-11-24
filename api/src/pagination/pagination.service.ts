import { Injectable } from '@nestjs/common'
import { PaginationDto } from './pagination.dto'

@Injectable()
export class PaginationService {
	getPagination(dto: PaginationDto) {
		const page = dto.page ? +dto.page : 1
		const limit = dto.limit ? +dto.limit : 12

		const skip = (page - 1) * limit

		return { limit, skip }
	}
}
