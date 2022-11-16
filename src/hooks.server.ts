import { appRouter } from '$lib/server/router';
import type { Handle } from '@sveltejs/kit';
import type { HTTPHeaders } from '@trpc/client';
import { resolveHTTPResponse } from '@trpc/server/http';
import { getServerSession, options as nextAuthOptions } from '$lib/next-auth';

const apiHandle: Handle = async ({ event, resolve }) => {
	const session = await getServerSession(event.request, nextAuthOptions);
	if (session) {
		event.locals.session = session;
	}

	if (event.url.pathname.startsWith('/api/trpc/')) {
		const result = await resolveHTTPResponse({
			createContext: async () => ({ event }),
			path: event.url.pathname.substring('/api/trpc/'.length),
			req: {
				body: event.request.body,
				headers: <HTTPHeaders> <unknown> event.request.headers,
				method: event.request.method,
				query: event.url.searchParams
			},
			router: appRouter
		});
		return new Response(
			result.body,
			{
				headers: <HeadersInit> <unknown> result.headers,
				status: result.status
			}
		);
	}

	return resolve(event);
};

export const handle: Handle = apiHandle;