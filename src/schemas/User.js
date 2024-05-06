import { z } from 'zod'

const UserSchema = z.object({
	id: z
		// biome-ignore lint/style/useNamingConvention: <explanation>
		.number({ message: 'User Id Is Required', invalid_type_error : "Invalid errr type"})
		.int()
		.positive({ message: 'User ID Must Be Positive Integer.' }),

	name: z
		.string({ message: 'Invalid Name' })
		.trim()
		.min(3, { message: 'User Name Must Be At Least 3 Characters Long.' }),

	lastname: z
		.string({ message: 'Invalid Lastname' })
		.trim()
		.min(3, { message: 'User Lastname Must Be At Least 3 Characters Long.' })
})

export default UserSchema
