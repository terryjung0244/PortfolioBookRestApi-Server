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
  console.log(req.body);
  // try {
  //   const authorResult = await authorSchema.find();
  //   res.status(200).json({
  //     statusCode: 200,
  //     Message: 'Successfully get All Author From Server',
  //     authorResult: authorResult
  //   })
  // } catch (err) {
  //   res.json({
  //     statusCode: 400,
  //     message: 'Error from Get All Author From Server',
  //     authorResult: null
  //   })
  // }
}