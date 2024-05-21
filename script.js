let library = [];

let titleInput = document.querySelector("#input1");
let authorInput = document.querySelector("#input2");
let pagesInput = document.querySelector("#input3");
let rInput = document.querySelector("#read");
let nrInput = document.querySelector("#not-read");
let checkedBtn;
let openBtn = document.querySelector(".new-book-btn");
let closeBtn = document.querySelector(".close-btn");
let dialog = document.querySelector(".form-dialog");
let tBody = document.querySelector(".t-body");
let addBtn = document.querySelector(".add-btn");

let i = 0;


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


openBtn.addEventListener("click", () => {
    dialog.showModal();
})

closeBtn.addEventListener("click", () => {
    dialog.close();
})

addBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (!titleInput.value 
        || !authorInput.value 
        || !pagesInput.value
        || !rInput.checked && !nrInput.checked) {
        //
    } else {
        if (rInput.checked) {
            checkedBtn = rInput;
        } else if (nrInput.checked) {
            checkedBtn = nrInput;
        }
        dialog.close();
        library.push(new Book(titleInput.value, authorInput.value, pagesInput.value, checkedBtn.value));
        tBody.innerHTML += `<tr data-index="${i}">
        <td data-index="${i}">${titleInput.value}</td>
        <td data-index="${i}">${authorInput.value}</td>
        <td data-index="${i}">${pagesInput.value}</td>
        <td data-index="${i}" class="read-btn">${checkedBtn.value}</td>
        <td data-index="${i}" class="delete">DELETE</td>
    </tr>`;
        i++;
        titleInput.textContent = "";
        authorInput.textContent = "";
        pagesInput.textContent = "";
    }
})
