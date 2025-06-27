let event1 = document.getElementById("count-el")

let count = 0

function increment() {
    count += 1
    event1.innerText = count
}

let entries = document.getElementById("entered")

function save() {
    console.log(count)
    updateHistory()
    reset()
}
function updateHistory() {
    if (entries.innerText == "No Entries") {
        entries.innerText = "Previous entries: "
        entries.innerText += " " + count + " -"
    }
    else {
        entries.innerText += " " + count + " -"
    }
}

function reset() {
    count = 0
    event1.innerText = 0
}

function cl1() {
    reset()
    entries.innerText = "No Entries"
    console.log("clear clicked")
}

// event listeners using js only 
document.getElementById("reset-btn").addEventListener("click", cl1)

let welcome = "Welcome back, "
let name = "Mahmoud Talaat"
let emoji = "👋"

let greet = document.getElementById("welcoming")
greet.innerText = welcome + name
greet.innerText += emoji
