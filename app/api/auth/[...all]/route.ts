import { getAuth } from "@/lib/better-auth/auth";
import { toNextJsHandler } from "better-auth/next-js";

const authHandler = await getAuth();
export const { GET, POST } = toNextJsHandler(authHandler.handler);
