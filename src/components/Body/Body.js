import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";

const baseURL = "https://jsonplaceholder.typicode.com/photos";

const Body = () => {
  const [apiResponse, setApiResponse] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(10);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setApiResponse(response.data);
    });
  }, []);

  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItem = apiResponse.slice(indexOfFirstItem, indexOfLastItem);
  const lastPage = Math.ceil(apiResponse.length / itemPerPage);
  const firstPage = currentPage > 2 ? currentPage - 2 : 1;
  const pageToShow = Math.min(lastPage - firstPage + 1, 3);
  const pageNumber = [];
  for (let i = 1; i <= pageToShow; i++) {
    pageNumber.push(firstPage + i);
  }

  const renderPage = pageNumber.map((e) => {
    return (
      <li>
        <a href="#" onClick={() => setCurrentPage(e)}>
          {" "}
          {e}
        </a>
      </li>
    );
  });

  return (
    <>
      <div className="mainBody">
        <div>hello</div>
        <div>right</div>
      </div>

      <ul>
        {currentItem.map((item) => (
          <li>{item.title}</li>
        ))}
      </ul>
      <ul>{renderPage}</ul>
    </>
  );
};

export default Body;
