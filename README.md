**Widget API**

*Project Description*

The Widget API is an application for handling form data submissions and saving them to a Firebase Realtime Database. The application provides RESTful APIs for interacting with forms, allowing users to submit form data and retrieve previously submitted data.

*Features*

1. **Form Data Submission**: Users can submit form data through the API, which is then saved to the Firebase Realtime Database.

2. **Form Data Retrieval**: The API allows users to fetch previously submitted form data from the database.

3. **Logging**: The application uses the Winston logging library to log events and errors for easier debugging and monitoring.

4. **Error Handling**: Robust error handling is implemented throughout the application to handle unexpected scenarios and provide meaningful error messages.

5. **Validation**: Form data submitted by users is validated using Joi, a powerful schema validation library, to ensure data integrity and security.

6. **Authentication**: The application uses JSON Web Tokens (JWT) for user authentication and authorization.

*Installation*

1. Clone the repository from GitHub

2. Install dependencies: `npm install`

3. Set up the environment variables by creating a `.env` file in the root directory and providing the required configurations. An example of the `.env` file is provided below:

```
APP_NAME=formwidget-api
PORT=9980
NODE_ENV=development
HTTPS=false

FIREBASE_*

LOG_LEVEL=debug
LOG_SIZE=5242880
LOG_INTERVAL=30d

JWT_TOKEN_SECRET=your-jwt-token-secret
JWT_REFRESH_TOKEN_SECRET=your-jwt-refresh-token-secret
JWT_EXPIRY_TIME=900s
```

*Usage*

To start the application, run: `npm start:dev`

*API Endpoints*

1. **Submit Form Data**

   - Endpoint: `POST /form`
   - Request Body: JSON object containing form data
   - Response: JSON object indicating success or failure

2. **Retrieve Form Data**

   - Endpoint: `GET /form`
   - Response: JSON object containing previously submitted form data

*Validation*

Form data submitted by users is validated using Joi schemas to ensure data integrity and prevent malicious inputs.

*Authentication*

As its a demo purpose app, the authentication is disabled for intra requests.
