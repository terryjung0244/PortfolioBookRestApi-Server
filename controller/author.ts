import { Request, Response } from 'express'
import { getNanoid } from './../util/getNanoid';
import authorSchema from './../schema/author'

export const createAuthor = async (req: Request, res: Response) => {
  const { authorFirstName, authorLastName } = req.body;
  try {
    const id = getNanoid();
    const newAuthor = await authorSchema.create({
      id, 
      firstName: authorFirstName,
      lastName: authorLastName,
    });
    res.json({
      statusCode: 200,
      message: 'Successfully created author',
      result: newAuthor,
    })
  } catch (err) {
    res.json({
      statusCode: 400,
      message: err.toString(),
      result: null
    })
  }
}

export const getAllAuthor = async (req: Request, res: Response) => {
  try {
    const authorResult = await authorSchema.find();
    res.status(200).json({
      statusCode: 200,
      Message: 'Successfully get All Author From Server',
      authorResult: authorResult
    })
  } catch (err) {
    res.json({
      statusCode: 400,
      message: 'Error from Get All Author From Server',
      authorResult: null
    })
  }
}

export const updateAuthor = async (req: Request, res: Response) => {
  const { authorFirstName, authorLastName, selectedId } = req.body;
  
  try {
    const authorResult = await authorSchema.findOneAndUpdate(
      {id: selectedId}, { firstName: authorFirstName, lastName: authorLastName }
    );
    res.status(200).json({
      statusCode: 200,
      Message: 'Successfully get All Author From Server',
      authorResult: authorResult
    })
  } catch (err) {
    res.json({
      statusCode: 400,
      message: 'Error from Get All Author From Server',
      authorResult: null
    })
  }
}

export const deleteAuthor = async (req: Request, res: Response) => {
  
  const { authorId } = req.query;
  try {
    const authorResult = await authorSchema.findOneAndDelete(
      { id: authorId },
    );
    res.status(200).json({
      statusCode: 200, // 성공 코드
      message: 'Successfully delete author from Server',
      authorResult // result : result 
    })
  } catch (err) {
    res.json({
      statusCode: 400, // 실패 코드
      message: err.toString(),
      authorResult: null
    })
  }
}