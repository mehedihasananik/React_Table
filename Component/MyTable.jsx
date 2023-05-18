import React, { useState } from "react";
import { Container, Table } from "react-bootstrap";
import { BsArrowDownShort } from "react-icons/bs";
import styles from "./Table.module.css";

const MyTable = ({ data }) => {
  const [sortedData, setSortedData] = useState(data);
  const [sortOrder, setSortOrder] = useState("asc");

  // sort by name
  const sortByName = () => {
    const newOrder = sortOrder === "asc" ? "desc" : "asc";
    const sorted = [...sortedData].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    setSortedData(sorted);
    setSortOrder(newOrder);
  };

  return (
    <>
      <Container>
        {/* start table */}
        <Table className="mt-5" bordered hover>
          <thead>
            {/*start table head items */}
            <tr>
              <th className={styles.table_data} onClick={sortByName}>
                Student Name <BsArrowDownShort />
              </th>
              <th className={styles.table_data}>Subject</th>
              <th className={styles.table_data}>Total Mark</th>
              <th className={styles.table_data}>Avrg Mark</th>
              {/* Add more columns here */}
            </tr>
            {/*end table head items */}
          </thead>
          <tbody>
            {/*start table data items */}
            {sortedData.map((item) => (
              <tr key={item.id}>
                <td className={styles.table_data}>{item.name}</td>
                <td className={styles.table_data}>{item.subject}</td>
                <td className={styles.table_data}>{item.marks}</td>
                <td className={styles.table_data}>{item.avrg}</td>
              </tr>
            ))}
            {/*end table data items */}
          </tbody>
        </Table>
        {/* end table */}
      </Container>
    </>
  );
};

export default MyTable;
