let myLinks = {};
const textEl = document.getElementById("text-el");
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const saveTabBtn = document.getElementById("save-tab-btn");
const tableEl = document.getElementById("links-table");
// get the links variable from local storage. change its type from strings to original form-array
const linksFromLocalStorage = JSON.parse( localStorage.getItem("myLinks") )
// this is const because rule says, if you can use const then use const because it instills strictness in the code

// if there exists values stored in myleads variable then set call it when refreshed again
if ( linksFromLocalStorage ){
    myLinks = linksFromLocalStorage;
    render(myLinks);
}

saveTabBtn.addEventListener("click", function() {
    // we are using chrome api for accessing tab url
    // the parameters active indicates the active tab and the current window indicates the active window
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        console.log(tabs)
        myLinks[tabs[0].title] = tabs[0].url;
        localStorage.setItem('myLinks', JSON.stringify(myLinks));
        render(myLinks);
    });
})

// clear storage if double clicked on delete all
deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear();
    myLinks = {};
    render(myLinks);
})

// instead of onclick we use this for cleaner separation of html and js code
inputBtn.addEventListener("click", function() {
    // add it to the list
    myLinks[textEl.value] = inputEl.value;
    console.log(myLinks)
    // clear the input field after saving 
    textEl.value = ""
    inputEl.value = "";
    // save myleads to local storage
    localStorage.setItem('myLinks', JSON.stringify(myLinks));
    // to verify its working
    // console.log( localStorage.getItem('myLeads'))
    //display the list
    render(myLinks);
    // the object passed here is argument(outside fn)
})

// the object passed here is parameter(inside fn)
function render(itemList){
    let Items = ""
    for(let key of Object.keys(itemList)){
        // normal html
        // leadItems += '<li><a href="https://'+myLeads[i]+'" target="_blank">'+ myLeads[i] + '</a></li>';

        // using template strings/ template literals with back ticks
        // this makes code more cleaner and allows to wrrite in multiple lines
        Items+=`<tr>
                    <td class="table-key-body"> ${key} </td>
                    <td class="table-value-body">
                        <a href='${itemList[key]}' target="_blank">
                            ${itemList[key]}
                        </a>
                    </td>
                </tr>`;
                     // note: we must add https:// in our url(myLeads) itself.
    }
    tableEl.innerHTML = Items
}

