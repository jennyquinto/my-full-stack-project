import express from 'express'
import data from "../src/data";

const router = express.Router()

const contests = data.contests.reduce((obj, contest, index) => {
    obj[++index] = contest
    return obj
}, {})

router.get('/contests', (req, res) => {
    res.send({ contests: contests })
})

export default router