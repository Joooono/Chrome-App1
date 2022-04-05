const quotes = [
    {
        quote: "No pain, No gain.",
        author: "Benjamin Franklin",
    },
    {
        quote: "Don't dream, Be it.",
        author: "Tim Curry",
    },
    {
        quote: "When they go low, we go high.",
        author: "Michelle Obama",
    },
    {
        quote: "I was never less alone than when by myself.",
        author: "Edward Gibbon",
    },
    {
        quote: "The will of man is his happiness.",
        author: "Friedrich von schiller",
    },
    {
        quote: "Only i can change my life, no one can do it for me.",
        author: "Carol Burnett",
    },
    {
        quote: "This too shall pass away.",
        author: "Abraham Lincoln",
    },
    {
        quote: "Where there is a will there is a way.",
        author: "Angela Merkel",
    },
    {
        quote: "It is not length of life, But depth of life.",
        author: "Ralph Waldo Emerson",
    },
    {
        quote: "Life is a journey.",
        author: "Ralph Waldo Emerson",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = (quotes[Math.floor(Math.random() * quotes.length)]);

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;