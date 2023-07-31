import { DateTime } from 'luxon';
import { db } from './db.js';

/**
 * Save form data to the database.
 * @param {Object} data - The data to be saved to the database.
 * @returns {Promise} - A Promise that resolves to the result of the database operation.
 */
const saveForm = async (data) => {
  // Set the default collection name to 'data'
  let collectionName = 'data';

  // If 'type' field exists in the data, use it as the collection name
  if (data['type']) {
    collectionName = data['type'];
  }

  // Get a reference to the database collection
  const ref = db.ref(collectionName);

  // Save the data to the database and return the result as a Promise
  return await ref.push(data);

  // Example of how to save data to the database:
  // await ref.push({
  //   "id": 2,
  //   "name": "Example Technologies Pvt Ltd",
  //   "apiKey": "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJUZW5hbnQgSWQiOiIxIiwiSXNzdWVyIjoiRm9ybSBXaWRnZXQgQXBwIiwiZXhwIjoxNzIyMzUyMDYwLCJpYXQiOjE2OTA3Mjk2NjB9.rhTZmk-zQH_0-7_TgALmUaF2KCiX9Ls3_ZXmPmxi93Y",
  //   "ExpiryDate": "2024-07-30T15:07:40.091Z",
  //   "status": "active",
  //   "limit": 10000
  // });
};

// Export the saveForm function as the default export
export default { saveForm };