import app from './app.js';
import './db/connection.js';
import morgan from 'morgan';
import mainRoute from './routes/mainRoute.js';
app.use(morgan('dev'));
app.use('api/chatbot', mainRoute);
//# sourceMappingURL=index.js.map