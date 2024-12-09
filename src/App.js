import "./App.css";
import React, { useState } from "react";

function App() {
  const tableData = [
    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" },
  ];

  const [sortedTableData, setSortedTableData] = useState(tableData);

  
  const sortByDate = () => {
    const sortedArr = [...tableData].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      if (dateA > dateB) {
        return -1;
      } else if (dateA < dateB) {
        return 1;
      } else {
        if (a.views > b.views) {
          return -1;
        } else if (a.views < b.views) {
          return 1;
        } else {
          return 0;
        }
      }
    });

    setSortedTableData(sortedArr);
  };

  const sortByViews = () => {
    const sortedArr = [...tableData].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      if (a.views > b.views) {
        return -1;
      } else if (a.views < b.views) {
        return 1;
      } else {
        if (dateA > dateB) {
          return -1;
        } else if (dateA < dateB) {
          return 1;
        } else {
          return 0;
        }
      }
    });
   
    setSortedTableData(sortedArr);
  };

  return (
    <>
      <h1>Date and Views Table</h1>
      <button style={{ cursor: "pointer" }} onClick={sortByDate}>
        Sort by Date
      </button>
      <button style={{ cursor: "pointer" }} onClick={sortByViews}>
        Sort by Views
      </button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {
          sortedTableData.map((item, idx) => (
            <tr key={idx}>
              <td>{item.date}</td>
              <td>{item.views}</td>
              <td>{item.article}</td>
            </tr>
          ))
          }
        </tbody>
      </table>
    </>
  );
}

export default App;
