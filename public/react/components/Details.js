import { useEffect } from "react";

const Title = ({ title }) => {
  return <h1>{title}</h1>;
};

const getFormattedDate = (date) => {
  const formattedDate = new Date(date);
  const day = formattedDate.getUTCDate().toString().padStart(2, "0");
  const month = (formattedDate.getUTCMonth() + 1).toString().padStart(2, "0");
  const year = formattedDate.getUTCFullYear().toString();

  return `${month}/${day}/${year}`;
};

const Property = ({ name, value }) => {
  if (value === undefined)
    throw new Error(`Property ${name} must have a name and value`);

  return (
    <div>
      <h3 className="property">{name}:</h3>
      <p>{value}</p>
    </div>
  );
};

const Tags = ({ tags }) => {
  return (
    <div>
      <h3>tags:</h3>
      {tags.map(({ name }, index) => (
        <p key={index}>{name}</p>
      ))}
    </div>
  );
};

const Details = ({ page, clearCurrentPage }) => {
  useEffect(() => {
    console.log("rendered details");
    console.log("page is ", page);
  }, []);

  return (
    <div>
      <Title title={page.title} />
      {/* author */}
      <Property name="author" value={page.author.name} />
      {/* createdAt */}
      <Property name="Published" value={getFormattedDate(page.createdAt)} />
      {/* content */}
      <Property name="content" value={page.content} />
      <Tags tags={page.tags} />
      <button onClick={clearCurrentPage}>Return To Titles</button>
    </div>
  );
};

export default Details;
