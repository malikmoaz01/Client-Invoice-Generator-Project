const exportToExcel = () => {
    const formattedEntries = entries.map((entry) => {
      const formattedEntry = {};
      for (const key in entry) {
        formattedEntry[key.toUpperCase()] = String(entry[key]).toUpperCase();
      }
      return formattedEntry;
    });
  
    const headerInfo = [
      ["HAMMAD&HUSSAIN GOODS TRANSPORT COMPANY®"],
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
  