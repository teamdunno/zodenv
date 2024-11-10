import { z } from "zod";
import { dotenv } from "../../mod.ts"
import { assertEquals } from "jsr:@std/assert@1.0.7";

const schema = z.object({
    PORT: z.coerce.number(),
    HOST: z.string()
})

Deno.test({
    name: "Can load .env file",
    fn() {
        const env = dotenv(schema, {
            path: ".env.test"
        });

        assertEquals(env.HOST, "0.0.0.0")
        assertEquals(env.PORT, 8080)
    }
})
