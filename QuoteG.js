const quoteText = document.querySelector(".quote"),
authorName3 = document.querySelector(".author .name"),
soundBtn = document.querySelector(".sound"),
copyBtn = document.querySelector(".copy"),
twitterBtn = document.querySelector(".twitter"),
instaBtn = document.querySelector(".insta"),
quoteBtn = document.querySelector("button");


//random quote function
function randomQuote(){
    
     quoteBtn.classList.add("loading");
     quoteBtn.innerText ="Loading Quote...";
     //fetching random quotes /data from the api and parsing it into Js object notation.. 
     fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
            quoteText.innerText = result.content;
            authorName3.innerText = result.author;
            quoteBtn.innerText ="New Quote";
            quoteBtn.classList.remove("loading");
     });
}

soundBtn.addEventListener("click",()=>{
     //SpeechSynthesisUtterance is a web speech api that represennts a speech reqest:-
     let Utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName3.innerText}`);
     SpeechSynthesis.speak(Utterance);//speak method of SpeechSynthesis speaks the utternance
});

copyBtn.addEventListener("click",()=>{
     //cpoying the quote text on copyBtn click
     //writeText()property writes the specifed text string to the system clipboard.
     navigator.clipboard.writeText(quoteText.innerText);

});

twitterBtn.addEventListener("click",()=>{
    let twitUrl = `https://twitter.com/internet/tweet?url=${quoteText.innerText}`;
    window.open(twitUrl, "_blank");//oping a new twitter tab with passing quate in th url 
});
quoteBtn.addEventListener("click",randomQuote);
