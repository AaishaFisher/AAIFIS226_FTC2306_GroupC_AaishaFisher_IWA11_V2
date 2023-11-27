//Order 1

//fetch the values and assign them into new variables
const order1 = document.querySelector('section');
const biscuits1=  order1.querySelector('.biscuits .count');
const donuts1 = order1.querySelector('.donuts .count');
const pancake1 = order1.querySelector('.pancakes .count');
const status1 = order1.querySelector('.status dd')

//replace and display above variables where needed
biscuits1.textContent = order1.getAttribute('data-biscuits');
donuts1.textContent = order1.getAttribute('data-donuts');
pancake1.textContent = order1.getAttribute('data-pancakes');
status1.textContent = order1.getAttribute('data-delivered') === 'true' ? 'Delivered' : 'Pending';

 //order 2
//store the fetched values in new variables 
const order2 = order1.nextElementSibling; //catches next 'section' inside main section
const biscuits2 = order2.querySelector('.biscuits .count');
const donuts2 = order2.querySelector('.donuts .count'); 
const pancakes2 = order2.querySelector('.pancakes .count');
const status2 = order2.querySelector('.status dd');

//updating the content to be displayed in order 2
biscuits2.textContent = order2.getAttribute('data-biscuits');
donuts2.textContent = order2.getAttribute('data-donuts');
pancakes2.textContent = order2.getAttribute('data-pancakes');
status2.textContent = order2.getAttribute('data-delivered') === 'true' ? 'Delivered' : 'Pending';

//order3
const order3 = order2.nextElementSibling
const 3-biscuits: document(biscuits),
const 3-donuts: document(donuts),
const 3-pancakes: document(pancakes),
const 3-status: document(status)


3-biscuits= 3-root.biscuits,
3-donuts = 3-root.donuts,
3-pancakes = 3-root.pancakes,
3-status = 3-root.status ? Delivered : Pending 