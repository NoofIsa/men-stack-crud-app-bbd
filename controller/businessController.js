const express = require('express');
const router = express.Router();
const Business = require('../models/bussiness')
// router lik object that will handle tall bathes for organization 
// TEST ROUTE
router.get('/', (req, res) => {
    res.send('work ?')
})
// NEW - Show form to create a new business
router.get("/new", (req, res) =>
     { 
  res.render("businesses/new.ejs");
});

// POST FORM DATA TO DATABASE
router.post('/', async (req, res) => {
    if (req.body.isVerified === 'on') {
        req.body.isVerified = true
    } else {
        req.body.isVerified = false
    }
    console.log(req.body)
    await Business.create(req.body)
    res.redirect('/businesses/new')
})

module.exports = router;