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
			const { message, code, expected } = error.errors[0]
			res.status(404).json({ message, code, expected })
		}
	}
}

export default reqValidator
