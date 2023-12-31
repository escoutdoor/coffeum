import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { PaginationService } from 'src/pagination/pagination.service'
import {
	EnumSort,
	EnumProductType,
	IFilterSortDto,
	ProductDto,
	SortingDataDto,
} from './product.dto'
import { Prisma } from '@prisma/client'
import { productFields } from './product.object'

@Injectable()
export class ProductService {
	constructor(
		private prisma: PrismaService,
		private paginationService: PaginationService
	) {}

	async deleteById(id: string) {
		const product = await this.byId(id)

		await this.prisma.product.delete({
			where: {
				id,
			},
		})

		return 'PRODUCT DELETED'
	}

	async getSorting(sortBy: EnumSort) {
		const sorting: Prisma.ProductOrderByWithRelationInput[] = []

		switch (sortBy) {
			case EnumSort.ASC_PRICE:
				sorting.push({ discountedPrice: 'asc' })
				break
			case EnumSort.DESC_PRICE:
				sorting.push({ discountedPrice: 'desc' })
				break
			case EnumSort.POPULARITY:
				sorting.push(
					{ reviews: { _count: 'desc' } },
					{ favorites: { _count: 'desc' } }
				)
				break
		}

		return sorting
	}

	async getAll(dto: IFilterSortDto) {
		const { searchTerm } = dto

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
			orderBy: await this.getSorting(dto.sortBy),
			skip,
			select: productFields,
			take: limit,
		})

		return {
			products,
			length: await this.prisma.product.count({
				where: searchTermFilter,
			}),
		}
	}

	async getAllByType(type: EnumProductType, dto: SortingDataDto) {
		const filterOptions: Prisma.ProductWhereInput = {
			type,
			discountedPrice: {
				gte: +dto.minPrice,
				lte: +dto.maxPrice,
			},
			brand: {
				in: dto.brands,
			},
			quantity: {
				[dto.availability ? 'not' : 'gt']: 0,
			},
			...(dto.category && { categories: { has: dto.category } }),
			country: {
				in: dto.countries,
			},
			packing: {
				in: dto.packing,
			},
			...(dto.composition && {
				composition: { hasSome: dto.composition },
			}),
		}

		const { limit, skip } = this.paginationService.getPagination(dto)

		const products = await this.prisma.product.findMany({
			where: filterOptions,
			orderBy: await this.getSorting(dto.sortBy),
			skip,
			select: productFields,
			take: limit,
		})

		return {
			products,
			length: await this.prisma.product.count({
				where: filterOptions,
			}),
		}
	}

	async create(dto: ProductDto) {
		return this.prisma.product.create({
			data: dto,
		})
	}

	async updateById(productId: string, dto: ProductDto) {
		const product = await this.prisma.product.findUnique({
			where: {
				id: productId,
			},
		})

		if (!product) {
			throw new NotFoundException('Product not found')
		}

		return await this.prisma.product.update({
			where: {
				id: productId,
			},
			data: {
				...dto,
				composition: dto.composition || [],
			},
			select: productFields,
		})
	}

	async byId(id: string) {
		const product = await this.prisma.product.findUnique({
			where: {
				id: id,
			},
			select: productFields,
		})

		if (!product) {
			throw new NotFoundException('Product not found')
		}

		return product
	}

	async getSimilar(id: string) {
		const product = await this.byId(id)

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
			select: productFields,
		})

		return similar
	}

	getBrands() {
		return this.prisma.product.groupBy({
			by: 'brand',
		})
	}

	async getByBrand(brand: string, dto: SortingDataDto) {
		const { limit, skip } = this.paginationService.getPagination(dto)

		const products = await this.prisma.product.findMany({
			where: {
				brand,
			},
			orderBy: await this.getSorting(dto.sortBy),
			skip,
			select: productFields,
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
