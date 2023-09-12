import React from "react";
import ReactExcelRenderer from "react-excel-renderer";

const ExcelViewer = ({ url }) => {
  const renderExcel = (rows, columns) => {
    // You can customize the rendering of Excel data here.
    return (
      <table className="table table-bordered">
        <thead>
          <tr>
            {columns.map((column, columnIndex) => (
              <th key={columnIndex}>{column.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="excel-viewer">
      <ReactExcelRenderer
        fileUrl={url}
        initialHeaders={null}
        initialData={null}
        isStickyTableHead={true}
        onDataChange={renderExcel}
      />
    </div>
  );
};

export default ExcelViewer;
