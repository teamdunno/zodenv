import { config } from "npm:dotenv@16.4";
import type { AnyZodObject } from "npm:zod@3.23";
import type { z } from "npm:zod@3.23";
import type { DotenvConfigOptions } from "npm:dotenv@16.4";

/**
 * Take in a .env file and return a type-safe result
 * via a Zod Object
 * 
 * @param schema The zod schema for checking
 * @param options The options for dotenv
 * @returns A validated, type-safe dotenv based on the schema
 */
export function dotenv<T extends AnyZodObject>(schema: T, options: DotenvConfigOptions = {}): z.infer<T> {
    config(options);
    const data = schema.parse(Deno.env.toObject());
    return data;
}
