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

