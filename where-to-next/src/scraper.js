import axios from 'axios';
import cheerio from 'cheerio';

export default function scrapeWebsite(url) {
  return axios.get(url)
    .then((response) => {
      if (response.status === 200) {
        const $ = cheerio.load(response.data);
        const pageTitle = $('title').text();
        const headingText = $('h1').text();
        console.log("check");
        return { pageTitle, headingText };
      } else {
        console.error("Failed to retrieve the webpage");
        throw new Error("Failed to retrieve the webpage");
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      throw error;
    });
}

