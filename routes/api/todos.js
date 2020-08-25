const express = require('express');
const router = express.Router();
const todosCtrl = require('../../controllers/todos');


router.get('/', todosCtrl.show);
require('../../config/auth');
router.post('/', checkAuth, todosCtrl.create);

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: "Not Authorized!" });
}

module.exports = router;