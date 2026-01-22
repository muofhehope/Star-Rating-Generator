# Star-Rating-Generator
⭐ Star Rating Generator

A simple React application that generates a visual star rating based on user input. Enter a number between 1 and 10, and see it displayed as stars.

Features

Input validation for empty, non-numeric, and out-of-range values (1–10).

Dynamic star generation using * characters.

Error messages displayed in red for invalid input.

Successful star output displayed in green.

Simple and responsive inline styling with flexbox.

How It Works

User enters a number (1–10) in the input field.

On form submission, the app validates the input.

If valid, it generates a string of stars corresponding to the number using the starGenerator function.

If invalid, an error message is displayed.

Usage

Clone the repository:

git clone <repository-url>


Install dependencies:

npm install


Start the development server:

npm start


Open http://localhost:3000
 in your browser.

Example
Input	Output
5	⭐⭐⭐⭐⭐
Technologies

React

JavaScript (ES6+)
