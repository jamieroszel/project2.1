///////////////////////////////
// Import Router
////////////////////////////////
const router = require("express").Router()

///////////////////////////////
// Router Specific Middleware
////////////////////////////////

///////////////////////////////
// Router Routes
////////////////////////////////

// Index Router
router.get("/", (req, res) => {
    res.render("home")
})

// About Router
router.get("/about", (req, res) => {
    res.render("about")
})

// 404 Router
router.use((req, res) => {
    res.status(404).render('404')
})




///////////////////////////////
// Export Router
////////////////////////////////
module.exports = router