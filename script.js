document.addEventListener('DOMContentLoaded', function () {
    const quoteText = document.getElementById('quote-text');
    const authorElement = document.getElementById('author');
    const newQuoteBtn = document.getElementById('new-quote-btn');

    // Function to fetch a random quote from a specified category
    async function getQuote(category) {
        const apiUrl = `https://api.quotable.io/random?category=${category}`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            return { content: data.content, author: data.author };
        } catch (error) {
            console.error(`Error fetching ${category} quote:`, error);
        }
    }

    // Function to update the quote text and author
    async function updateQuote(category) {
        const { content, author } = await getQuote(category);
        quoteText.textContent = content;
        authorElement.textContent = `- ${author}`;
    }

    // Event listener for the "New Quote" button
    newQuoteBtn.addEventListener('click', function () {
        // Define an array of categories (you can add more if needed)
        const categories = ['generic', 'anime', 'movies']; // Example categories

        // Choose a random category from the array
        const randomCategory = categories[Math.floor(Math.random() * categories.length)];

        // Update the quote using the selected category
        updateQuote(randomCategory);
    });

    // Initial quote when the page loads
    updateQuote('generic'); // You can start with a default category
});
