// Add a Heading
// Select the h1 tag and set "Toppings" as the text of the heading.
const topping = document.getElementById('heading')
topping.textContent = 'Toppings'

// #Add Class
// Select the list item 'burger'. Add a class of 'list-item'.
const burger = document.querySelector('#burger') 
// burger.setAttribute('class', 'list-item');
burger.classList.add('list-item');

// Create and Append
// Create a new li element and append it to the list.
const newLi = document.createElement('li');
const list = document.getElementById('list')
list.appendChild(newLi)
newLi.textContent = 'Pickles'
newLi.setAttribute('id', 'pickles')
newLi.classList.add('list-item')
