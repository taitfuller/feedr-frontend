import React from "react";
import { Column, useTable, useSortBy } from "react-table";
import styles from "./style.module.css";
import { TopicSummary } from "../../types";
import Chip from "../Chip";

interface TopicTableProps {
  topics: TopicSummary[];
}

const TopicTable: React.FC<TopicTableProps> = ({ topics }: TopicTableProps) => {
  const memorisedTopics = React.useMemo(() => topics, [topics]);

  const columns = React.useMemo<Column<TopicSummary>[]>(
    () => [
      {
        Header: "Topic",
        accessor: (row) => row.keywords.join(", "),
      },
      {
        Header: "Reviews",
        columns: [
          {
            Header: "New",
            accessor: "counts.newReviews",
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
        // eslint-disable-next-line react/display-name
        Cell: ({ value }) => {
          if (value === "bugReport") return <Chip type={"bug"} />;
          if (value === "featureRequest") return <Chip type={"feature"} />;
          return <></>;
        },
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
    useTable<TopicSummary>(
      {
        columns,
        data: memorisedTopics,
        initialState: {
          sortBy: [
            {
              id: "counts.newReviews",
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
            <tr
              key={headerGroupKey}
              {...getHeaderGroupProps}
              className={styles.headerRow}
            >
              {headerGroup.headers.map((column) => {
                const { key: headerKey, ...getHeaderProps } =
                  column.getHeaderProps(column.getSortByToggleProps());
                return (
                  <th
                    key={headerKey}
                    {...getHeaderProps}
                    className={styles.header}
                  >
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
                  <td key={cellKey} {...getCellProps} className={styles.cell}>
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
