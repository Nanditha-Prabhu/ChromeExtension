let myLeads = []
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");


// instead of onclick we use this for cleaner separation of html and js code
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    console.log(myLeads)
})