
const frontRoute = require('./frontend/route')
const apiRoute = require('./api/route')

/**
 * Routes register
 *
 * @param {object} app - The express main app
 * @returns {void}
 */
 const routes = app => {
     
     app.use('/api',apiRoute); // add prefix "api"
     app.use(frontRoute);
 
    return app;
  };
  
module.exports = routes;