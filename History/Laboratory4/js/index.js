
function showAlert() {
    alert("Actualmente no hay elemetos")
}
function deleteElements() {
    let deleteAllBtn = document.getElementById("deleteBtn");
    deleteAllBtn.addEventListener("click", (event) => {
        event.preventDefault();
        const allItems = document.getElementsByClassName("ul-list")[0];
            while( allItems.firstChild ){
                allItems.removeChild( allItems.firstChild );
            }
    });
}

function markAll(){
    let deleteBtn = document.getElementsByClassName("markAllButton")[0];
    deleteBtn.addEventListener("click", (event) => {
        event.preventDefault();
        let checkboxes = document.getElementsByName("checkbox-item");
        if(checkboxes.length > 0){
            for(let i = 0; i < checkboxes.length; i++) {
                checkboxes[i].checked = true;
                }
            }else{
                showAlert();
            }
    });
}

function unmarkAll(){
    let deleteBtn = document.getElementsByClassName("clearButton")[0];
    deleteBtn.addEventListener("click", (event) => {
        event.preventDefault();
        let checkboxes = document.getElementsByName("checkbox-item");
        if(checkboxes.length > 0){
            for(let i = 0; i < checkboxes.length; i++) {
                checkboxes[i].checked = false;
            }
        }else{
            showAlert();
        }
    });
}


function addElement(){
    let addBtn = document.getElementsByClassName("submitButton")[0];
    let textarea = document.getElementsByClassName("newTodo")[0];
    let todoList = document.getElementsByClassName("listOfTodos")[0];
    let ul = document.createElement("ul");
    ul.className = "ul-list";
    todoList.append(ul);
    textarea.textContent = "";

    addBtn.addEventListener("click", (event) => {
        event.preventDefault();

        if(textarea.value !== ""){
            //Making Li element
            let li = document.createElement("li");
            li.id = "element-" + todoList.childElementCount;
            li.className = "list-element";

            let item = document.createElement("input");
            item.type = "checkbox";
            item.name = "checkbox-item";
            item.className = "item-checkbox";

            let label = document.createElement("label");
            label.className = "item-label";

            label.textContent = textarea.value;


            li.append(item, label);
            ul.appendChild(li);
            textarea.value = "";
        }else{
            alert("Error. Debes escribir algo para agregar. ;)")
        }

    });
}

addElement();
markAll();
unmarkAll();
deleteElements();

