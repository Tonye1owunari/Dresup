const item = document.querySelectorAll('.items-block');
let itemInCartArray = [];
//console.log(item[1].children[0].children[0].textContent,' # ', item[1].children[0].children[2].textContent,' # ', item[0].children[0].src);


const cartIconUpdate = () =>{
    const cartIcon = document.querySelector('#cart-icon');
    cartValue = 0;
    cartIcon.textContent = itemInCartArray.length;
    cartIcon.classList.add('cartIcon');
};


const updateTotal = () =>{
    const total = document.querySelector('#total');
    let mainPrice = 0;
    for(i=0; i < itemInCartArray.length; i++){
        var priceInt = parseFloat( itemInCartArray[i].itemPrice.replace('$','') );
        mainPrice += priceInt;
    }
/*
    let qty = document.querySelectorAll(`input[type='number']`);
    for(i=0; i < qty.length; i++){
        qty[i].addEventListener('change',(event)=>{
            let quantity = event.target;
            mainQuantity += parseFloat(quantity.value);
        });
    }
*/
    total.textContent = `${mainPrice}`;
    if(total.textContent == '0'){
        const checkOutBtn = document.querySelector('.checkout a').style.background='black'; 
    }
};


const removeItem = () =>{
    const removeFromCartBtn = document.querySelectorAll('.remove-btn');
    for(i=0; i < removeFromCartBtn.length; i++){
        removeFromCartBtn[i].addEventListener('click', (event)=>{
            let hitButton = event.target;
            let entireItem = hitButton.parentElement.parentElement.parentElement;
            entireItem.innerHTML = '';
            itemInCartArray.splice(itemInCartArray[i], 1);
            console.log(itemInCartArray);
            cartIconUpdate();
            updateTotal();
        });
    }
};


const displayAddedItem = (itemInCartArray) =>{
    let image, amount, desc;
    for(i=0; i < itemInCartArray.length; i++){
        image = itemInCartArray[i].itemImageSrc;
        amount = itemInCartArray[i].itemPrice;
        desc = itemInCartArray[i].itemDescription; 
    }
    //console.log(image, amount, desc);
    const table = document.querySelector('table');
    //console.log(table);
    const tBody = table.createTBody();
    tBody.innerHTML = `<th>ITEM</th> <th>PRICE</th> <th>QTY</th>`;
    tBody.innerHTML += `<tr>
                          <td>
                          <img class="item-img" src="${image}"> <span>${desc}</span>
                          </td>
                          <td>${amount}</td>
                          <td><input type="number" min=1 value='1'> <button class="remove-btn">remove</button></td> 
                        </tr>`;                   
};



const putItemInCart = (cartContain) =>{
    itemInCartArray.push(cartContain);
    displayAddedItem(itemInCartArray);
    console.log(itemInCartArray); 
};


const getItem = () =>{
    const addToCartBtn = document.querySelectorAll('.purchaseBtn');
    for(i=0; i < addToCartBtn.length; i++){
        addToCartBtn[i].addEventListener('click', (event)=>{
            var cartContain = {};
            let hitButton = event.target;
            let imageAndPrice = hitButton.parentElement.parentElement.children;
            //console.log(imageAndPrice);
            let imageSrc = imageAndPrice[0].children[0].src;
            cartContain.itemImageSrc = imageSrc;

            let price = imageAndPrice[1].children[0].children[2].textContent;
            cartContain.itemPrice = price;

            let description = imageAndPrice[1].children[0].children[0].textContent;
            cartContain.itemDescription = description; 

            putItemInCart(cartContain);
            removeItem();
            cartIconUpdate(); 
            updateTotal();
            const checkOutBtn = document.querySelector('.checkout a').style.background='green';  
        });
    }
};



const proceedToCheckOut = () =>{
    const checkOutBtn = document.querySelector('.checkout a');
    checkOutBtn.addEventListener('click', ()=>{
        alert('Thanks for your purchase!');
    });
};












const startApp = () =>{
    proceedToCheckOut();
    getItem();
};
startApp();
