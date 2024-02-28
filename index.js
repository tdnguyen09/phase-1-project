document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#switch-btn').addEventListener('click', function(){
        let darkMode = document.body;
        darkMode.classList.toggle('dark-mode');
    })
    getItemsInfo()
    document.querySelector('#query-form').addEventListener('submit',handleSubmit)
    function handleSubmit(e){
        e.preventDefault()
        let information = {
            name: e.target.name.value,
            contact:e.target.contact.value,
            enquiry:e.target.enquiry.value
        }
        enquiryForm(information)
    }
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
function enquiryForm(information){
    fetch('http://localhost:3000/enquiry',{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
        body:JSON.stringify(information)
    })
    .then(res =>res.json())
    .then(info => console.log(info))
}
