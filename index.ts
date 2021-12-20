// Copyright (c) 2021 Teerasej Jiraphatchandej
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import express, { Request, Response, NextFunction } from 'express';
import { connect } from 'mongoose'


main().catch(error => console.log(error))

async function main() {
    await connect('mongodb://localhost:27017/dating_app')

    const app = express();
    const port = 3000;

    app.use(express.json())

    app.post('/users', (request: Request, response: Response) => {
        console.log(request.body)
        response.status(200).send('ok POST')
    })

    app.get('/users/:email', (request: Request, response: Response) => {
        console.log(request.params.email)
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
    })
}