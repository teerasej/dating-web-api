// Copyright (c) 2021 Teerasej Jiraphatchandej
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import express, { Request, Response, NextFunction } from 'express';

const app = express();
const port = 3000;

app.post('/user', (resquest: Request, response: Response) => {

})

app.get('/user/:id', (resquest: Request, response: Response) => {
    
})

app.patch('/user/:id', (resquest: Request, response: Response) => {
    
})

app.delete('/user/:id', (resquest: Request, response: Response) => {
    
})


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}.`);
});