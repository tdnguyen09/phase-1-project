document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#switch-btn').addEventListener('click', function(){
        let darkMode = document.body;
        darkMode.classList.toggle('dark-mode');
    })
    getItemsInfo()
})
function getItemsInfo(){
    fetch('http://localhost:3000/item')
    .then(res => res.json())
    .then(itemsDatas => itemsDatas.forEach(item => itemSetup(item)));
}
function itemSetup(items){
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
function enquiryForm(informations){
    fetch('http://localhost:3000/enquiry',{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
        body:JSON.stringify(informations)
    })
    .then(res =>res.json())
    .then(info => console.log(info))
}
