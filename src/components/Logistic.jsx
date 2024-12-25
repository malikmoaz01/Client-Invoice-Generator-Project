import React, { useState, useEffect } from "react";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";

const InvoiceGenerator = () => {
    const [entries, setEntries] = useState([]);
    const [newEntry, setNewEntry] = useState({
        sr: "",
        date: "",
        vehicle: "",
        destination: "",
        customerCode: "",
        boxes: "",
        weight: "",
        rate: "",
        extraStop: "",
    });
    const [invoiceInfo, setInvoiceInfo] = useState({
        invoiceNumber: "483",
        date: "December 20, 2024",
    });

    useEffect(() => {
        const savedEntries = localStorage.getItem("entries");
        const savedInvoiceInfo = localStorage.getItem("invoiceInfo");

        if (savedEntries) {
            setEntries(JSON.parse(savedEntries));
        }
        if (savedInvoiceInfo) {
            setInvoiceInfo(JSON.parse(savedInvoiceInfo));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("entries", JSON.stringify(entries));
    }, [entries]);

    useEffect(() => {
        localStorage.setItem("invoiceInfo", JSON.stringify(invoiceInfo));
    }, [invoiceInfo]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewEntry({ ...newEntry, [name]: value });
    };

    const handleInvoiceChange = (e) => {
        const { name, value } = e.target;
        setInvoiceInfo({ ...invoiceInfo, [name]: value });
    };

    const addEntry = () => {
        const hasEmptyField = Object.values(newEntry).some((value) => value.trim() === "");
        if (hasEmptyField) {
            alert("All fields are required. Please fill out every field before adding an entry.");
            return;
        }

        const weight = parseFloat(newEntry.weight || 0);
        const rate = parseFloat(newEntry.rate || 0);
        const extraStop = parseFloat(newEntry.extraStop || 0);

        let totalAmount = weight * rate;

        const isLahore = /^(lhr|lahore)$/i.test(newEntry.destination);
        if (isLahore) {
            totalAmount += (totalAmount * 15) / 100;
        }

        const expenseAmount = Math.max(totalAmount - extraStop, 0);

        setEntries([
            ...entries,
            {
                ...newEntry,
                totalAmount: totalAmount.toFixed(2),
                expenseAmount: expenseAmount.toFixed(2),
            },
        ]);

        setNewEntry({
            sr: "",
            date: "",
            vehicle: "",
            destination: "",
            customerCode: "",
            boxes: "",
            weight: "",
            rate: "",
            extraStop: "",
        });
    };

    const calculateGrandTotals = () => {
        let totalAmount = 0;
        let expenseAmount = 0;
        let extraStop = 0;

        entries.forEach((entry) => {
            totalAmount += parseFloat(entry.totalAmount || 0);
            expenseAmount += parseFloat(entry.expenseAmount || 0);
            extraStop += parseFloat(entry.extraStop || 0);
        });

        return {
            totalAmount: totalAmount.toFixed(2),
            expenseAmount: expenseAmount.toFixed(2),
            extraStop: extraStop.toFixed(2),
        };
    };

    const { totalAmount, expenseAmount, extraStop } = calculateGrandTotals();

    const exportToExcel = () => {
        const formattedEntries = entries.map((entry) => {
            const formattedEntry = {};
            for (const key in entry) {
                formattedEntry[key.toUpperCase()] = String(entry[key]).toUpperCase();
            }
            return formattedEntry;
        });

        const headerInfo = [
            ["HAMMAD & HUSSAIN GOODS TRANSPORT COMPANY®"],
            [" "]
            ["Proprietor:", "NAVEED BUTT & AZHAR MALIK"],
            ["Address:", "OFFICE # 124 LASANI PLAZA NEW FRUIT MANDI LAHORE"],
            ["Account Title:", "HAMMAD&HUSSAIN GOODS TRANSPORT COMPANY"],
            ["Bank:", "HABIB METROPOLITAN BANK LTD."],
            ["Branch Code:", "1211"],
            ["Account Number:", "1211-0271-4010-4517"],
            ["CNIC#:", "35202-7238821-1 | 35202-5597625-3"],
            ["NTN#:", "A304834-4"],
            ["Invoice#:", invoiceInfo.invoiceNumber],
            ["Date:", invoiceInfo.date],
        ];

        const worksheet = XLSX.utils.aoa_to_sheet(headerInfo);

        const dataStartRow = headerInfo.length + 2;
        XLSX.utils.sheet_add_json(worksheet, formattedEntries, {
            origin: `A${dataStartRow}`,
            skipHeader: false,
        });

        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Invoice Data");
        const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
        const data = new Blob([excelBuffer], { type: "application/octet-stream" });
        saveAs(data, "invoice_data.xlsx");
    };

    return (
        <div className="invoice-container p-8 bg-gray-100">
            <div className="header bg-blue-50 border border-gray-300 p-6 rounded-md">
                <h2 className="text-2xl font-bold text-center mb-6">
                    HAMMAD & HUSSAIN GOODS TRANSPORT COMPANY®
                </h2>
                <div className="grid grid-cols-2 gap-6">
                    <div className="company-info space-y-2">
                        <p><strong>Proprietor:</strong> NAVEED BUTT & AZHAR MALIK</p>
                        <p><strong>Address:</strong> OFFICE # 124 LASANI PLAZA NEW FRUIT MANDI LAHORE</p>
                        <p><strong>Account Title:</strong> HAMMAD&HUSSAIN GOODS TRANSPORT COMPANY</p>
                        <p><strong>Bank:</strong> HABIB METROPOLITAN BANK LTD.</p>
                        <p><strong>Branch Code:</strong> 1211</p>
                        <p><strong>Account Number:</strong> 1211-0271-4010-4517</p>
                        <p><strong>CNIC#:</strong> 35202-7238821-1 | 35202-5597625-3</p>
                        <p><strong>NTN#:</strong> A304834-4</p>
                    </div>
                    <div className="invoice-info space-y-2">
                        <label className="block">
                            <span className="text-gray-700 font-bold">Date:</span>
                            <input
                                className="border border-gray-300 p-2 w-full rounded"
                                type="text"
                                name="date"
                                value={invoiceInfo.date}
                                onChange={handleInvoiceChange}
                            />
                        </label>
                        <label className="block">
                            <span className="text-gray-700 font-bold">Invoice#:</span>
                            <input
                                className="border border-gray-300 p-2 w-full rounded"
                                type="text"
                                name="invoiceNumber"
                                value={invoiceInfo.invoiceNumber}
                                onChange={handleInvoiceChange}
                            />
                        </label>
                        <p><strong>Bill To:</strong> Time Ceramics (Pvt) Limited</p>
                        <p><strong>Address:</strong> Plot no.275, phase 2, M-3 industrial state, Faisalabad Punjab-38000, Pakistan</p>
                        <p><strong>NTN#:</strong> 7901917-7</p>
                    </div>
                </div>
            </div>
            <div className="summary-box bg-white border border-gray-300 p-6 rounded-md mt-6 flex justify-between">
                <p><strong>Grand Total Amount:</strong> {totalAmount}</p>
                <p><strong>Grand Expense Amount:</strong> {expenseAmount}</p>
                <p><strong>Grand Extra Stop:</strong> {extraStop}</p>
            </div>

            <table className="mt-6 bg-white border border-gray-300 w-full">
                <thead>
                    <tr className="bg-gray-200">
                        {[
                            "SR",
                            "Date",
                            "Vehicle",
                            "Destination",
                            "Customer Code",
                            "Boxes",
                            "Weight",
                            "Rate",
                            "Total Amount",
                            "Extra Stop",
                            "Expense Amount",
                        ].map((header, index) => (
                            <th key={index} className="border p-2">
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {entries.map((entry, index) => (
                        <tr key={index} className="hover:bg-gray-100">
                            <td className="border p-2 text-center">{entry.sr}</td>
                            <td className="border p-2 text-center">{entry.date}</td>
                            <td className="border p-2 text-center">{entry.vehicle}</td>
                            <td className="border p-2 text-center">{entry.destination}</td>
                            <td className="border p-2 text-center">{entry.customerCode}</td>
                            <td className="border p-2 text-center">{entry.boxes}</td>
                            <td className="border p-2 text-center">{entry.weight}</td>
                            <td className="border p-2 text-center">{entry.rate}</td>
                            <td className="border p-2 text-center">{entry.totalAmount}</td>
                            <td className="border p-2 text-center">{entry.extraStop}</td>
                            <td className="border p-2 text-center">{entry.expenseAmount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="add-entry mt-8">
                <h3 className="text-lg font-semibold mb-4">Add New Entry</h3>
                <div className="grid grid-cols-2 gap-4">
                    {[
                        "sr",
                        "date",
                        "vehicle",
                        "destination",
                        "customerCode",
                        "boxes",
                        "weight",
                        "rate",
                        "extraStop",
                    ].map((field, idx) => (
                        <input
                            key={idx}
                            className="border p-2 rounded"
                            type={field === "boxes" || field === "weight" || field === "rate" || field === "extraStop" ? "number" : "text"}
                            name={field}
                            placeholder={field.toUpperCase()}
                            value={newEntry[field]}
                            onChange={handleInputChange}
                        />
                    ))}
                </div>
            </div>
            <div className="button-container flex justify-center gap-4 mt-8">
                <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700" onClick={addEntry}>
                    Add Entry
                </button>
                <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700" onClick={exportToExcel}>
                    Export to Excel
                </button>
            </div>
        </div>
    );
};

export default InvoiceGenerator;
