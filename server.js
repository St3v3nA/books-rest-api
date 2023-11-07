import express from "express";
import { PrismaClient } from '@prisma/client'

const PORT = 3000;
const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.get('/books', async (request, response) => {
    try {
        const books = await prisma.books.findMany();
        response.status(200).json(books);
    } catch (error) {
        response.status(404).send({
            message: "Midagi läks valest",
            error,
        });
    }
});

app.get('/books/:id', async (request, response) => {
    try {
        const book = await prisma.books.findUnique({
            where: {
                id: Number(request.params.id),
            }
        });

        response.status(200).json(book);
    } catch (error) {
        response.status(404).send({
            message: "Midagi läks valest",
            error,

        });
    }
});


app.delete('/books/:id', async (request, response) => {
    try {
        const deleteBook = await prisma.books.delete({
            where: {
                id: Number(request.params.id),
            }
        });

        response.status(200).json(deleteBook);
    } catch (error) {
        response.status(404).send({
            message: "Midagi läks valest",
            error,

        });
    }
});



app.post('/books', async (request, response) => {
    try {
        const newBook = await prisma.books.create({
            data: { ...request.body },
        });
        response.status(200).json(newBook);
    } catch (error) {
        response.status(404).send({
            message: "Midagi läks valesti",
            error,
        });
    }
});



app.put('/books/:id', async (request, response) => {
    try {
        const updateBook = await prisma.books.update({
            where: {
                id: Number(request.params.id),
            },
            data: { ...request.body },
        });
        response.status(200).json(updateBook);
    } catch (error) {
        response.status(404).send({
            message: "Midagi läks valesti",
            error,
        });
    }
});



app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`)
})