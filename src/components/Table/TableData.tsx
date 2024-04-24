import React from "react";
import { TableColumn } from "react-data-table-component";
import {
  FaCheckCircle,
  FaExclamationCircle,
  FaTimesCircle,
  FaWindows,
  FaLinux,
} from "react-icons/fa";
import "@fortawesome/fontawesome-free/css/all.min.css";

export interface DataRow {
  name: string;
  ip: string;
  vulnerable: string;
  os: string | any;
  agent: string;
  status: string;
  lastSeen: string;
}

export const data: DataRow[] = [
  {
    name: "MBP-001",
    ip: "172.16.7.7",
    vulnerable: "Safe",
    os: "Windows 11",
    agent: "v1.1",
    status: "Open",
    lastSeen: "02/12/2023 14:12:01",
  },
  {
    name: "MBP-001",
    ip: "172.16.7.7",
    vulnerable: "Safe",
    os: "Windows 11",
    agent: "v1.1",
    status: "Open",
    lastSeen: "02/12/2023 14:12:01",
  },
  {
    name: "MBP-002",
    ip: "172.16.7.7",
    vulnerable: "Vulnerable",
    os: "Windows 10",
    agent: "v1.1",
    status: "Paid",
    lastSeen: "02/12/2023 14:12:01",
  },
  {
    name: "Zain Calzoni",
    ip: "172.16.7.7",
    vulnerable: "Compromised",
    os: "Windows 11",
    agent: "v1.1",
    status: "Open",
    lastSeen: "02/12/2023 14:12:01",
  },
  {
    name: "Zain Calzoni",
    ip: "172.16.7.7",
    vulnerable: "Compromised",
    os: "Windows 11",
    agent: "v1.1",
    status: "Open",
    lastSeen: "02/12/2023 14:12:01",
  },
  {
    name: "MBP-001",
    ip: "172.16.7.7",
    vulnerable: "Safe",
    os: "Linux 20.04",
    agent: "v1.1",
    status: "Open",
    lastSeen: "02/12/2023 14:12:01",
  },
];

export const columns: TableColumn<DataRow>[] = [
  {
    name: "",
    cell: (row, index) => <input type="checkbox" />,
    width: "50px",
  },
  {
    name: "#",
    cell: (row, index) => <div className="font-bold">{index + 1}</div>,
    width: "50px",
  },
  {
    name: "NAME",
    selector: (row) => `${row.name} \n(${row.ip})`,
    sortable: true,
  },
  {
    name: "VULNERABLE",
    selector: (row) => {
      let icon;
      switch (row.vulnerable) {
        case "Safe":
          icon = <FaCheckCircle color="green" />;
          break;
        case "Vulnerable":
          icon = <FaExclamationCircle color="orange" />;
          break;
        case "Compromised":
          icon = <FaTimesCircle color="red" />;
          break;
        default:
          icon = null;
      }
      return (
        <div className="flex items-center">
          {icon}
          <span className="ml-1">{row.vulnerable}</span>
        </div>
      );
    },
    sortable: true,
  },
  {
    name: "OS",
    selector: (row) => {
      if (row.os.toLowerCase().includes("windows")) {
        return (
          <div className="flex items-center">
            <FaWindows className="mr-1" />
            <span>{row.os.replace("Windows", "").trim()}</span>
          </div>
        );
      } else if (row.os.toLowerCase().includes("linux")) {
        return (
          <div className="flex items-center">
            <FaLinux className="mr-1" />
            <span>{row.os.replace("Linux", "").trim()}</span>
          </div>
        );
      } else {
        return row.os;
      }
    },
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
        when: (row) => row.status === "Open",
        style: {
          color: "purple",
          ":hover": {
            cursor: "pointer",
          },
        },
      },
      {
        when: (row) => row.status === "Paid",
        style: {
          color: "green",
          ":hover": {
            cursor: "pointer",
          },
        },
      },
      {
        when: (row) => row.status === "Inactive",
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
      <div className="flex items-center">
        <i className="fas fa-search text-gray-500 mr-2 hover:text-purple-500 cursor-pointer"></i>
        <i className="fas fa-sync text-gray-500 hover:text-green-500 cursor-pointer"></i>
      </div>
    ),
    allowOverflow: true,
    button: true,
  },
];
