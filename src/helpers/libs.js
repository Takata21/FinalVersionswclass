const helpers = {}
helpers.validateDate = function(date, datenow) {
    let validatedate = false
    if (date <= datenow) {
        validatedate = false
        return validatedate
    } else {
        if (date > datenow) {
            validatedate = true
            return validatedate
        }
    }

}

module.exports = helpers