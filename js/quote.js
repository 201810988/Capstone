const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

function printQuote() {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            quote.innerText = data.content;
            author.innerText = data.author;
            quote.classList.add("active");
            author.classList.add("active");
        })
}

printQuote();