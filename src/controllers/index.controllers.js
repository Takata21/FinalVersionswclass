const indexCtrl = {}
indexCtrl.renderIndex = (req, res) => {
    let Htmldetails = {
        title: "SWCLASS",
        styles: "styles.css",
        script: 'mainss.js'

    }



    res.render('index', { Htmldetails })

}

module.exports = indexCtrl