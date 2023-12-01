import { PrismaClient } from "@prisma/client";
import { Prisma } from "@prisma/client";

export const getAllBooks = async (req, res) => {
    try {
        const books = await prisma.books.findMany();
        response.status(200).json(books);
    } catch (error) {
        response.status(404).send({
            message: "Midagi läks valest",
            error,
        });
    }
}

export const getBookById = async (req, res) => {
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
}

export const deleteBooks = async (req, res) => {
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
}

export const createBook = async (req, res) => {
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
}

export const updateBooks = async (req, res) => {
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
}

