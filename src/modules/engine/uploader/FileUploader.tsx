import { useState } from "react";
import Papa from "papaparse"

const CsvUploader = () => {
    const [data, setData] = useState([]);
    const [headers, setHeaders] = useState([]);

    const handleFileUpload = (event: any) => {
        const file = event.target.files[0];

        if (file) {
            Papa.parse(file, {
                header: true,
                dynamicTyping: true,
                complete: (results: any) => {
                    setHeaders(results.meta.fields);
                    setData(results.data);
                },
                error: (error: any) => {
                    console.error("Error al leer el archivo CSV:", error);
                },
            });
        }
    };

    return (
        <div>
            <h1>Cargar archivo CSV</h1>
            <input type="file" accept=".csv" onChange={handleFileUpload} />
            {data.length > 0 && (
                <table border={1} cellPadding="10" cellSpacing="0">
                    <thead>
                        <tr>
                            {headers.map((header, index) => (
                                <th key={index}>{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {headers.map((header, colIndex) => (
                                    <td key={colIndex}>{row[header]}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default CsvUploader;