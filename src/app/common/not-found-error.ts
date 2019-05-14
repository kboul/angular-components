import { AppError } from '../common/app-error';

// Extend the App error class to be more specific and name it 
// NotFoundError, we could make the same for BadRequestError
export class NotFoundError extends AppError { }