// using nodemon so that you do not need to type node index.js every time new code saved

// import express - is for building the Rest apis
import express from "express";

// import body-parser - helps to parse the request and create the req.body object
import bodyParser from "body-parser";

// import cors - provides Express middleware to enable CORS with various options, connect frontend
import cors from "cors";

// import routes
import router from "./routes/routes.js";

// import path
import path from "path";
import { fileURLToPath } from "url";

// use path
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// init express
const app = express();

// use express json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//use cors
app.use(cors());

// API routes should be handled first
app.use(router);

app.get('/api', function(req, res){
  res.json({ message: 'Welcome to restaurant api' });
});

// Serve static files from the 'restaurant_management' directory (where Vue app is built)
app.use(express.static(path.join(__dirname, './restaurant_management')));

// Handle SPA - serve index.html for any non-API routes
// This should come AFTER API routes to avoid conflicts
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './restaurant_management/index.html'));
});

// PORT
const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// https://www.youtube.com/watch?v=GK2TiAAxmQ0
// https://www.bezkoder.com/node-js-rest-api-express-mysql/
// https://www.bezkoder.com/serve-vue-app-express/
// https://www.bezkoder.com/deploy-node-js-app-heroku-cleardb-mysql/
// https://www.youtube.com/watch?v=W-b9KGwVECs
// https://stackoverflow.com/questions/43362014/heroku-no-default-language-could-be-detected-for-this-app-error-thrown-for-no
// https://stackoverflow.com/questions/16128395/what is-procfile-and-web-and-worker
// https://www.youtube.com/watch?v=lwOsI8LtVEQ