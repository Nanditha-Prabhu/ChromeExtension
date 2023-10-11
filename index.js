let myLeads = ['www.coolors.co', 'www.unsplash.com']
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");


// instead of onclick we use this for cleaner separation of html and js code
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    console.log(myLeads);
})

for(let i=0; i<myLeads.length; i++){
    ulEl.innerHTML += '<li>'+ myLeads[i] + '</li>';
}