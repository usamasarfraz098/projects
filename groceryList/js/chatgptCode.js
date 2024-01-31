const submitBtn = document.querySelector('.btn');
const deleteBtn = document.querySelectorAll('.delete');
const clearBtn = document.querySelector('.clear_btn');
const editBtn = document.querySelector('.edit');
const sectionGrocery = document.querySelector('.content_items');
const input = document.querySelector('#text');

// Retrieve data from localStorage on page load
let data = JSON.parse(localStorage.getItem('groceryData')) || [];

// Function to save data to localStorage
const saveDataToLocalStorage = () => {
  localStorage.setItem('groceryData', JSON.stringify(data));
};

// Function to generate and display item
const generateItem = function (inputValue) {
  const html = `<div class="content_item_1">
    <div class="title">${inputValue}</div>
    <div class="content_item_btn">
      <i class="delete fa fa-trash btn_curser" aria-hidden="true"></i>
      <i class="edit fas fa-edit btn_curser"></i>
    </div>
  </div>`;
  sectionGrocery.insertAdjacentHTML('beforeend', html);
};

// Function to display existing data
const displayData = function () {
  sectionGrocery.innerHTML = ''; // Clear existing content
  data.forEach((item) => generateItem(item));
};

// submitbtn 
submitBtn.addEventListener('click', function () {
  const inputValue = input.value;
  generateItem(inputValue);
  data.push(inputValue);
  saveDataToLocalStorage(); // Save data to localStorage
  console.log(data);
});

sectionGrocery.addEventListener('click', function (e) {
  if (e.target.classList.contains('delete')) {
    // Handle delete 
    console.log('Delete button clicked');
    const itemToRemove = e.target.closest('.content_item_1');
    const textToRemove = itemToRemove.querySelector('.title').textContent;
    const indexToRemove = data.indexOf(textToRemove);
    data.splice(indexToRemove, 1); // Remove item from the data array
    itemToRemove.remove();
    saveDataToLocalStorage(); // Save data to localStorage after deletion
  } else if (e.target.classList.contains('edit')) {
    console.log('edit');
    const target = e.target.closest('.content_item_1');
    console.log(target.children[0]);
    const currentText = target.children[0].textContent;
    const html = `<span class="content_inputData">
      <span class="input"><input type="text" placeholder="${currentText}" name="text" id="text_2"></span>
      <span class="btnEdit_1">Submit</span>
    </span>`;
    console.log(currentText);
    target.children[0].innerHTML = '';
    target.children[0].insertAdjacentHTML('beforeEnd', html);

    const editGeneratedBtn = target.querySelector('.btnEdit_1');
    const editGeneratedText = target.querySelector('#text_2');

    // editGeneratedFunction 
    const editGeneratedFunction = function () {
      console.log(editGeneratedText.value);
      target.children[0].innerHTML = '';
      const html = `${editGeneratedText.value}`;
      target.children[0].insertAdjacentHTML('beforeEnd', html);
      saveDataToLocalStorage(); // Save data to localStorage after edit
    };

    editGeneratedBtn.addEventListener('click', editGeneratedFunction);
  }
});

// clear btn 
clearBtn.addEventListener('click', function () {
  console.log('usama');
  sectionGrocery.innerHTML = '';
  data = []; // Clear the data array
  localStorage.removeItem('groceryData'); // Clear data from localStorage
});

// Display existing data when the page loads
displayData();
