import { Request, Response } from "express";
import express from 'express'

const { GetBooks } = require('./dist/Getbooks/Getbooks.js');
import { user } from "./selectFav.js";

const app = express();
const port = 3000;

app.get('/books', async (req: Request, res: Response) => {
  const getBooks = new GetBooks();
  getBooks.getFavoriteLinks(user.getUserLikes);
  const data = await getBooks.getData();
  res.send(data);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
