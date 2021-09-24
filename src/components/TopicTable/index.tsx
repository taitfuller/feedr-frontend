import React, { useCallback, useEffect } from "react";
import { Column, useTable, useSortBy, Row, useGlobalFilter } from "react-table";
import styles from "./style.module.css";
import { TopicSummary } from "../../types";
import Chip from "../Chip";
import percentageIncrease from "../../util/percentageIncrease";
import { matchSorter } from "match-sorter";

interface TopicTableProps {
  topics: TopicSummary[];
  selected: TopicSummary | undefined;
  onSelect: (topic: TopicSummary) => void;
  search: string;
}

const TopicTable: React.FC<TopicTableProps> = ({
  topics,
  selected,
  onSelect,
  search,
}: TopicTableProps) => {
  const memorisedTopics = React.useMemo(() => topics, [topics]);

  const summaryFuzzySearch = useCallback(
    (rows: Row<TopicSummary>[], _ids: string[], query: string) => {
      return matchSorter(rows, query, {
        keys: ["summary"].map((columnName) => `values.${columnName}`),
      });
    },
    []
  );

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
            accessor: (row) =>
              row.counts.oldReviews
                ? `+${percentageIncrease(
                    row.counts.newReviews,
                    row.counts.oldReviews
                  )}%`
                : "—",
            sortType: "basic",
          },
        ],
      },
      {
        Header: "Type",
        accessor: "type",
        // eslint-disable-next-line react/display-name
        Cell: ({ value }) => <Chip type={value} />,
      },
      {
        Header: "Summary",
        accessor: "summary",
        disableSortBy: true,
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter,
  } = useTable<TopicSummary>(
    {
      columns,
      data: memorisedTopics,
      globalFilter: summaryFuzzySearch,
      initialState: {
        sortBy: [
          {
            id: "counts.newReviews",
            desc: true,
          },
        ],
      },
    },
    useGlobalFilter,
    useSortBy
  );

  useEffect(() => {
    setGlobalFilter(search); // Set the Global Filter to the filter prop.
  }, [search, setGlobalFilter]);

  return (
    <table {...getTableProps()} style={{ borderSpacing: 0 }}>
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
      <div style={{ height: "8px" }} />
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          const { key: rowKey, ...getRowProps } = row.getRowProps();
          return (
            <tr
              key={rowKey}
              {...getRowProps}
              className={styles.row}
              onClick={() => onSelect(row.original)}
            >
              {row.cells.map((cell) => {
                const { key: cellKey, ...getCellProps } = cell.getCellProps();
                return (
                  <td
                    key={cellKey}
                    {...getCellProps}
                    className={styles.cell}
                    style={
                      row.original === selected
                        ? { backgroundColor: "var(--fuchsia-60)" }
                        : {}
                    }
                  >
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
