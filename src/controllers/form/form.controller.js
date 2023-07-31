import logger from '../../../config/logger.js';
import { saveFormService } from '../../services/form/form.service.js';

/**
 * Controller function to handle form data submission and save it to the database.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} - A Promise that resolves when the response is sent.
 */
const saveForm = async (req, res) => {
  try {
    // Call the saveFormService to handle form data saving
    const result = await saveFormService({ ...req.body });

    // If the saveFormService returns an unsuccessful status, send a failure response
    if (!result.status) {
      return res.failure({ error: result });
    }

    // If the saveFormService returns a successful status, send a success response with the data
    return res.success({ data: result.data });
  } catch (error) {
    // If an error occurs during form data saving, log the error and send a failure response
    logger.error(`Error occurred while saving the form data: ${error}`);

    return res.failure({ error: error });
  }
};

export { saveForm };