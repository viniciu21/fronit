import { SetupServer } from './server';
import superTest from 'supertest';

beforeAll(() => {
	const server = new SetupServer();
	server.init();
	global.testRequest = superTest(server.getApp());
});
