// Copyright (c) 2021 Teerasej Jiraphatchandej
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Schema, model } from 'mongoose'

interface IUser {
    email: String
    password: String
}

const userSchema = new Schema({
    email: String,
    password: String,
});

const userModel = model<IUser>('User', userSchema)

export default userModel