import { Request, Response } from 'express'
import { getNanoid } from './../util/getNanoid';
import bookSchema from '../../server/schema/book'

export const createBook = async(req: Request, res: Response) => {
  
  const { authorId, title, content, genre } = req.body;
  try {
    const id = getNanoid();
    const newBook = await bookSchema.create({
      id: id,
      authorId: authorId,
      title: title,
      content: content,
      genre: genre,
    });
    res.json({
      statusCode: 200,
      message: 'Created book without problem',
      result: newBook,
    })
  } catch (err) {
    res.json({
      statusCode: 400,
      message: 'Failed to create book',
      result: null
    })
  }
}

export const getAllBook = async(req: Request, res: Response) => {
  try {
    const newBook = await bookSchema.find();
    res.json({
      statusCode: 200,
      message: 'Successfully recevied GetAllBook',
      result: newBook // 이부분이 이해가 안감.
    });
    
} catch (err) {
  res.json({
    statusCode: 400,
    message: 'Failed to get GetAllBook',
    result: null // 이부분이 이해가 안감.
    })
  }
}