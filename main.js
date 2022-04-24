// fetch('./data.json').then(result => result.json()).then(console.log)
let currentAmount = document.querySelectorAll(".currentAmount")
let previousAmount = document.querySelectorAll(".previousAmount")
let period = document.querySelectorAll(".period")




async function getData(period) {
    const response = await fetch("./data.json")
    const data = await response.json()
    // console.log(data)
    switch (period) {
        case "weekly":
            {
                currentAmount.forEach(activity=>{
                    // Assign the current value to each activity by testing for currentAmount class name
                    // switch (activity.has)
                })
            }
            
            break;
    
        default:
            break;
    }
}

getData()