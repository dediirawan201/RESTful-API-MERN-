import express from 'express';

const router = express.Router();

router.get('/',(req,res) => {
    res.send('welcome')
})

router.post('/',(req,res) => {
    res.send('welcome to post')
})

export default router;