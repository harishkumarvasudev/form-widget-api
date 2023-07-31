// Import the logger and form model
import logger from '../../../config/logger.js';
import form from '../../models/form.model.js';

/**
 * Save form data to the database.
 * @param {Object} formData - The form data to be saved.
 * @returns {Object} - Object containing status and data of the operation.
 */
const saveFormService = async (formData) => {
  try {
    // Call the form model function to save the form data
    const result = await form.saveForm(formData);

    // Check if the data was not saved
    if (!result) {
      // Return a status indicating failure and a corresponding message
      return { status: false, data: 'Data not saved on the server.' };
    }

    // Return a status indicating success and a corresponding message
    return { status: true, data: 'Form data stored on DB successfully.' };
  } catch (error) {
    // Log the error using the logger
    logger.error(`Error occurred while adding the form: ${error}`);

    // Return a status indicating failure and a corresponding message
    return { status: false, data: 'Database failure' };
  }
};

// Export the saveFormService function
export { saveFormService };