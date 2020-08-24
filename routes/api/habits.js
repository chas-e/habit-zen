const router = require('express').Router();
const habitsCtrl = require('../../controllers/habits');

router.use(require('../../config/auth'));
router.get('/habit', checkAuth, habitsCtrl.index);
router.post('/habit', checkAuth, habitsCtrl.create);


function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({
        msg: "Sorry, but you are not authorized."
    });
}


module.exports = router;