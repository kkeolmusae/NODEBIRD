const express = require('express');

const { isLoggedIn } = require('./middlewares');
const User = require('../models/user');

const router = express.Router();

router.post('/:id/follow', isLoggedIn, async (req, res, next) => {
    try {
        const user = await User.findOne({ where: { id: req.user.id } }); // 팔로우할 사용자를 DB에서 조회한 후
        if (user) {
            await user.addFollowing(parseInt(req.params.id, 10)); // 현재 로그인한 사용자와의 관계를 지정
            res.send('success');
        } else {
            res.status(404).send('no user')
        }
    } catch (err) {
        console.error(err);
        next(err);
    }
});

router.post('/:id/unfollow', isLoggedIn, async (req, res, next) => {
    try {
        const user = await User.findOne({ where: { id: req.user.id } });
        if (user) {
            await user.removeFollowing(parseInt(req.params.id, 10));
            res.send('success');
        } else {
            res.status(404).send('no user')
        }
    } catch(err) {
        console.error(err);
        next(err);
    }
})

module.exports = router;