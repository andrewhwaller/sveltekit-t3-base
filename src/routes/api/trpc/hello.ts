import { t } from '$lib/server/trpc'
import { z } from 'zod'

export const helloProcedure = t.procedure
	.input(z.object({ name: z.string().optional() }))
	.query(({ input }) => {
		return {
			message: `Hello, ${input.name || 'world'}`,
		}
	})