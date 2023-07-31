import express from 'express';

import { saveForm } from '../controllers/form/form.controller.js';
import { validate } from './validation/validate.validate.js';

// Create a new Express router instance
const router = express.Router();

// Route for handling form data submission (PUT request)
router.put('/', saveForm);

/**
 * TODO: Dynamic Form Fields
 * Retrieve validation object from the widget-config API.
 * Once this is done, forms can have dynamic fields, and strict validation can be enabled.
 * For demo purposes, strict validation has been temporarily removed.
 * To enable strict validation, uncomment the line below:
 *
 * router.put('/', validate('saveForm'), saveForm);
 *
 * The 'validate' middleware will be responsible for validating the submitted form data.
 * It should be configured based on the validation rules provided by the widget-config API.
 * When the validation is successful, the 'saveForm' controller function will be called to handle the form data.
 */

// Export the Express router as 'FormRoute'
export { router as FormRoute };