const PORT = 8000;

const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

const app = express();

// O-EAST 7月

const URL = "https://shibuya-o.com/crest/schedule/?y=2022&m=8";
const data = [];

axios(URL).then((response) => {
  const htmlParser = response.data;

  const $ =cheerio.load(htmlParser);

  $(".p-scheduled-card", htmlParser).each(function() {
    const title = $(this).find(".p-scheduled-card__title-main").text();
    const date = $(this).find(".p-scheduled-card__date-item").text();
    const week = $(this).find(".p-scheduled-card__date-week").text();
    const time = $(this).find(".p-scheduled-card__date-open").text();
    const artist = $(this).find(".p-scheduled-card__artist-item").text();
    data.push({title, date, week, time, artist});
    console.log(data);
  });
})
.catch((error) => console.log(error));
    
app.listen(PORT, console.log("surver running!"));
