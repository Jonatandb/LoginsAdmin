import exportFromJSON from 'export-from-json';
// import XLSX from 'xlsx';

export default function exportToXLS(dataToExport) {
    //https://www.npmjs.com/package/export-from-json
    const fileName = 'LoginsAdmin_Backup_' + new Date().toLocaleDateString('es-AR');
    const exportType = 'txt';
    const data = JSON.stringify(dataToExport);
    exportFromJSON({ data, fileName, exportType });
}

// export function exportToXLSX(){
//   //https://github.com/SheetJS/js-xlsx/tree/1eb1ec985a640b71c5b5bbe006e240f45cf239ab/demos/react
//   const model = {
//   cols: [{ name: "A", key: 0 }, { name: "B", key: 1 }, { name: "C", key: 2 }],
//   data: [
//     [ "id",    "name", "value" ],
//     [    1, "sheetjs",    7262 ],
//     [    2, "js-xlsx",    6969 ]
//   ]
// }
//   /* convert from array of arrays to workbook */
//   var worksheet = XLSX.utils.aoa_to_sheet(model);
//   var new_workbook = XLSX.utils.book_new();
//   XLSX.utils.book_append_sheet(new_workbook, worksheet, "SheetJS");

//   /* write a workbook */
//   const wbout = XLSX.write(new_workbook, { type: 'binary', bookType: "xlsx" });
//   // writeFile(file, wbout, 'ascii').then((r) => {/* :) */ }).catch((e) => {/* :( */ });
// }
