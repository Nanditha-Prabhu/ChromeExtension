let myLeads = []
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

// get the leads variable from local storage. change its type from strings to original form-array
let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

// if there exists values stored in myleads variable then set call it when refreshed again
if ( leadsFromLocalStorage ){
    myLeads = leadsFromLocalStorage
    renderLeads()
}

// instead of onclick we use this for cleaner separation of html and js code
inputBtn.addEventListener("click", function() {
    // add it to the list
    myLeads.push(inputEl.value);
    // clear the input field after saving 
    inputEl.value = ""
    // save myleads to local storage
    localStorage.setItem('myLeads', JSON.stringify(myLeads))
    // to verify its working
    // console.log( localStorage.getItem('myLeads'))
    //display the list
    renderLeads()
})

function renderLeads(){
    let leadItems = ""
    for(let i=0; i<myLeads.length; i++){
        // normal html
        // leadItems += '<li><a href="https://'+myLeads[i]+'" target="_blank">'+ myLeads[i] + '</a></li>';

        // using template strings/ template literals with back ticks
        // this makes code more cleaner and allows to wrrite in multiple lines
        leadItems +=`<li>
                            <a href='${myLeads[i]}' target="_blank">
                                ${myLeads[i]}
                            </a>
                     </li>`;
                     // note: we must add https:// in our url(myLeads) itself.
    }
    ulEl.innerHTML = leadItems
}