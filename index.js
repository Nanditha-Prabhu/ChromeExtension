let myLeads = []
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const ulEl = document.getElementById("ul-el");
// get the leads variable from local storage. change its type from strings to original form-array
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
// this is const because rule says, if you can use const then use const because it instills strictness in the code

// if there exists values stored in myleads variable then set call it when refreshed again
if ( leadsFromLocalStorage ){
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

// clear storage if double clicked on delete all
deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear();
    myLeads = [];
    render(myLeads);
})

// instead of onclick we use this for cleaner separation of html and js code
inputBtn.addEventListener("click", function() {
    // add it to the list
    myLeads.push(inputEl.value);
    // clear the input field after saving 
    inputEl.value = "";
    // save myleads to local storage
    localStorage.setItem('myLeads', JSON.stringify(myLeads));
    // to verify its working
    // console.log( localStorage.getItem('myLeads'))
    //display the list
    render(myLeads);
    // the object passed here is argument(outside fn)
})

// the object passed here is parameter(inside fn)
function render(itemList){
    let Items = ""
    for(let i=0; i<itemList.length; i++){
        // normal html
        // leadItems += '<li><a href="https://'+myLeads[i]+'" target="_blank">'+ myLeads[i] + '</a></li>';

        // using template strings/ template literals with back ticks
        // this makes code more cleaner and allows to wrrite in multiple lines
        Items +=`<li>
                            <a href='${itemList[i]}' target="_blank">
                                ${itemList[i]}
                            </a>
                     </li>`;
                     // note: we must add https:// in our url(myLeads) itself.
    }
    ulEl.innerHTML = Items
}