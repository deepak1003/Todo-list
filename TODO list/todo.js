// getting DOM control for input tag, add button, checkbox and totalcount
const input = document.getElementById('input');
const addButton = document.getElementById('add');
const checkbox = document.getElementById('checkbox');
const totalText = document.querySelector('#totalText');

// listening the event fired from input box and defining the visibility of add button
let count = 0;
input.addEventListener('keydown', () =>{
    if(input.value.length >= 0){
       addButton.style.visibility = 'visible'
    }
    if(input.value.length <= 1){
        addButton.style.visibility = 'hidden'
    }
});

// listening event on add button and setting cancel button on condition
addCount = 0;
addButton.addEventListener('click', () =>{
   addCount++;
    const val = (input.value).split(' ').join('');
    // adding list
    const item = `<div class="deleteCheck">
                  <img src="./assets/delete.png" alt="" srcset="" id="${val}" class='delete-image'>
                  <input type="checkbox"  name="${input.value}" value="${input.value}" class="checkBox">
                  <label for="html">${input.value}</label></div>`    
    checkbox.innerHTML += item;
    addButton.style.visibility = 'hidden'
    input.value = ''
    addHoverOnCheck();
    totalText.textContent = addCount

})

// adding cancel button on hover and removing
const checkDiv = document.querySelector('.deleteCheck')
function addHoverOnCheck(){
    const allCheck = document.querySelectorAll('.deleteCheck');
    const deleteImages = document.querySelectorAll('.delete-image');
    allCheck.forEach((item,index) =>{
        // listening event on mouseover and adding cancel button
        item.addEventListener('mouseover', () =>{
            const allCheck = document.querySelectorAll('.deleteCheck');
            totalText.textContent = allCheck.length
            deleteImages.forEach((deleteImage,index1) => {
                if((item.textContent).split(' ').join('').trim() === (deleteImage.id).trim()){
                    deleteImage.style.visibility = 'visible';
                    count = 0;
                    deleteImage.addEventListener('click', () => {
                        if(count == 0){
                           deleteItem(index);
                        }
                        count = 1
                    })  
                }
            });
        })

        // listening event on mouse hover out and hiding cancel button
        item.addEventListener('mouseout', () =>{
            deleteImages.forEach(deleteImage => {
                if((item.textContent).split(' ').join('').trim() === (deleteImage.id).trim()){
                    deleteImage.style.visibility = 'hidden';
                }
            });
        })
    })
}
addHoverOnCheck()

// deleting item on click on cancel button
function deleteItem(index){
    checkbox.removeChild(checkbox.children[index]);
    addHoverOnCheck();
    addCount--
    totalText.textContent = addCount
}

