// Package import
import express from "express";
import { displayCityHour } from "./my_modules/hourOfCities";

// Define constant for our server
const app = express();
const port = 3000;



// Default route declaration
app.get("/", (_req, res) => {
    res.sendFile(`${__dirname}/views/index.html`);
});

app.get("/city/:city", (req, res) => {
    const cityName = req.params.city;
    const resContent = displayCityHour(cityName);
    
    res.send(resContent[0]).status(parseInt(resContent[1]));
    
});

app.listen(port, () => {
    console.log(`App listening to port ${port}`);
});
