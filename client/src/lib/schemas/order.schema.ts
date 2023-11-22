import { z } from 'zod'
import { recipientSchema } from './recipient.schema'

export const orderSchema = z.object({
	description: z.string().optional(),
	recipient: recipientSchema,
})

export type TOrderSchema = z.infer<typeof orderSchema>
