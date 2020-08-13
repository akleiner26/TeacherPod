module.exports = (req, res) => {
    if (!req.session){
        res.send(false);
    }
    res.send(true)
}