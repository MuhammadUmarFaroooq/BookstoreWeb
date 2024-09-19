import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function UploadBook() {
  const [bookData, setBookData] = useState({
    name: "",
    price: "",
    category: "",
    image: null,
    title: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData({ ...bookData, [name]: value });
  };

  const handleFileChange = (e) => {
    setBookData({ ...bookData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", bookData.name);
    formData.append("price", bookData.price);
    formData.append("category", bookData.category);
    formData.append("image", bookData.image);
    formData.append("title", bookData.title);

    try {
      await axios.post("http://localhost:4001/book/newbook", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Book uploaded successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error uploading book:", error);
    }
  };

  return (
    <>   <Navbar/>
    <div className="max-w-screen-md container mx-auto md:px-20 px-4 mt-28">
     
      <h1 className="text-2xl md:text-4xl text-center">Upload New Book</h1>
      <form onSubmit={handleSubmit} className="mt-12 space-y-4">
        <div>
          <label className="block mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={bookData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block mb-2">Price</label>
          <input
            type="number"
            name="price"
            value={bookData.price}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block mb-2">Category</label>
          <input
            type="text"
            name="category"
            value={bookData.category}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={bookData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block mb-2">Image</label>
          <input
            type="file"
            name="image"
            onChange={handleFileChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300"
        >
          Upload
        </button>
      </form>
    </div>
    </>
  );
}

export default UploadBook;
