import { publicProcedure, router } from './trpc';
import { z } from "zod"
import { createHTTPServer } from '@trpc/server/adapters/standalone';
const todoInputType = z.object({
    title: z.string(),
})
const appRouter = router({
    createTodo: publicProcedure
        .input(todoInputType)
        .mutation(async (opts) => {
            console.log("hi there", opts.ctx.username) // 2> we have access under ctx because it is returned from createContext
            const title = opts.input.title;
            // db stuff
            return {
                id: "1"
            }
        })
    ,
    signUp: publicProcedure.
        input(z.object({
            email: z.string(),
            password: z.string()
        }))
        .mutation(async (opts) => {

            const username = opts.ctx.username; // 2>
            // db validations
            let token = "123456";
            return {
                token
            }
        })
})

const server = createHTTPServer({
    router: appRouter,
    createContext(opts) { // 1> this works as middleware
        let authHeader = opts.req.headers["authorization"];
        console.log(authHeader)
        // jwt.verify()
        return {
            username: "123"
        }
    }
})
server.listen(3000, () => {
    console.log("server listening on 3000")
});

export type AppRouter = typeof appRouter;