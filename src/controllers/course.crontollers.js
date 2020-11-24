const courseCtrl = {}
courseCtrl.takeCourse = (req, res) => {
    let Htmldetails = {
        title: "SWCLASS",
        styles: "styles.css",
        script: 'main.js'

    }
    console.log(req.body)
    res.json('hey')


}

module.exports = courseCtrl