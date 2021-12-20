// Copyright (c) 2021 Teerasej Jiraphatchandej
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import express, { Request, Response, NextFunction } from 'express';
import { connect } from 'mongoose'
import userModel from './schemas/user';
import UserModel from './schemas/user';


main().catch(error => console.log(error))

async function main() {
    await connect('mongodb://localhost:27017/dating_app')

    const app = express();
    const port = 3000;

    app.use(express.json())

    app.post('/users', async (request: Request, response: Response) => {
        console.log(request.body)

        const newUser = new UserModel(request.body)
        const createdUser = await newUser.save()

        response.status(200).json(createdUser)
    })

    app.get('/users/:email', async (request: Request, response: Response) => {
        console.log(request.params.email)

        const doc = await userModel.findOne({ email: request.params.email })

        if(doc) {
            response.status(200).json(doc)
        } else {
            response.status(404).send('user not found')
        }
        
    })

    app.patch('/users', async (request: Request, response: Response) => {
        console.log(request.body)

        await userModel.updateOne({ email: request.body.email }, request.body)

        response.status(200).send('ok PATCH')

        // ใช้ .findOneAndUpdate แทน ถ้าต้องการ doc กลับมาใช้งานจาก database ด้วย
        // const updatedDoc = await userModel.findOneAndUpdate({ email: request.body.email }, request.body)
        // response.status(200).send(updatedDoc)
    })

    app.delete('/users', async (request: Request, response: Response) => {
        console.log(request.body.id)

        await userModel.findByIdAndRemove(request.body.id)

        response.status(200).send('ok DELETE')
    })


    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}.`);
    })
}