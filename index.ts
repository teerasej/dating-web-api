// Copyright (c) 2021 Teerasej Jiraphatchandej
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import express, { Request, Response, NextFunction } from 'express';

const app = express();
const port = 3000;

app.use(express.json())

app.post('/users', (request: Request, response: Response) => {
    console.log(request.body)
    response.status(200).send('ok POST')
})

app.get('/users/:id', (request: Request, response: Response) => {
    console.log(request.params.id)
    response.status(200).send('ok GET')
})

app.patch('/users', (request: Request, response: Response) => {
    console.log(request.body)
    response.status(200).send('ok PATCH')
})

app.delete('/users', (request: Request, response: Response) => {
    console.log(request.body.id)
    response.status(200).send('ok DELETE')
})


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}.`);
});