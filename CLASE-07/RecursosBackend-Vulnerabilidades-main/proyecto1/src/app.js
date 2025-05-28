import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import viewsRouter from './routes/views.router.js';
import sessionsRouter from './routes/sessions.router.js';

const app = express();

//! Dependencia no utilizada bcrypt 

app.engine('handlebars',handlebars.engine());
app.set('views',`${__dirname}/views`);
app.set('view engine','handlebars');

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use('/',viewsRouter);
app.use('/api/sessions',sessionsRouter);

//! Variable expuesta - usar PORT en .env
app.listen(8080,()=>console.log(`Listening on PORT 8080`))

//* Desarrollo práctico - Proyecto 1 -Duración: 10 minutos (5 individual + 5 grupal) - Ustedes: 20 - 25. Todos: 25 - 30

//* Desarrollo práctico - Proyecto 2 -Duración: 10 minutos (5 individual + 5 grupal) - Ustedes: 30 - 35. Todos: 35 - 40

//* Desarrollo práctico - Proyecto 3 -Duración: 10 minutos (5 individual + 5 grupal) - Ustedes: 40 - 45. Todos: 45 - 50