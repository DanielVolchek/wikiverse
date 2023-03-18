import { useState } from "react";

const initialFormObject = {
  title: "",
  content: "",
  authorName: "",
  authorEmail: "",
  tags: "",
};

const WikiForm = ({ resetShowForm }) => {
  const [formObject, setFormObject] = useState(initialFormObject);

  const handleSubmit = async (event) => {
    event.preventDefault();

    await fetch("http://localhost:3000/wiki", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formObject),
    });

    setFormObject({ ...initialFormObject });

    resetShowForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        name="title"
        value={formObject.title}
        onChange={(e) =>
          setFormObject({ ...formObject, title: e.target.value })
        }
        required
      />
      <label htmlFor="content">Content:</label>
      <textarea
        name="content"
        value={formObject.content}
        onChange={(e) =>
          setFormObject({ ...formObject, content: e.target.value })
        }
        required
      />
      <label htmlFor="authorName">Author Name:</label>
      <input
        type="text"
        name="authorName"
        value={formObject.authorName}
        onChange={(e) =>
          setFormObject({ ...formObject, authorName: e.target.value })
        }
        required
      />
      <label htmlFor="authorEmail">Author Email:</label>
      <input
        type="email"
        name="authorEmail"
        value={formObject.authorEmail}
        onChange={(e) =>
          setFormObject({ ...formObject, authorEmail: e.target.value })
        }
        required
      />
      <label htmlFor="tags">Tags:</label>
      <input
        type="text"
        name="tags"
        value={formObject.tags}
        onChange={(e) => setFormObject({ ...formObject, tags: e.target.value })}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default WikiForm;
