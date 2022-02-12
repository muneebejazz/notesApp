//get all the elmeents
const notesEl = document.querySelector('.notes');
const editBtn = document.querySelector('.edit-btn');
const deleteBtn = document.querySelector('.delete-btn');

const mainEl = notesEl.querySelector('.main');
const textArea = notesEl.querySelector('textarea');

editBtn.addEventListener("click", function(event){
    console.log("edit button clicked");
    mainEl.classList.toggle("hidden");
    textArea.classList.toggle('hidden');
});

textArea.addEventListener("input", (e)=>{
    const {value} = e.target;
    mainEl.innerHTML = marked.parse(value);
});