export default function handler(req, res) {
    res.setPreviewData({user: 'Gaurav'})
    res.redirect(req.query.redirect)
}