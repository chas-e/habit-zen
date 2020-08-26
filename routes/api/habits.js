const router = require('express').Router();
const habitsCtrl = require('../../controllers/habits');

router.get('/', habitsCtrl.index);
router.use(require('../../config/auth'));
router.post('/', checkAuth, habitsCtrl.create);
router.delete('/:id', habitsCtrl.deleteHabit);


function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({
        msg: "Sorry, but you are not authorized."
    });
}

module.exports = router;