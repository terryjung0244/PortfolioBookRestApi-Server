import { Router } from 'express';
import * as authorController from '../controller/author';

const router = Router();

router.post('/createAuthor', authorController.createAuthor);
router.get('/getAllAuthor', authorController.getAllAuthor)
router.put('/updateAuthor', authorController.updateAuthor)
router.delete('/deleteAuthor', authorController.deleteAuthor)

export default router;