import Book from "../model/book.model.js";

export const getBook = async (req, res) => {
  try {
    const book = await Book.find();
    res.status(200).json(book);
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json(error);
  }
};

export const uploadBook = async (req, res) => {
  try {
    const { name, price, category, title } = req.body;
    const image = req.file ? req.file.path : ""; // Get the file path from multer

    const newBook = new Book({
      name,
      price,
      category,
      image,
      title,
    });

    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json(error);
  }
};
