import Joi from 'joi';
import logger from '../../../config/logger.js';

/**
 * Middleware function to validate request data using Joi schema.
 * @param {string} controllerName - The name of the controller associated with the validation.
 * @returns {Function} - Express middleware function.
 */
const validate = (controllerName) => {
  // Get the Joi schema for validation based on the controllerName
  const schema = getValidationObject(controllerName);

  if (!schema) {
    throw new Error('API validation is not available for this controller');
  }

  // Middleware function to validate the request data
  return async (req, res, next) => {
    try {
      // Combine request parameters, query, and body into a single object
      let parameters = { ...req.params, ...req.query, ...req.body };

      // Validate the combined parameters against the schema
      const result = await schema.validateAsync(parameters);

      // If validation is successful, proceed to the next middleware/controller
      next();
    } catch (error) {
      console.error(`Error occurred in the validation middleware: ${error}`);
      logger.error(`Error occurred in validation middleware for controller "${controllerName}": ${error}`);

      // Respond with an invalid response containing the error message
      return res.invalid({ error: { data: error.message } });
    } finally {
      // Reset the controllerName variable to null to prevent potential memory leaks
      controllerName = null;
    }
  };
};

/**
 * Get the Joi schema for validation based on the controllerName.
 * @param {string} controllerName - The name of the controller.
 * @returns {Joi.Schema | false} - The Joi schema for validation or false if not found.
 */
const getValidationObject = (controllerName) => {
  switch (controllerName) {
    case 'saveForm':
      // TODO: Validation object to be retrieved from the widget-config API.
      // Once this is done, forms can have dynamic fields, and strict validation can be applied.
      // For demo purposes, strict validation has been temporarily removed.
      return Joi.object({
        id: Joi.number().positive().required(),
      });

    default:
      // If the controllerName is not recognized, return false indicating no validation is available.
      return false;
  }
};

export { validate };
