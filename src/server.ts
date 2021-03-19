import { Server } from '@overnightjs/core';
import { AuthController } from './Controllers/auth';
import express, { Application } from 'express';

export class SetupServer extends Server {
	constructor(private port = 8080) {
		super();
	}

	public init(): void {
		this.setupExpress();
		this.setupControllers();
		this.app.listen(this.port, () => {
			console.log('Server listening on port: ' + this.port);
		})
	}

	private setupExpress(): void {
		this.app.use(express.json());
	}

	private setupControllers(): void {
		const authController = new AuthController();
		this.addControllers([authController]);
	}

	public getApp(): Application {
		return this.app;
	}
}
