// Copyright (c) 2021 Teerasej Jiraphatchandej
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import express from 'express';

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}.`);
});