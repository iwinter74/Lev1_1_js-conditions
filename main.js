let age
function adult() {
    console.log("working")
    age = document.getElementById("age").value
    console.log(age)
    if (age >= 18) {
        console.log(true)
        document.getElementById("output").innerHTML = "over 18"
    } else {
        console.log(false)
        document.getElementById("output").innerHTML = "under 18"
    }
}