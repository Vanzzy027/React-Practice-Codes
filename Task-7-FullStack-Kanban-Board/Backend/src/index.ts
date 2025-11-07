import { serve } from '@hono/node-server'
import { Hono, type Context } from 'hono'
import initDatabaseConnection from './db/config.js';
import { logger } from 'hono/logger'
import { prometheus } from '@hono/prometheus';
import { limiter } from './middleware/rateLimiter.js';
import movieRoutes from './Project/project-tasks.routes.js';
import { cors } from 'hono/cors';

const { printMetrics, registerMetrics } = prometheus()

const app = new Hono()




//Middleware

//Logger 
app.use(logger())

//cors to let two ports listen to each other
app.use('*', cors())

//prometheus to monitor metrics
app.use('*', registerMetrics) 
app.get('/metrics', printMetrics) 

//limiter 
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

// 
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

