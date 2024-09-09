# API-Based-Project-Quotes-Web-App
This is a Quotes Web App built using HTML, CSS, and JavaScript, with quotes fetched from an external API. Users can view a random quote and author, and generate new quotes by clicking a button. Additionally, users can share the quotes directly on social media platforms like Twitter and WhatsApp.

# Quotes Web App

## Description

This project is a **Quotes Web App** that fetches quotes from an API and displays them dynamically. Users can refresh the quotes by clicking the "New Quotes" button or share the displayed quotes on **Twitter** or **WhatsApp**. If the API fails to load, a default quote is shown.

> _Note: If the API does not work, it might be due to limited free service availability. You can run the app by replacing the API with another free quotes API._

## Features

- **Random Quote Generator**: Fetches random quotes from the API (`https://type.fit/api/quotes`) and displays them along with the author's name.
- **Default Quote**: If the API fails, a default quote from **Chhatrapati Shivaji Maharaj** is displayed.
- **Social Media Sharing**: Share quotes on **Twitter** and **WhatsApp** with pre-filled text.
- **Responsive Design**: Adapts to different screen sizes, ensuring the app looks great on mobile, tablet, and desktop.
- **Error Handling**: Graceful fallback in case of API issues or errors.

## Project Structure

- `index.html`: Main structure of the web app with a quote container and social sharing icons.
- `style.css`: CSS for styling the app layout and making it responsive.
- `script.js`: JavaScript for fetching quotes, handling events, and social media sharing.

## What I Learned

Through this project, I learned:
1. How to use **APIs** to fetch data dynamically using JavaScript's `fetch()` function.
2. **Asynchronous Programming**: Working with async/await to handle API responses and errors.
3. How to dynamically update the **DOM** based on data fetched from an external source.
4. Implementing **social media sharing** features using URL schemes for **Twitter** and **WhatsApp**.
5. How to make a **responsive web app** that adapts to various screen sizes using CSS and media queries.

## How to Run the Project

1. Clone or download the repository.
2. Open `index.html` in any modern web browser to start using the app.

## Future Improvements

- Add more social sharing platforms such as Facebook.
- Implement a copy-to-clipboard button for easy sharing.
- Add animations for the transition between quotes.
- Save and display previously viewed quotes.

---

**Enjoy your daily dose of inspiration!**
