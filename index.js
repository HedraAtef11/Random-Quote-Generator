var quotes = [
    `“Be yourself; everyone else is already taken.”― Oscar Wilde`,
    `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”― Marilyn Monroe`,
    `“So many books, so little time.”― Frank Zappa`,
    `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”― Albert Einstein`,
    `“A room without books is like a body without a soul.”― Marcus Tullius Cicero`,
    `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”― Bernard M. Baruch`,
    `“You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.”― William W. Purkey`,
    `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”― Dr. Seuss`,
    `“You only live once, but if you do it right, once is enough.”― Mae West`,
    `“Be the change that you wish to see in the world.”― Mahatma Gandhi`,
];


// Function to shuffle an array (Fisher-Yates algorithm)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Shuffle quotes once initially
shuffle(quotes);

// Counter to track current quote index
let currentIndex = 0;

// Function to get the next quote
function getNextQuote() {
    if (currentIndex >= quotes.length) {
        // Reshuffle and reset index if we've shown all quotes
        shuffle(quotes);
        currentIndex = 0;
    }
    // Get the current quote and increment the index
    const quote = quotes[currentIndex];
    currentIndex++;
    return quote;
}

// Function to display the quote on the page
function displayQuote() {
    const quoteElement = document.getElementById('quote');
    quoteElement.innerText = getNextQuote();
}

// Example: Add an event listener to a button to display a new quote on click
document.getElementById('new-quote-button').addEventListener('click', displayQuote);
