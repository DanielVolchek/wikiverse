import React, { useState, useEffect } from "react";
import { PagesList } from "./PagesList";
import apiURL from "../api";
import Details from "./Details";
import WikiForm from "./WikiForm";

const MainView = () => {
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(null);
  const [showingForm, setShowingForm] = useState(false);

  async function fetchPages() {
    try {
      const response = await fetch(`${apiURL}/wiki`);
      console.log("response is ", response);
      const pagesData = await response.json();
      if (JSON.stringify(pages) !== JSON.stringify(pagesData))
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

  if (showingForm) {
    return <WikiForm resetShowForm={() => setShowingForm(() => false)} />;
  }

  return (
    <div>
      {!currentPage ? (
        <div>
          <PagesList
            pages={pages}
            fetchPage={fetchPage}
            fetchPages={fetchPages}
          />
          <button onClick={() => setShowingForm(() => true)}>Show Form</button>
        </div>
      ) : (
        <Details page={currentPage} clearCurrentPage={clearCurrentPage} />
      )}
    </div>
  );
};

export default MainView;
