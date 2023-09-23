import axios from 'axios';

//const axios = require('axios');
const cheerio = require('cheerio');

//const url = "https://en.wikipedia.org/wiki/United_States";

export function scrapeWebsite(url) {    
    const response =  axios.get(url)
    .then((response) =>
        {
        if (response.status === 200) {
            const $ = cheerio.load(response.data)

            const pageTitle = $('title').text();
            const headingText = $('h1').text();

            console.log('Page Title:', pageTitle);
            console.log('Heading Text:', headingText);
        }
        else {
            console.error("failed to retrive the webpage");
        }
        })
        .catch((error) => { 
            console.error('Error:',error);
        })
    return response
 }


