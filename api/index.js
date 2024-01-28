import express from 'express'
import data from "../src/data";

const router = express.Router()

const contests = data.contests.reduce((obj, contest) => {
    obj[contest.id] = contest
    return obj
}, {})

router.get('/contests', (req, res) => {
    res.send({ contests: contests })
})

router.get('/contests/:contestId', (req, res) => {
    const contest = contests[req.params.contestId]
    contest.description = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam magni, dolor eos corrupti perspiciatis nihil quibusdam, cumque dolorem suscipit totam consectetur aperiam saepe voluptatibus? Commodi itaque excepturi accusamus aut aliquam.'
    res.send(contest)
})

export default router