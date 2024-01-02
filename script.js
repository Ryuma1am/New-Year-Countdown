let newYear = new Date("1 Jan 2025")
let days = document.getElementById("days")
let hours = document.getElementById("hours")
let minuts = document.getElementById("minuts")
let seconds = document.getElementById("seconds")

function printDays(){
    let today = new Date()
    let timeToNewYear = newYear - today
    let daysCount = parseInt(((((timeToNewYear/1000))/60)/60)/24)
    let hoursCount = parseInt(((((timeToNewYear / 1000)) / 60)/60)%24)
    let minutsCount = parseInt(((((timeToNewYear / 1000)) / 60)%60))
    let secondsCount = parseInt(((timeToNewYear / 1000)%60))
    days.innerText = daysCount
    hours.innerText = hoursCount
    minuts.innerText = minutsCount
    seconds.innerText = secondsCount
}

setInterval(printDays,1000)

