//Order 1

//fetch the values and assign them into new variables
const order1 = document.querySelector('section');
const biscuitsOrder1=  order1.querySelector('.biscuits .count');
const donutsOrder1 = order1.querySelector('.donuts .count');
const pancakeOrder1 = order1.querySelector('.pancakes .count');
const statusOrder1 = order1.querySelector('.status dd')

//replace and display above variables where needed
biscuitsOrder1.textContent = order1.getAttribute('data-biscuits');
donutsOrder1.textContent = order1.getAttribute('data-donuts');
pancakeOrder1.textContent = order1.getAttribute('data-pancakes');
order1.textContent = order1.getAttribute('data-delivered') === 'true' ? 'Delivered' : 'Pending';


const 2-root = document(order2),
const 2-biscuits: document(biscuits),
const 2-donuts: document(donuts),
const 2-pancakes: document(pancakes),
const 2-status: document(status)

2-biscuits= 2-root.biscuits,
2-donuts = 2-root.donuts,
2-pancakes = 2-root.pancakes,
2-status = 2-root.status ? Delivered : Pending

const 3-root = document(order3),
const 3-biscuits: document(biscuits),
const 3-donuts: document(donuts),
const 3-pancakes: document(pancakes),
const 3-status: document(status)


3-biscuits= 3-root.biscuits,
3-donuts = 3-root.donuts,
3-pancakes = 3-root.pancakes,
3-status = 3-root.status ? Delivered : Pending