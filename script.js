const items = [{
    id:1,
    name: "Pancakes",
    category: 'Breakfast',
    price: 12.99
},{
    id:2,
    name: 'Eggs',
    category: 'Breakfast',
    price: 10.50 
},{
    id:3,
    name: 'Soup',
    category: 'Lunch',
    price: 17
},{
    id:4,
    name: 'Chicken Wings',
    category: 'Dinner',
    price: 22.99
}]
const cont = document.querySelector('.container');
const buttons = document.querySelectorAll('.filter')


buttons.forEach(btn =>{
    btn.addEventListener('click', (e)=>{
       const category =  e.currentTarget.dataset.id;
       
      
    let filterItems = items.filter(x =>{
      
        if(x.category === category){
            return x
        };
        
    })
    if(category === 'all'){
        return allItems(items)
    }else{allItems(filterItems)}
    })
    
})



window.addEventListener("DOMContentLoaded",()=>{
allItems(items)
})



function allItems(menu){
let displayMenu = menu.map((item) => {
return `<div class="myItem">
        <h3>${item.name}</h3>
        <p>${item.category}</p>
        <span>$${item.price}</span>
        </div>`
        })
        displayMenu = displayMenu.join('')
       
        cont.innerHTML = displayMenu
    }
