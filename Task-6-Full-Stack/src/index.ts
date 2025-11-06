import { serve } from '@hono/node-server'
import { Hono, type Context } from 'hono'
import initDatabaseConnection from './db/config.js';
import { logger } from 'hono/logger'
import { prometheus } from '@hono/prometheus';
import { limiter } from './middleware/rateLimiter.js';
import movieRoutes from './movie-to-watch/movie-to-watch.routes.js';
import { cors } from 'hono/cors';

const { printMetrics, registerMetrics } = prometheus()

const app = new Hono()




//Middleware

//Logger middleware
app.use(logger())

//cors middleware
app.use('*', cors())

//prometheus middleware
app.use('*', registerMetrics) //prometheus to monitor metrics
app.get('/metrics', printMetrics) // expose metrics

//limiter middleware
app.use(limiter)



// Root endpoint
app.get('/', (c) => {
  return c.json({
    message: 'Movie T Watch API is running!',
    status: 'running'
  });
});

//404 handler
app.notFound((c: Context) => {
  return c.json({
    success: false,
    message: 'Route not found',
    path: c.req.path
  }, 404)
})


//Mount API Routes
// User and Movies

// users and movies route
app.route('api/', movieRoutes)

const port = Number(process.env.PORT) || 3000;
// Initailize DB Connection and Start the server
initDatabaseConnection()
  .then(() => {
    //Start the server only after the db connection is established
    serve({
      fetch: app.fetch,
      port
    }, (info) => {
      console.log(`🚀 Server is running on http://localhost:${info.port}`);
    })
  }).catch((error) => {
    console.error('Failed to initialize database connection:', error);
  })

