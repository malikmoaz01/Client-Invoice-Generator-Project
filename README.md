# **Invoice Generator Application**

The **Invoice Generator** is a React-based application designed to streamline the process of creating, managing, and exporting invoices. Ideal for logistics and goods transport businesses, it offers a user-friendly interface with robust functionality for managing invoice data.

---

## **Features**

- **Dynamic Invoice Creation**: Add new invoice entries with fields like date, vehicle, destination, customer code, weight, rate, and more.
- **Automatic Calculations**: Automatically computes total amounts with adjustments for specific destinations (e.g., Lahore includes a 15% increase).
- **Data Persistence**: Uses `localStorage` to save and retrieve entries and invoice data, ensuring your data remains intact even after refreshing the page.
- **Excel Export**: Export all invoice data to a professionally formatted Excel file.
- **Responsive Design**: Optimized for various screen sizes, ensuring accessibility across devices.

---

## **Installation**

### **Prerequisites**
Make sure the following tools are installed on your system:
- **[Node.js](https://nodejs.org/):** v14 or later
- **[npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/):** Package manager

### **Steps to Install**

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/invoice-generator.git
   cd invoice-generator
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Run the Application**:
   ```bash
   npm start
   ```
   or
   ```bash
   yarn start
   ```

4. **Open in Browser**:
   Navigate to **[http://localhost:3000](http://localhost:5173)** to use the application.

---

## **Usage**

1. **Update Invoice Information**:
   - Fill in the invoice number and date in the fields provided.
   - Add new entries with details like SR, date, vehicle, destination, etc.

2. **Review Totals**:
   - Grand totals (amount, expenses, and extra stops) are displayed in the summary section.

3. **Export Invoice**:
   - Click the **"Export to Excel"** button to download the data in an Excel file format, complete with header details and all entries.

---

## **Built With**

- **React**: Frontend framework for building user interfaces.
- **file-saver**: Library for saving files (Excel export).
- **xlsx**: Library for generating Excel files.

---

## **Contributing**

Contributions are welcome! Follow these steps to contribute:

1. **Fork the Repository**.
2. **Create a New Branch**:
   ```bash
   git checkout -b feature-name
   ```
3. **Make Changes and Commit**:
   ```bash
   git commit -m "Add your message here"
   ```
4. **Push Changes to Your Branch**:
   ```bash
   git push origin feature-name
   ```
5. **Submit a Pull Request** to the original repository.

---

## **Acknowledgments**

- Built with 💙 by **Malik Moaz(https://github.com/malikmoaz01)**.
- Inspired by real-world challenges in invoice management for the logistics industry.
