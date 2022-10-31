const router = require('express').Router();
const userRoutes = require('./userRoutes');
const ideaRoutes = require('./thoughtRoutes');

router.use('/users', userRoutes);
router.use('/thoughts', ideaRoutes);

module.exports = router;