/**
 * @param {*} schema - zod schema object
 * @returns  {Function}
 * @description This middleware is used to validate the request body against the schema provided
 */

function reqValidator(schema) {
	return async (req, res, next) => {
		try {
			await schema.parseAsync(req.body)
			next()
		} catch (error) {
			res.status(400).json({ message: error.errors[0].message })
		}
	}
}

export default reqValidator
