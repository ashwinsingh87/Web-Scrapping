const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595";
const request = require("request");
const cheerio = require("cheerio");
request(url,cb);

//main function.
function cb(err, response, html){
    if(err){
        console.log(err);
    }else{
        extractLink(html);
    }
}

//extract link for all the matches page.
function extractLink(html){
let $ = cheerio.load(html);
let anchorElem = $("a[data-hover='View All Results']");
let link = anchorElem.attr("href");
let fullLink = "https://www.espncricinfo.com" + link;
//console.log(fullLink);
getAllMatchesLink(fullLink);
} 

function getAllMatchesLink(url){
request(url, function(err, response, html){
    if(err){
        console.log(err);
    }else{
        extractAllLink(html);
    }
});
}
function extractAllLink(html){
    let $ = cheerio.load(html);
    let scorecardElems = $("a[data-hover='Scorecard']");
    for(let i = 0; i<scorecardElems.length; i++){
        let Link = $(scorecardElems[i]).attr("href");
        let fullLink = "https://www.espncricinfo.com" + Link;
        console.log(fullLink);
    }
}
