// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}

import type {
	User as NextAuthUser,
	Session as NextAuthSession,
} from 'next-auth';

// optionally extend the `user`
type User = NextAuthUser;

interface AppSession extends NextAuthSession {
	user: User;
}

// See https://kit.svelte.dev/docs/typescript
// for information about these interfaces
declare global {
	declare namespace App {
		interface Locals {
			session: AppSession;
		}

		interface Platform { }

		interface Session extends AppSession { }

		interface Stuff { }
	}
}