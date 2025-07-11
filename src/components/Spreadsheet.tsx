import React, { useMemo } from "react";
import { useTable,  } from "react-table";

import type { Column, CellProps } from 'react-table';

import classNames from "classnames";

interface RowData {
  job: string;
  submitted: string;
  status: string;
  submitter: string;
  url: string;
  assigned: string;
  priority: string;
  due: string;
  value: string;
}

const data: RowData[] = [
  {
    job: "Launch social media campaign for product",
    submitted: "02-03-2023",
    status: "In-process",
    submitter: "Aisha Patel",
    url: "www.aishapatel.com",
    assigned: "Sophie Choudhury",
    priority: "Medium",
    due: "20-11-2024",
    value: "₹6,200,000",
  },
  {
    job: "Update press kit for company redesign",
    submitted: "04-02-2022",
    status: "Need to start",
    submitter: "Irfan Khan",
    url: "www.irfankhanproject.com",
    assigned: "Tejas Pandey",
    priority: "High",
    due: "30-10-2024",
    value: "₹3,500,000",
  },
  {
    job: "Finalize user testing feedback for app",
    submitted: "05-12-2024",
    status: "In-process",
    submitter: "Mark Johnson",
    url: "www.markjohnson.io",
    assigned: "Rachel Lee",
    priority: "Medium",
    due: "10-12-2024",
    value: "₹4,750,000",
  },
  {
    job: "Design new features for the website",
    submitted: "10-01-2025",
    status: "Complete",
    submitter: "Emily Green",
    url: "www.emilygreen.me",
    assigned: "Tom Wright",
    priority: "Low",
    due: "15-01-2025",
    value: "₹5,900,000",
  },
  {
    job: "Prepare financial report for Q4",
    submitted: "25-01-2025",
    status: "Blocked",
    submitter: "Jessica Brown",
    url: "www.jessicabrown.org",
    assigned: "Kevin Smith",
    priority: "Low",
    due: "30-01-2025",
    value: "₹2,800,000",
  },
];

const statusColors: Record<string, string> = {
  "In-process": "bg-yellow-200 text-yellow-800",
  "Need to start": "bg-orange-200 text-orange-800",
  Complete: "bg-green-200 text-green-800",
  Blocked: "bg-red-200 text-red-800",
};

const priorityColors: Record<string, string> = {
  High: "text-red-600",
  Medium: "text-yellow-600",
  Low: "text-blue-600",
};

interface SpreadsheetProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const Spreadsheet: React.FC<SpreadsheetProps> = ({ searchQuery, setSearchQuery }) => {
  const generateEmptyRows = (count: number): RowData[] =>
    Array.from({ length: count }, () => ({
      job: "",
      submitted: "",
      status: "",
      submitter: "",
      url: "",
      assigned: "",
      priority: "",
      due: "",
      value: "",
    }));

const columns = useMemo<Column<RowData>[]>(
  () => [
    {
      Header: "#",
      id: "rowNumber",
      Cell: ({ row }: CellProps<RowData>) => row.index + 1,
    },
    {
      Header: "Job Request",
      accessor: "job",
    },
    {
      Header: "Submitted",
      accessor: "submitted",
    },
    {
      Header: "Status",
      accessor: "status",
      Cell: ({ value }: CellProps<RowData, string>) => (
        <span
          className={classNames(
            "px-2 py-1 rounded text-xs font-medium",
            statusColors[value] || "bg-gray-100 text-gray-800"
          )}
        >
          {value}
        </span>
      ),
    },
    {
      Header: "Submitter",
      accessor: "submitter",
    },
    {
      Header: "URL",
      accessor: "url",
      Cell: ({ value }: CellProps<RowData, string>) => (
        <a
          href={`https://${value}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          {value}
        </a>
      ),
    },
    {
      Header: "Assigned",
      accessor: "assigned",
    },
    {
      Header: "Priority",
      accessor: "priority",
      Cell: ({ value }: CellProps<RowData, string>) => (
        <span className={classNames("font-medium", priorityColors[value])}>
          {value}
        </span>
      ),
    },
    {
      Header: "Due Date",
      accessor: "due",
    },
    {
      Header: "Est. Value",
      accessor: "value",
    },
  ],
  []
);


  const filteredData = useMemo(() => {
    return [...data, ...generateEmptyRows(25)].filter((row) => {
      const values = Object.values(row)
        .map((v) => (v ?? "").toString().toLowerCase())
        .join(" ");
      return values.includes(searchQuery.toLowerCase());
    });
  }, [searchQuery]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<RowData>({ columns, data: filteredData });

  return (
    <div className="w-screen h-screen overflow-auto font-[Segoe UI] p-4">
      {/* Optional: Search input */}
      <div className="mb-3">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search..."
          className="border border-gray-300 rounded px-3 py-1 w-64"
        />
      </div>

      <table
        {...getTableProps()}
        className="table-fixed border-collapse min-w-full text-[13px]"
      >
        <thead className="bg-gray-100 sticky top-0 z-10">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} className="text-left">
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className="border border-gray-300 px-3 py-2 font-semibold text-sm whitespace-nowrap"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {rows.map((row, rowIndex) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    className="border border-gray-300 px-3 py-2 align-top whitespace-nowrap"
                    contentEditable={cell.column.id !== "url"} // URL column not editable
                    suppressContentEditableWarning={true}
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Spreadsheet;
