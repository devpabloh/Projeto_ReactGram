const express = require("express")
const router = express();

// teste route

router.get("/", (req, res)=>{
    res.send("API Working!")
})

module.exports = router;

