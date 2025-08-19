// ExcelBox.tsx
import React from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import Data from "../../data/dashboard.json"

interface ExcelBoxProps {
    onClose: () => void;
}

const ExcelBox: React.FC<ExcelBoxProps> = ({ onClose }) => {
    // 📤 Export Excel
    const handleExport = () => {
        const workbook = XLSX.utils.book_new();

        const wsSummary = XLSX.utils.json_to_sheet([Data.summary]);
        XLSX.utils.book_append_sheet(workbook, wsSummary, "Summary");

        const wsSoVuTheoThang = XLSX.utils.json_to_sheet(Data.soVuTheoThang);
        XLSX.utils.book_append_sheet(workbook, wsSoVuTheoThang, "Số vụ theo tháng");

        const wsnguyenNhan = XLSX.utils.json_to_sheet(Data.nguyenNhan);
        XLSX.utils.book_append_sheet(workbook, wsnguyenNhan, "Nguyên nhân");

        const wsPhanLoaiCoso = XLSX.utils.json_to_sheet(Data.phanLoaiCoSo);
        XLSX.utils.book_append_sheet(workbook, wsPhanLoaiCoso, "Phân loại cơ sở");

        const wsPhanLoaiTheophuong = XLSX.utils.json_to_sheet(Data.phuong);
        XLSX.utils.book_append_sheet(workbook, wsPhanLoaiTheophuong, "Phân loại theo phường");

        const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
        const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
        saveAs(blob, "data.xlsx");
    };

    // 📥 Import Excel
    const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (evt) => {
            const bstr = evt.target?.result;
            const workbook = XLSX.read(bstr, { type: "binary" });
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const data = XLSX.utils.sheet_to_json(sheet);
            console.log("📥 Data import:", data);
        };
        reader.readAsBinaryString(file);
    };

    return (
        <div className="p-4 border rounded bg-light">
            <h5>Import / Export Excel</h5>
            <div className="d-flex gap-3 mt-3">
                <button className="btn btn-success" onClick={handleExport}>
                    Export Excel
                </button>
                <label className="btn btn-primary mb-0">
                    Import Excel
                    <input type="file" accept=".xlsx, .xls" hidden onChange={handleImport} />
                </label>
                <button className="btn btn-secondary" onClick={onClose}>
                    Đóng
                </button>
            </div>
        </div>
    );
};

export default ExcelBox;
