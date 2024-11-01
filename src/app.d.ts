import type { PrismaClient } from '@prisma/client/extension';

declare global {
	namespace App {
		interface Locals {
			user: import('lucia').User | null;
			session: import('lucia').Session | null;
		}
	}
	var prisma: PrismaClient;
}

export {};
