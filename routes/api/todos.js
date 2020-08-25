const express = require('express');
const router = express.Router();
const todosCtrl = require('../../controllers/todos');


router.get('/', todosCtrl.show);
require('../../config/auth');
router.post('/', checkAuth, todosCtrl.create);
router.delete('/:id', todosCtrl.deleteTodo);

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({
        msg: "Not Authorized!"
    });
}

module.exports = router;