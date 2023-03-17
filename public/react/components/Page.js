import React from "react";

export const Page = (props) => {
  return (
    <>
      <h3 className="page-title" onClick={() => props.onClick(props.page.slug)}>
        {props.page.title}
      </h3>
    </>
  );
};
