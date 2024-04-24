import React from "react";
import DataTable from "react-data-table-component";
import { DataRow, columns } from "./TableData";
import { BiFilterAlt, BiSortUp } from "react-icons/bi"; // Import BiFilterAlt

interface Props {
  data: DataRow[];
}

const sortIcon = (
  <div className="text-2xl">
    <BiSortUp />
  </div>
);

const TableComponent: React.FC<Props> = ({ data }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center">
          <button className="text-gray-500 hover:text-[#A80062] cursor-pointer">
            <BiFilterAlt className="text-2xl" />
          </button>
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none ml-2"
          />
        </div>
        <h2 className="text-xl font-bold text-gray-800">Table</h2>
        <button className="bg-[#A80062] hover:bg-[#cf2d8b] text-white px-4 py-2 rounded-md">
          + Add Endpoint
        </button>
      </div>
      <DataTable
        columns={columns}
        data={data}
        pagination
        paginationPerPage={10}
        paginationRowsPerPageOptions={[5, 10, 20, 30]}
        sortIcon={sortIcon}
        customStyles={{
          headRow: {
            style: {
              backgroundColor: "#f8f9fa",
              fontWeight: "bold",
              color: "#333",
            },
          },
          rows: {
            style: {
              borderBottomColor: "#dee2e6",
            },
          },
          pagination: {
            style: {
              color: "#333",
            },
          },
        }}
      />
    </div>
  );
};

export default TableComponent;
