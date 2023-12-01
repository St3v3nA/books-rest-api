import express from "express";
import {router} from './controllers/booksController.js';

const PORT = 3000;
const app = express();

app.use(express.json());
app.use("/v1/books".bookRouter);


app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`)
})