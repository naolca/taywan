import { Request } from 'express';
interface MyUserRequest extends Request {
    user?: any;
}
export { MyUserRequest };
