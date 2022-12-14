import { helloProcedure } from '../../routes/api/trpc/hello';
import { t } from './trpc';

export const appRouter = t.router({
  hello: helloProcedure
});

export type AppRouter = typeof appRouter;
