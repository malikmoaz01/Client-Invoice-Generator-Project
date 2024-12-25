Invoice Generator Application

The Invoice Generator is a React-based application designed to simplify the process of creating, managing, and exporting invoices. This application is particularly tailored for logistics and goods transport businesses, providing essential functionalities to manage invoice data efficiently.
Features

    Dynamic Invoice Creation: Add new invoice entries with fields like date, vehicle, destination, customer code, weight, rate, and more.
    Auto-Calculations: Automatically calculates total amounts, including adjustments for specific destinations (e.g., Lahore with a 15% increase).
    Data Persistence: Utilizes localStorage to save and retrieve entries and invoice information, ensuring data isn't lost on page reloads.
    Excel Export: Export all invoice data to an Excel file, formatted and ready for professional use.
    Responsive Design: User-friendly and optimized for various screen sizes.

Installation

Follow these steps to set up and run the application locally:
Prerequisites

Ensure you have the following installed on your system:

    Node.js (v14 or later)
    npm or yarn

Steps

    Clone the Repository:

git clone https://github.com/your-username/invoice-generator.git
cd invoice-generator

Install Dependencies:

npm install

or

yarn install

Run the Application:

npm start

or

    yarn start

    Access in Browser: Open http://localhost:3000 in your browser.

Usage

    Fill Out Invoice Information:
        Update invoice number and date in the provided fields.
        Add new entries by filling out the required details (e.g., SR, date, vehicle, destination, etc.).
        Click "Add Entry" to include the new entry in the table.

    Review Summary:
        The grand totals for the invoice (amount, expenses, and extra stops) are displayed at the top.

    Export to Excel:
        Click "Export to Excel" to download the data as an Excel file. The file includes invoice header details and all entries.

File Structure

invoice-generator/
├── public/
│   ├── index.html
├── src/
│   ├── components/
│   │   ├── InvoiceGenerator.jsx  // Main application component
│   ├── App.js                    // App entry point
│   ├── index.js                  // React entry point
│   ├── styles.css                // Application styles
├── package.json                  // Project metadata

Dependencies

    React: UI library for building components.
    file-saver: For saving files (Excel export).
    xlsx: For generating Excel files.

Install dependencies using:

npm install react file-saver xlsx

Contributing

    Fork the repository.
    Create a feature branch: git checkout -b feature-name.
    Commit your changes: git commit -m "Add feature description".
    Push to your branch: git push origin feature-name.
    Open a pull request on the original repository.
