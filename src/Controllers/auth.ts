import { Controller, Get } from '@overnightjs/core';
import { Request, Response } from 'express';

@Controller('auth')
export class AuthController {
	@Get('get')
	public getUser(req: Request, res: Response): void {
		res.send('123');
	}
}
