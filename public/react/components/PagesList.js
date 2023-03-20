import React, { useEffect } from "react";
import { Page } from "./Page";

export const PagesList = ({ pages, fetchPage, fetchPages }) => {
  useEffect(() => {
    fetchPages();
  }, []);

  return (
    <>
      {pages.map((page, idx) => {
        return <Page page={page} key={idx} onClick={fetchPage} />;
      })}
    </>
  );
};
