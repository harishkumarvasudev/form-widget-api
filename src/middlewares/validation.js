import { StatusCodes } from 'http-status-codes';
import logger from '../../config/logger.js';

/**
 * Middleware function for validating request data against a Joi schema.
 * @param {Joi.Schema} validateSchema - The Joi schema used for data validation.
 * @returns {Function} - Express middleware function.
 */
const validation = (validateSchema) => {
  // Middleware function to validate the request data
  return (req, res, next) => {
    // Combine request parameters, body, and query into a single object
    let parameters = { ...req.params, ...req.body, ...req.query };

    // Log the request parameters for debugging (optional)
    console.log(`Request Parameters:`, parameters);

    // Validate the combined parameters against the provided Joi schema
    const result = validateSchema.validate(parameters);

    // If validation fails, return an invalid response with the validation error
    if (result.error) {
      logger.error(`Validation Error: ${JSON.stringify(result.error)}`);

      return res.status(StatusCodes.BAD_REQUEST).json({ error: result.error });
    }

    // If validation is successful, proceed to the next middleware/controller
    next();
  };
};

export { validation };
