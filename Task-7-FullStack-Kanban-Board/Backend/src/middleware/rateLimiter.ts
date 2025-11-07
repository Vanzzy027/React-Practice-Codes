import { rateLimiter } from "hono-rate-limiter";

export const limiter = rateLimiter({    
    windowMs: 15 * 15 * 1000, // 15 minutes
    limit: 200, // Limit each IP to 200 requests per `window` (here, per 15 minutes).
    standardHeaders: "draft-6", // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
    keyGenerator: (c) => "<unique_key>", // Method to generate custom identifiers for clients.
   
  
})