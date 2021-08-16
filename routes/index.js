import express from 'express';

const router = express.Router();

router.get('/',(req,res) => {
    res.send()
})

router.post('/',(req,res) => {
    res.send('welcome to post')
})

export default router;