import React from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BiSortUp } from 'react-icons/bi';

interface DataRow {
  name: string;
  ip: string;
  vulnerable: string;
  os: string;
  agent: string;
  status: string;
  lastSeen: string;
}

const sortIcon = (
  <div style={{ fontSize: '1.5rem' }}>
    <BiSortUp />
  </div>
);


const data: DataRow[] = [
  {
    name: "MBP-001",
    ip: "172.16.7.7",
    vulnerable: "Safe",
    os: "Windows 11",
    agent: "v1.1",
    status: "OFFLINE",
    lastSeen: "02/12/2023 14:12:01",
  },
  {
    name: "MBP-002",
    ip: "172.16.7.7",
    vulnerable: "Vulnerable",
    os: "Windows 10",
    agent: "v1.1",
    status: "ONLINE",
    lastSeen: "02/12/2023 14:12:01",
  },
  {
    name: "Zain Calzoni",
    ip: "172.16.7.7",
    vulnerable: "Compromised",
    os: "Windows 11",
    agent: "v1.1",
    status: "ONLINE",
    lastSeen: "02/12/2023 14:12:01",
  },
];

const columns: TableColumn<DataRow>[] = [
  {
    name: "#",
    cell: (row, index) => <div>{index + 1}</div>,
    width: "50px",
    sortable: true,
  },
  {
    name: "NAME",
    selector: (row) => `${row.name} \n(${row.ip})`,
    sortable: true,
  },
  {
    name: "VULNERABLE",
    selector: (row) => row.vulnerable,
    sortable: true,
    conditionalCellStyles: [
      {
        when: (row) => row.vulnerable === "Safe",
        style: {
          color: "green",
          ":hover": {
            cursor: "pointer",
          },
        },
      },
      {
        when: (row) => row.vulnerable === "Vulnerable",
        style: {
          color: "orange",
          ":hover": {
            cursor: "pointer",
          },
        },
      },
      {
        when: (row) => row.vulnerable === "Compromised",
        style: {
          color: "red",
          ":hover": {
            cursor: "pointer",
          },
        },
      },
    ],
  },
  {
    name: "OS",
    selector: (row) => row.os,
    sortable: true,
  },
  {
    name: "AGENT",
    selector: (row) => row.agent,
    sortable: true,
  },
  {
    name: "STATUS",
    selector: (row) => row.status,
    sortable: true,
    conditionalCellStyles: [
      {
        when: (row) => row.status === "ONLINE",
        style: {
          color: "green",
          ":hover": {
            cursor: "pointer",
          },
        },
      },
      {
        when: (row) => row.status === "OFFLINE",
        style: {
          color: "red",
          ":hover": {
            cursor: "pointer",
          },
        },
      },
    ],
  },
  {
    name: "LAST SEEN",
    selector: (row) => row.lastSeen,
    sortable: true,
  },
  {
    name: "ACTIONS",
    cell: () => (
      <div>
        <i className="fa fa-search" style={{ marginRight: "10px" }}></i>
        <i className="fa fa-trash"></i>
      </div>
    ),
    allowOverflow: true,
    button: true,
  },
];

const Table: React.FC = () => {
  return (
    <DataTable
      columns={columns}
      data={data}
      pagination
      paginationPerPage={10}
      paginationRowsPerPageOptions={[10, 20, 30]}
      sortIcon={sortIcon}
    />
  );
};

export default Table;
