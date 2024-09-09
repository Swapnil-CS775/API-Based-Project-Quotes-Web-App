const api = "https://type.fit/api/quotes";
let realData = [];
let randomQuote ="";
let authorName="";
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const new_quotes_btn = document.querySelector(".new-quotes-btn");
const xShare=document.querySelector(".xShare");
const wpShare=document.querySelector(".wpShare");

const defaultQuote = {
    text: "Self-confidence provides strength and power imparts knowledge. Knowledge provides stability and stability leads to victory...",
    author: "Chhatrapati Shivaji Maharaj"
};

const getNewQuotes = () => {
    if (realData.length > 0) {
        let rNum = Math.floor(Math.random() * realData.length);
        console.log(`Random index: ${rNum}`);
        console.log(`Total quotes available: ${realData.length}`);
        
        randomQuote = realData[rNum];
        
        if (randomQuote && randomQuote.text) {
            quote.innerHTML = randomQuote.text;
            authorName = randomQuote.author;
            author.innerHTML = authorName ? `- ${authorName.split(",")[0].trim()}` : "- Unknown";
        } else {
            quote.innerHTML = defaultQuote.text;
            author.innerHTML = defaultQuote.author;
        }
    } else {
        quote.innerHTML = defaultQuote.text;
        author.innerHTML = defaultQuote.author;
        console.error("No quotes available.");
    }
}

const getQuotes = async () => {
    try {
        let data = await fetch(api);
        realData = await data.json();
        if (realData.length > 0) {
            getNewQuotes(); // Display a new quote
        } else {
            throw new Error("No quotes fetched from the API.");
        }
    } catch (error) {
        quote.innerHTML = defaultQuote.text;
        author.innerHTML = defaultQuote.author;
        console.error("Error fetching quotes:", error);
    }
};

window.onload = () => {
    getQuotes();
}

new_quotes_btn.addEventListener("click", getNewQuotes);

xShare.addEventListener("click",()=>{
    let tweet=`http://twitter.com/intent/tweet?text=${randomQuote.text} -${authorName.split(",")[0].trim()}`;
    window.open(tweet);
})

wpShare.addEventListener("click",()=>{
    const text = "This is my text to send.";
const url = `https://api.whatsapp.com/send?text=${randomQuote.text} -${authorName.split(",")[0].trim()}`;
window.open(url, '_blank');

})