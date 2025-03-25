import { initTRPC } from '@trpc/server';

const t = initTRPC
    .context<{
        username?: string;
    }>()
    .create();

export const router = t.router; // this is similar to app in trpc which we export and then do app.get or app.post
export const publicProcedure = t.procedure;