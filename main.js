class ListRemove {
    static removeList() {
        this.ulList.textContent = "";
        this.listTasks = [];
    }
}
class List {
    constructor() {
        this.inputList = document.getElementById('text');
        this.container = document.querySelector('div.container');
        this.listItems = document.getElementsByClassName('.task');
        this.listTasks = [];
        this.active = false;
        this.ulList = document.querySelector('ul.list');
        document.querySelector('.add').addEventListener('click', this.addListElement.bind(this));
        document.querySelector('.clear').addEventListener('click', ListRemove.removeList.bind(this));

    }
    getInputText() {
        return this.inputList.value.toLowerCase();
    }
    checkListElement(e) {
        if (this.active) {
            e.target.parentNode.style.textDecoration = "none";
        } else {
            e.target.parentNode.style.textDecoration = "line-through";
        }
        this.active = !this.active;
    }
    addListElement(e) {
        e.preventDefault();
        const listItem = document.createElement('li');
        listItem.classList.add('task');
        if (this.inputList.value === "") return alert("Add text");
        if (this.inputList.value.length) {
            for (let i = 0; i < this.listTasks.length; i++) {
                console.log(this.listTasks[i]);
                if (this.inputList.value.toLowerCase() === this.listTasks[i].toLowerCase()) {
                    this.inputList.value = "";
                    return alert("This element is already on the list");
                }
            }
        }
        const task = this.getInputText()
        listItem.innerHTML = `<label class="checkbox-label"><input type="checkbox"><span class="checkbox-custom"></span><span class="text">${task}</span></label>`;
        this.ulList.appendChild(listItem);
        this.listTasks.push(task);
        this.inputList.value = "";
        const check = this.ulList.querySelectorAll('.checkbox-custom');
        check.forEach(item => item.addEventListener('click', this.checkListElement));
        console.log(check)
    }
}

const toDoList = new List();