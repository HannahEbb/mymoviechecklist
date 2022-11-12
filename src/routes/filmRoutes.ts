import { Router } from 'express';
import filmSchema from '../schemas/filmSchema';
import { schemaValidator } from '../middlewares/schemaValidator';
import { tokenValidator } from '../middlewares/tokenValidator';
import * as filmControllers from '../controllers/filmControllers';

const filmRouter = Router();

filmRouter.post('/films', schemaValidator(filmSchema), tokenValidator, filmControllers.writeNewFilm);
filmRouter.get('/films', tokenValidator, tokenValidator, filmControllers.readAllUserFilms); 
filmRouter.get('/films/:id', tokenValidator, filmControllers.readFilmById); 
filmRouter.get('/films/streaming/:streaming', tokenValidator, filmControllers.readFilmByStreaming); 
filmRouter.put('/films/:id', tokenValidator, filmControllers.updateFilmById); 
filmRouter.delete('/films/:id', tokenValidator, filmControllers.deleteFilmById);

export default filmRouter; 