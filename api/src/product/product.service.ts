import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { PaginationService } from 'src/pagination/pagination.service'
import {
	EnumProductSort,
	GetAllProductsDto,
	ProductDto,
	ProductType,
	SortingDataDto,
} from './product.dto'
import { Prisma } from '@prisma/client'
import { split } from 'src/utils/split'
import { returnUserFields } from '../user/user-fields.object'
import { returnProductFields } from './product-fields.object'

@Injectable()
export class ProductService {
	constructor(
		private prisma: PrismaService,
		private paginationService: PaginationService
	) {}

	async deleteProductById(id: string) {
		return await this.prisma.product.delete({
			where: {
				id,
			},
		})
	}

	async getAll(dto: GetAllProductsDto) {
		const { searchTerm, sortBy } = dto

		const sorting: Prisma.ProductOrderByWithRelationInput[] = []

		switch (sortBy) {
			case EnumProductSort.ASCPRICE:
				sorting.push({ discountedPrice: 'asc' })
				break
			case EnumProductSort.DESCPRICE:
				sorting.push({ discountedPrice: 'desc' })
				break
		}

		const searchTermFilter: Prisma.ProductWhereInput = searchTerm
			? {
					OR: [
						{ name: { contains: searchTerm, mode: 'insensitive' } },
						{
							brand: {
								contains: searchTerm,
								mode: 'insensitive',
							},
						},
						{
							categories: {
								hasSome: [searchTerm],
							},
						},
						{
							description: {
								contains: searchTerm,
								mode: 'insensitive',
							},
						},
						{
							country: {
								contains: searchTerm,
								mode: 'insensitive',
							},
						},
						{
							packing: {
								contains: searchTerm,
								mode: 'insensitive',
							},
						},
						{ composition: { hasSome: [searchTerm] } },
					],
			  }
			: {}

		const { limit, skip } = this.paginationService.getPagination(dto)

		const products = await this.prisma.product.findMany({
			where: searchTermFilter,
			orderBy: sorting,
			skip,
			select: {
				id: true,
				name: true,
				categories: true,
				image: true,
				brand: true,
				discountedPrice: true,
				originalPrice: true,
				quantity: true,
			},
			take: limit,
		})

		return {
			products,
			length: await this.prisma.product.count({
				where: searchTermFilter,
			}),
		}
	}

	async getAllByType(type: ProductType, dto: SortingDataDto) {
		const {
			category,
			minPrice,
			maxPrice,
			availability,
			brands,
			countries,
			composition,
			packing,
			sortBy,
		} = dto

		const filter: Prisma.ProductWhereInput = {
			type,
			discountedPrice: {
				gte: minPrice ? +minPrice : undefined,
				lte: maxPrice ? +maxPrice : undefined,
			},
			...(availability && { quantity: { not: 0 } }),
			...(category && { categories: { has: category } }),
			...(countries && { country: { in: split(countries) } }),
			...(brands && { brand: { in: split(brands) } }),
			...(packing && { packing: { in: split(packing) } }),
			...(composition && {
				composition: { hasSome: split(composition) },
			}),
		}

		const sorting: Prisma.ProductOrderByWithRelationInput[] = []

		switch (sortBy) {
			case EnumProductSort.ASCPRICE:
				sorting.push({ discountedPrice: 'asc' })
				break
			case EnumProductSort.DESCPRICE:
				sorting.push({ discountedPrice: 'desc' })
				break
		}

		const { limit, skip } = this.paginationService.getPagination(dto)

		const products = await this.prisma.product.findMany({
			where: filter,
			orderBy: sorting,
			skip,
			select: {
				...returnProductFields,
			},
			take: limit,
		})

		return {
			products,
			length: await this.prisma.product.count({
				where: filter,
			}),
		}
	}

	createProduct(dto: ProductDto) {
		return this.prisma.product.create({
			data: {
				...dto,
			},
		})
	}

	updateProduct(id: string, dto: any) {
		return this.prisma.product.update({
			where: {
				id: id,
			},
			data: {
				country: 'Франція',
			},
		})
	}

	async getProductById(id: string) {
		const product = await this.prisma.product.findUnique({
			where: {
				id: id,
			},
			include: {
				reviews: {
					include: {
						author: {
							select: {
								...returnUserFields,
							},
						},
					},
				},
			},
		})

		if (!product) {
			throw new NotFoundException('Product not found')
		}

		return product
	}

	async getSimilar(id: string) {
		const product = await this.getProductById(id)

		const similar = await this.prisma.product.findMany({
			where: {
				type: product.type,
				categories: {
					hasSome: product.categories,
				},
				quantity: {
					gt: 0,
				},
				NOT: {
					id: product.id,
				},
			},
			take: 8,
			select: {
				...returnProductFields,
			},
		})

		return similar
	}

	getAllBrands() {
		return this.prisma.product.findMany({
			select: {
				brand: true,
			},
			distinct: ['brand'],
		})
	}

	async getProductsByBrand(brand: string, dto: SortingDataDto) {
		const { sortBy } = dto

		const sorting: Prisma.ProductOrderByWithRelationInput[] = []
		switch (sortBy) {
			case EnumProductSort.ASCPRICE:
				sorting.push({ discountedPrice: 'asc' })
				break
			case EnumProductSort.DESCPRICE:
				sorting.push({ discountedPrice: 'desc' })
				break
		}

		const { limit, skip } = this.paginationService.getPagination(dto)

		const products = await this.prisma.product.findMany({
			where: {
				brand,
			},
			orderBy: sorting,
			skip,
			select: {
				...returnProductFields,
			},
			take: limit,
		})

		return {
			products,
			length: await this.prisma.product.count({
				where: {
					brand,
				},
			}),
		}
	}
}
