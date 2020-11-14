import express from 'express';
import { helloWorldTs, user, userInterface } from './routes';

const app = express();

app.get('/', helloWorldTs);
app.get('/user', user);
app.get('/userInterface', userInterface);

app.listen(3333, () => console.log('🚀 server started listen 3333'));