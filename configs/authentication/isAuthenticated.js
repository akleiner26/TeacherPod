module.exports = (req, res) => {
    if (!(req.session && req.session.userId)){
        res.json({status: false})
    }
    else {
       res.json({status: true, username: req.session.username})
    }
}