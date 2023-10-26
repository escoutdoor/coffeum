import { z } from 'zod'

export const addressSchema = z.object({
	address: z
		.string()
		.min(3, { message: 'Адреса не може бути менше 3 символів' }),
})
