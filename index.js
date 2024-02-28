document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#switch-btn').addEventListener('click', function(){
        let darkMode = document.body;
        darkMode.classList.toggle('dark-mode');
    })
})
function getItemsInfo(){
    fetch('http://localhost:3000/items')
    .then(res => res.json())
    .then(itemDatas => itemsDatas.forEach(item => itemSetup(item)));
}
function itemSetup(item){
    let saleItems = document.createElement('li')
    saleItems.className = "saleItems"
    saleItems.innerHTML = `
        <img src="${items.image}" width = "200px" heigh="350px/>
        <div class="content">
            <h4>${items.name}</h4>
            <p>Condition:${items.condition}</p>
            <p>Description:${items.description}</p>
            <p>Price:${items.price}</p>
        </div> 
        `
    document.querySelector('#items-list').append(saleItems)
}

