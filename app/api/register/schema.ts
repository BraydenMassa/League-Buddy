import { z } from 'zod'

const schema = z.object({
	username: z.string().min(3).max(17),
	email: z.string().email(),
	password: z.string().min(8)
})

export default schema
