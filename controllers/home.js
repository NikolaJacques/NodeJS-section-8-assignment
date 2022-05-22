exports.getHomePage = (req,res,next) => {
    res.status(200).render('shop/index.ejs', {
        pageTitle: 'Shop',
        path: '/',
        productCSS: true
    })
}