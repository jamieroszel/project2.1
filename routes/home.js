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

// Create Router
router.get("/podcasts/create", (req, res) => {
    res.render('create');
})

// Environment Router
router.get("/enviro", (req, res) => {
    res.render('enviro');
})

// Timber Wars Router
router.get("/timberwars", (req, res) => {
    res.render('timberwars');
})



// 404 Router
router.use((req, res) => {
    res.status(404).render('404')
})






///////////////////////////////
// Export Router
////////////////////////////////
module.exports = router