import { Express } from "express";
import { createBook, getAllBooks, getBookById, updateBooks,}; 

const router = express.Router();

router.post('/', createBook);
router.get('/', getBooksId);
router.get('/', getAllBooks);
router.put('/', changeBook);
router.delete('/', deleteBook);

export default {router};