const myBtn = document.querySelector('#myBtn');
const nameInput = document.querySelector("#name")

const list = document.querySelector('#list');

nameInput.addEventListener('click', (event) => {
    if (event.key === "Event") {
        addTask()
    }
})







myBtn.addEventListener('click', Task)

function Task() {
    if (nameInput.value != "") {
        const cenle = document.querySelector("#cenle");
        const delButModel = document.querySelector("#del");
        const model = document.querySelector("#model");

        const newItem = document.createElement("li");

        newItem.classList.add('item');

        const deleteButton = document.createElement('button')
        newItem.innerHTML = `<span>${nameInput.value}</span>`;



        list.appendChild(newItem);
        //Очистить элемент в списке
        cenle.textContent = 'отмена'

        del.textContent = 'yдалить'

        deleteButton.textContent = 'удалить';
        newItem.appendChild(deleteButton)
        deleteButton.addEventListener('click', (event) => {


            cenle.classList.add('active')
            delButModel.classList.add('#del')
        })
        deleteButton.addEventListener('click', (event) => {

            model.stley, display = 'block';

            function removeTask() {
                list.removeChild(newItem);
                model.style.display = 'none';

            }
            list.addEventListener('click', removeTask)

            delButModel.addEventListener('click', removeTask)



            cenle.addEventListener('click', () => {
                model.stley.display = 'none';
                list.removeEventListener('click', removeTask)


            })
        })
        nameInput.value = '';
    } else {
        alert('Заполните поле')
    }
}






//Math.floor-округлить до целого в меньшую сторону
//Math.random()-
//Math.random()*(max-min + 1)+ min - формула нахождение случайного числа



//Math.random()*(max-min + 1)+min
//Найти случайное числo 1 от 10
//Math.random()*10+1
//Math.random()*11
//Math.random()*9+2;




