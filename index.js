let myLeads = []
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");


// instead of onclick we use this for cleaner separation of html and js code
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    // add it to the list
    renderLeads()
    // clear the input field after saving 
    inputEl.value = ""
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