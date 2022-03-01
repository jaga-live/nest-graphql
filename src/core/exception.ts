import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { UserInputError } from 'apollo-server-express';
import { ENV } from './env';





@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
              : HttpStatus.INTERNAL_SERVER_ERROR;
      
      const message : any = exception instanceof HttpException
        ? exception.getResponse()
              : "Internal Server Error";

     const error : any = exception instanceof HttpException
        ? exception.message
      : "Internal Server Error";
    
    
    /////Error Log - Only DEV Environment
    if(ENV.NODE_ENV === 'dev') console.log(exception)
    
    
    ////Class Validator
    if (Array.isArray(message.message)) {
      return new UserInputError('Error 1')
    }
    
    ////Response - Client
    return response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      method : request.method,
      message : message.message,
      error,
      role : request.user? request.user.role : "-"
    });
  }
}