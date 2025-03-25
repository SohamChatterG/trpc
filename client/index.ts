import { createTRPCClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../server';
//     👆 **type-only** import

// Pass AppRouter as generic here. 👇 This lets the `trpc` object know
// what procedures are available on the server and their input/output types.
const trpc = createTRPCClient<AppRouter>({
    links: [
        httpBatchLink({
            url: 'http://localhost:3000',
            async headers() { // this is how we send headers from client in trpc 
                return {
                    Authoriation: "Bearer 123"
                }
            }
        }),

    ],
});

async function main() {
    let response = await trpc.createTodo.mutate({
        title: "go to gym",
    })
    console.log(response)
    let res = await trpc.signUp.mutate({
        password: "1234",
        email: "heyiamsoham@gmail.com"
    })
    console.log(res)
}

main();