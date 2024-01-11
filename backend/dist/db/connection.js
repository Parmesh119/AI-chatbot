import app from '../app.js';
import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
const URL = process.env.MONGODB;
let db = mongoose
    .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
    app.listen(3000, () => {
        console.log('connected');
    });
})
    .catch((error) => {
    console.log(error);
});
//# sourceMappingURL=connection.js.map