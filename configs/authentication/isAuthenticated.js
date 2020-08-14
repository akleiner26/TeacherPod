module.exports = (req, res) => {
    if (!(req.session && req.session.userId)){
        res.send(false);
    }
    else {
       res.send(true)
    }
}