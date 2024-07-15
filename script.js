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
let deleteBtn = document.querySelectorAll(".delete-btn");
const tM = document.querySelector(".title-message");
const aM = document.querySelector(".author-message");
const pM = document.querySelector(".pages-message");

let i = 0;

titleInput.addEventListener("blur", () => {
  if (titleInput.validity.valueMissing) {
    tM.textContent = "Must not be left empty.";
  }
});

titleInput.addEventListener("focus", () => {
  tM.textContent = "";
});

authorInput.addEventListener("blur", () => {
  if (authorInput.validity.valueMissing) {
    aM.textContent = "Must not be left empty.";
  }
});

authorInput.addEventListener("focus", () => {
  aM.textContent = "";
});

pagesInput.addEventListener("blur", () => {
  if (pagesInput.validity.valueMissing) {
    pM.textContent = "Must not be left empty.";
  } else if (pagesInput.validity.rangeUnderflow) {
    pM.textContent = "Pages must be over 0";
  }
});

pagesInput.addEventListener("focus", () => {
  pM.textContent = "";
});

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  changeStatus() {
    if (this.read === "read") {
      this.read = "not read";
    } else {
      this.read = "read";
    }
  }
}

openBtn.addEventListener("click", () => {
  dialog.showModal();
});

closeBtn.addEventListener("click", () => {
  dialog.close();
});

addBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (
    !titleInput.value ||
    !authorInput.value ||
    !pagesInput.value ||
    pagesInput.validity.rangeUnderflow ||
    (!rInput.checked && !nrInput.checked)
  ) {
    //
  } else {
    if (rInput.checked) {
      checkedBtn = rInput;
    } else if (nrInput.checked) {
      checkedBtn = nrInput;
    }
    dialog.close();
    library.push(
      new Book(
        titleInput.value,
        authorInput.value,
        pagesInput.value,
        checkedBtn.value
      )
    );
    tBody.innerHTML += `<tr data-index="${i}">
        <td data-index="${i}">${titleInput.value}</td>
        <td data-index="${i}">${authorInput.value}</td>
        <td data-index="${i}">${pagesInput.value}</td>
        <td data-index="${i}" class="read-btn">${checkedBtn.value}</td>
        <td data-index="${i}"><div data-index="${i}" class="delete-btn">DELETE</div></td>
    </tr>`;
    i++;
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    checkedBtn.checked = false;
  }
  deleteBtn = document.querySelectorAll(".delete-btn");
});

tBody.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn")) {
    let deleteIndex = event.target.dataset.index;
    delete library[deleteIndex];
    document.querySelector(`tr[data-index="${deleteIndex}"]`).remove();
  }
});

tBody.addEventListener("click", (event) => {
  if (event.target.classList.contains("read-btn")) {
    library[event.target.dataset.index].changeStatus();
    if (event.target.innerHTML === "read") {
      event.target.innerHTML = "not read";
    } else {
      event.target.innerHTML = "read";
    }
  }
});
