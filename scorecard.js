const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/mumbai-indians-vs-chennai-super-kings-1st-match-1216492/full-scorecard";
const request = require("request");
const cheerio = require("cheerio");
request(url,cb);

//main function.
function cb(err, response, html){
    if(err){
        console.log(err);
    }else{ 
        extractMatchDetails(html);
    }
}
function extractMatchDetails(html){
    let $ = cheerio.load(html);
    let descElem = $(".header-info .description");
    let result = $(".event .status-text");
    let split = descElem.text().split(",");
    let venue = split[1].trim();
    let date = split[2].trim();
   result = result.text().trim();
    let innings = $(".card.content-block.match-scorecard-table>.Collapsible");
    //innings = innings.split("")
    console.log(innings.html());
}