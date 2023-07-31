// Import the FormRoute
import { FormRoute } from "./form.route.js";

/**
 * Attach all routes to the Express app.
 * @param {Object} app - The Express app to which routes will be attached.
 */
const allRoutes = (app) => {
    // Mount the FormRoute under the '/form' endpoint
    app.use('/form', FormRoute);
}

// Export the allRoutes function
export { allRoutes };
