import { Router } from 'express';
import * as bookController from '../controller/book';

const router = Router();

router.post('/createBook', bookController.createBook);
// router.get('/getAllAuthor', authorController.getAllAuthor)
// router.put('/updateAuthor', authorController.updateAuthor)
// router.delete('/deleteAuthor', authorController.deleteAuthor)

export default router;