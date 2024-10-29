Air Resell
Air Resell is a simple web-based application designed to showcase resellable products with an easy-to-navigate interface and product detail pages. This project is built using HTML, CSS, and JavaScript, and is compatible with GitHub Pages for hosting.

Table of Contents
Project Overview
Features
File Structure
Setup
Usage
Contributing
License
Project Overview
Air Resell provides a landing page where users can browse a list of products, view detailed information about each product, and contact the seller through a form. This is ideal for reselling products with clear information, contact options, and links to a secure marketplace.

Features
Product Listing: Displays all available products.
Product Details: Shows specific information, including images, descriptions, and prices for each product.
Contact Form: Allows users to send messages to request restocks or more information.
Vinted Integration: Links to Vinted for secure purchasing options.
File Structure
Here’s an overview of the files and folders in this project:

graphql
Copia codice
air-resell/
├── index.html              # Main landing page
├── details.html            # Product details page
├── style.css               # Main stylesheet for styling all pages
├── index.js                # JavaScript for handling product data on the main page
├── details_index.js        # JavaScript for handling details on the product page
├── data.json               # JSON file containing product data
└── images/
    └── resell-logo.png     # Favicon and images for the site
Setup
To run this project locally:

Clone the repository:
bash
Copia codice
git clone https://github.com/your-username/air-resell.git
Open the project folder:
bash
Copia codice
cd air-resell
You can open index.html directly in your browser, or for a better experience, use a simple local server:
bash
Copia codice
python3 -m http.server
Visit http://localhost:8000 in your browser to see the website.
Usage
Once the site is running:

Visit the homepage (index.html) to view the list of products.
Click on any product to be redirected to details.html for detailed information.
Use the contact form at the bottom of the homepage to send messages or request restocks.
Contributing
