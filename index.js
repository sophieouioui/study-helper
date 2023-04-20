let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
let exerciseCount = 0


function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    if (exerciseCount === 0) {
        let countStr = count
    } else {
        let countStr = "-" + count
    }
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
