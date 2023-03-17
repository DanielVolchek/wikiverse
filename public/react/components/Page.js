import React from "react";

export const Page = (props) => {
  return (
    <>
      <h3 onClick={() => props.onClick(props.page.title)}>
        {props.page.title}
      </h3>
    </>
  );
};
