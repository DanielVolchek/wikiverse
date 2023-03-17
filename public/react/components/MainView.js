import React, { useState, useEffect } from "react";
import { PagesList } from "./PagesList";
import apiURL from "../api";
import Details from "./Details";

const MainView = () => {
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(null);

  async function fetchPages() {
    try {
      const response = await fetch(`${apiURL}/wiki`);
      const pagesData = await response.json();
      setPages(pagesData);
      console.log("pagesData is ", pagesData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  async function fetchPage(pageSlug) {
    try {
      const response = await fetch(`${apiURL}/wiki/${pageSlug}`);
      const pageData = await response.json();
      setCurrentPage(pageData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  const clearCurrentPage = () => {
    setCurrentPage(null);
  };

  useEffect(() => {
    console.log("currentpage is ", currentPage);
  }, [currentPage]);

  useEffect(() => {
    fetchPages();
  }, []);

  return !currentPage ? (
    <PagesList pages={pages} fetchPage={fetchPage} />
  ) : (
    <Details page={currentPage} clearCurrentPage={clearCurrentPage} />
  );
};

export default MainView;
