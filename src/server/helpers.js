const helpers = {}
helpers.timeago = (date) => {
    let now, limit, days, hours, minutes, second, limitDate
    limit = new Date(date).getTime()
    now = new Date().getTime() // look  
    limitDate = (limit - now)
    days = Math.floor(limitDate / (1000 * 60 * 60 * 24))
    hours = ("0" + Math.floor((limitDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2)
    minutes = ("0" + Math.floor((limitDate % (1000 * 60 * 60)) / (1000 * 60))).slice(-2)
    second = ("0" + Math.floor((limitDate % (1000 * 60)) / 1000)).slice(-2)
    let time = `${days} Days ${hours} Hours ${minutes} Minutes `
    console.log("HELLO IM TIME" + time)
    return time

}
module.exports = helpers