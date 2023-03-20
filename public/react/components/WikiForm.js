import { useState } from "react";
import apiUrl from "../api";

const initialFormObject = {
  title: "",
  content: "",
  name: "",
  email: "",
  tags: "",
};

const WikiForm = ({ resetShowForm }) => {
  const [formObject, setFormObject] = useState(initialFormObject);

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("handlesubmit");
    console.log("formObject is ", formObject);
    const res = await fetch(`${apiUrl}/wiki`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formObject),
    });

    const data = await res.json();
    console.log("data is ", data);
    if (data.error) {
      alert("Failed to create page, consult console");
      console.log("error is ");
      console.error(data.error);
    } else {
      alert("Page created successfully");
    }

    setFormObject({ ...initialFormObject });

    resetShowForm();
  };

  return (
    <form onSubmit={handleSubmit} className="form">
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
        value={formObject.name}
        onChange={(e) => setFormObject({ ...formObject, name: e.target.value })}
        required
      />
      <label htmlFor="authorEmail">Author Email:</label>
      <input
        type="email"
        name="authorEmail"
        value={formObject.email}
        onChange={(e) =>
          setFormObject({ ...formObject, email: e.target.value })
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
      <button
        onClick={() => {
          setFormObject({ ...initialFormObject });
          resetShowForm();
        }}
      >
        Cancel
      </button>
    </form>
  );
};

export default WikiForm;
