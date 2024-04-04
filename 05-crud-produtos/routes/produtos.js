const express = require('express')
const router = express.Router()


router.get('/produtos', (req, res) => {
    res.json("OK")
})


module.exports = router