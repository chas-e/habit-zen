const router = require('express').Router();
const habitsCtrl = require('../../controllers/habits');

router.use(require('../../config/auth'));
router.get('/:userid', habitsCtrl.show);
router.post('/:userid', checkAuth, habitsCtrl.create);
router.delete('/:id', habitsCtrl.deleteHabit);
router.put('/:id', habitsCtrl.editHabit);
router.put('/update/:id', habitsCtrl.update);


// custom middleware to check auth 
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({
        msg: "Sorry, but you are not authorized."
    });
}

module.exports = router;