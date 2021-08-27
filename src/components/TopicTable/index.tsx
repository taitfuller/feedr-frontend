import React from "react";
import { Column, useTable, useSortBy } from "react-table";

export type Topic = {
  topic: string;
  counts: { new: number; increase: number };
  type: "bugReport" | "featureRequest";
  summary: string;
};

const TopicTable: React.FC = () => {
  const data = React.useMemo<Topic[]>(
    () => [
      {
        topic: "Battery life",
        counts: {
          new: 69,
          increase: 22,
        },
        type: "bugReport",
        summary: "After installing this app my battery became negative",
      },
      {
        topic: "Dark mode",
        counts: {
          new: 420,
          increase: 109,
        },
        type: "featureRequest",
        summary:
          "Light mode sucks. Real developers use dark mode for everything",
      },
    ],
    []
  );

  const columns = React.useMemo<Column<Topic>[]>(
    () => [
      {
        Header: "Topic",
        accessor: "topic",
      },
      {
        Header: "Reviews",
        columns: [
          {
            Header: "New",
            accessor: "counts.new",
            sortType: "basic",
          },
          {
            Header: "+%",
            accessor: "counts.increase",
            sortType: "basic",
          },
        ],
      },
      {
        Header: "Type",
        accessor: "type",
      },
      {
        Header: "Summary",
        accessor: "summary",
        disableSortBy: true,
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<Topic>(
      {
        columns,
        data,
        initialState: {
          sortBy: [
            {
              id: "counts.new",
              desc: true,
            },
          ],
        },
      },
      useSortBy
    );

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => {
          const { key: headerGroupKey, ...getHeaderGroupProps } =
            headerGroup.getHeaderGroupProps();
          return (
            <tr key={headerGroupKey} {...getHeaderGroupProps}>
              {headerGroup.headers.map((column) => {
                const { key: headerKey, ...getHeaderProps } =
                  column.getHeaderProps(column.getSortByToggleProps());
                return (
                  <th key={headerKey} {...getHeaderProps}>
                    {column.render("Header")}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : ""}
                    </span>
                  </th>
                );
              })}
            </tr>
          );
        })}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          const { key: rowKey, ...getRowProps } = row.getRowProps();
          return (
            <tr key={rowKey} {...getRowProps}>
              {row.cells.map((cell) => {
                const { key: cellKey, ...getCellProps } = cell.getCellProps();
                return (
                  <td key={cellKey} {...getCellProps}>
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TopicTable;
