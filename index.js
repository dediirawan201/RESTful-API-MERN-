import express from 'express';

const app = express();

app.get('/',(req,res) => {
    res.send('welcome')
})

app.listen('3000', () => console.log('Server Running at port :3000'))