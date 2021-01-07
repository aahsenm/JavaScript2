// your code goes in here
"use strict";

const quotes = [
    {
        quote : "The future belongs to those who believe in the beauty of their dreams.",
        author : "-Eleanor Roosevelt"
    },

    {
        quote: "It is during our darkest moments that we must focus to see the light.",
        author: "-Aristotle"
    },

    {
        quote: "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
        author: "-Eleanor Roosevelt"
    },

    {
        quote: "I have no special talent. I am only passionately curious. ",
        author: "-Albert Einstein"
    },

    {
        quote: "All that we are is the result of what we have thought.",
        author: "-Buddha"
    },

    {
        quote: "The greatest wealth is to live content with little.",
        author: "-Plato"
    }
];

function newQuote(){
    const x = Math.floor(Math.random() * quotes.length);
    document.querySelector(".randomQuote").innerText = quotes[x].quote;
    document.querySelector(".author").innerText = quotes[x].author;
};