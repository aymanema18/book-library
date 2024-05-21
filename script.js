let library = [];
let openBtn = document.querySelector(".new-book-btn");
let closeBtn = document.querySelector(".close-btn");
let dialog = document.querySelector(".form-dialog");
let tBody = document.querySelector(".t-body");


openBtn.addEventListener("click", () => {
    dialog.showModal();
})

closeBtn.addEventListener("click", () => {
    dialog.close()
})
