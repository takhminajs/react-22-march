import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { videosContext } from "../../contexts/videosContext";

const Add = () => {
  const navigate = useNavigate();
  const { addVideo } = useContext(videosContext);
  //title, imageTitle,genre,description

  const [newProduct, setNewProduct] = useState({
    title: "",
    imageTitle: "",
    genre: "",
    description: "",
  });

  function handleValues(e) {
    //title: ghgdjshj
    let product = {
      ...newProduct,
      [e.target.name]: e.target.value,
    };
    setNewProduct(product);
  }
  function save() {
    if (
      !newProduct.title ||
      !newProduct.description ||
      !newProduct.imageTitle ||
      !newProduct.genre
    ) {
      alert("Заполните поля");
      return;
    }
    addVideo(newProduct);
    navigate("/");
  }

  return (
    <div>
      <input
        type="text"
        value={newProduct.title}
        placeholder="Title"
        onChange={handleValues}
        name="title"
      />
      <input
        type="text"
        value={newProduct.imageTitle}
        placeholder="Image for title"
        onChange={handleValues}
        name="imageTitle"
      />
      <input
        type="text"
        value={newProduct.genre}
        placeholder="Genre"
        onChange={handleValues}
        name="genre"
      />
      <input
        type="text"
        value={newProduct.description}
        placeholder="Description"
        onChange={handleValues}
        name="description"
      />

      <button onClick={save}>Save</button>
    </div>
  );
};

export default Add;
