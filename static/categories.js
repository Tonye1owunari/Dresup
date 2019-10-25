const categoryBtn = document.querySelectorAll('.categories button');
const commodityArea = document.querySelectorAll('main');
const commodityAreaTitle = document.querySelector('#items-title');


const renderShirts = () =>{
   categoryBtn[0].addEventListener('click', ()=>{
        //console.log('heky');
        commodityAreaTitle.textContent = 'Unisex shirts';
        commodityArea[0].innerHTML = `<div class="items-block">
                                            <div class="food-img">
                                              <img src="/static/shirts/1.jpg">
                                            </div>
                                            <div class="price-and-btn">
                                              <p><span>H&M classic</span><br>
                                                <span>$27.00</span></p>
                                              <button id="one" class="purchaseBtn">add to cart</button>
                                            </div>
                                        </div>
                                        <!------------------------------------------------------------------------------------------------------------>
                                        <div class="items-block">
                                            <div class="food-img">
                                              <img src="/static/shirts/2.jpg">
                                            </div>
                                            <div class="price-and-btn">
                                              <p><span>blue casual</span><br>
                                                <span>$10.00</span></p>
                                              <button id="two" class="purchaseBtn">add to cart</button>
                                            </div>
                                        </div>
                                        <!------------------------------------------------------------------------------------------------------------>
                                        <div class="items-block">
                                            <div class="food-img">
                                                <img src="/static/shirts/3.jpg">
                                            </div>
                                            <div class="price-and-btn">
                                                <p><span>navy rayshirt</span><br>
                                                  <span>$9.00</span></p>
                                                <button id="three" class="purchaseBtn">add to cart</button>
                                            </div>
                                        </div>`;

        commodityArea[1].innerHTML = `<div class="items-block">
                                            <div class="food-img">
                                                <img src="/static/shirts/4.jpg">
                                            </div>
                                            <div class="price-and-btn">
                                                <p><span>H&M classic</span><br>
                                                <span>$27.00</span></p>
                                                <button id="one" class="purchaseBtn">add to cart</button>
                                            </div>
                                        </div>
                                        <!------------------------------------------------------------------------------------------------------------>
                                        <div class="items-block">
                                            <div class="food-img">
                                                <img src="/static/shirts/5.jpg">
                                            </div>
                                            <div class="price-and-btn">
                                                <p><span>blue casual</span><br>
                                                <span>$10.00</span></p>
                                                <button id="two" class="purchaseBtn">add to cart</button>
                                            </div>
                                        </div>
                                        <!------------------------------------------------------------------------------------------------------------>
                                        <div class="items-block">
                                            <div class="food-img">
                                                <img src="/static/shirts/6.jpg">
                                            </div>
                                            <div class="price-and-btn">
                                                <p><span>navy rayshirt</span><br>
                                                    <span>$9.00</span></p>
                                                <button id="three" class="purchaseBtn">add to cart</button>
                                            </div>
                                        </div>`;                           
   });
};


const renderGowns = () =>{
    categoryBtn[1].addEventListener('click', ()=>{
         //console.log('heky');
         commodityAreaTitle.textContent = `Top designers Gown`;
         commodityArea[0].innerHTML = `<div class="items-block">
                                             <div class="food-img">
                                               <img src="/static/gowns/1.jpg">
                                             </div>
                                             <div class="price-and-btn">
                                               <p><span>H&M classic</span><br>
                                                 <span>$27.00</span></p>
                                               <button id="one" class="purchaseBtn">add to cart</button>
                                             </div>
                                         </div>
                                         <!------------------------------------------------------------------------------------------------------------>
                                         <div class="items-block">
                                             <div class="food-img">
                                               <img src="/static/gowns/2.jpg">
                                             </div>
                                             <div class="price-and-btn">
                                               <p><span>blue casual</span><br>
                                                 <span>$10.00</span></p>
                                               <button id="two" class="purchaseBtn">add to cart</button>
                                             </div>
                                         </div>
                                         <!------------------------------------------------------------------------------------------------------------>
                                         <div class="items-block">
                                             <div class="food-img">
                                                 <img src="/static/gowns/3.jpg">
                                             </div>
                                             <div class="price-and-btn">
                                                 <p><span>navy rayshirt</span><br>
                                                   <span>$9.00</span></p>
                                                 <button id="three" class="purchaseBtn">add to cart</button>
                                             </div>
                                         </div>`;
 
         commodityArea[1].innerHTML = `<div class="items-block">
                                             <div class="food-img">
                                                 <img src="/static/gowns/4.jpg">
                                             </div>
                                             <div class="price-and-btn">
                                                 <p><span>H&M classic</span><br>
                                                 <span>$27.00</span></p>
                                                 <button id="one" class="purchaseBtn">add to cart</button>
                                             </div>
                                         </div>
                                         <!------------------------------------------------------------------------------------------------------------>
                                         <div class="items-block">
                                             <div class="food-img">
                                                 <img src="/static/gowns/5.jpg">
                                             </div>
                                             <div class="price-and-btn">
                                                 <p><span>blue casual</span><br>
                                                 <span>$10.00</span></p>
                                                 <button id="two" class="purchaseBtn">add to cart</button>
                                             </div>
                                         </div>
                                         <!------------------------------------------------------------------------------------------------------------>
                                         <div class="items-block">
                                             <div class="food-img">
                                                 <img src="/static/gowns/6.jpg">
                                             </div>
                                             <div class="price-and-btn">
                                                 <p><span>navy rayshirt</span><br>
                                                     <span>$9.00</span></p>
                                                 <button id="three" class="purchaseBtn">add to cart</button>
                                             </div>
                                         </div>`;                           
    });
 };


 const renderTrousers = () =>{
    categoryBtn[2].addEventListener('click', ()=>{
         //console.log('heky');
         commodityAreaTitle.textContent = `Trousers for all!`;
         commodityArea[0].innerHTML = `<div class="items-block">
                                             <div class="food-img">
                                               <img src="/static/trousers/1.jpg">
                                             </div>
                                             <div class="price-and-btn">
                                               <p><span>H&M classic</span><br>
                                                 <span>$27.00</span></p>
                                               <button id="one" class="purchaseBtn">add to cart</button>
                                             </div>
                                         </div>
                                         <!------------------------------------------------------------------------------------------------------------>
                                         <div class="items-block">
                                             <div class="food-img">
                                               <img src="/static/trousers/2.jpg">
                                             </div>
                                             <div class="price-and-btn">
                                               <p><span>blue casual</span><br>
                                                 <span>$10.00</span></p>
                                               <button id="two" class="purchaseBtn">add to cart</button>
                                             </div>
                                         </div>
                                         <!------------------------------------------------------------------------------------------------------------>
                                         <div class="items-block">
                                             <div class="food-img">
                                                 <img src="/static/trousers/3.jpg">
                                             </div>
                                             <div class="price-and-btn">
                                                 <p><span>navy rayshirt</span><br>
                                                   <span>$9.00</span></p>
                                                 <button id="three" class="purchaseBtn">add to cart</button>
                                             </div>
                                         </div>`;
 
         commodityArea[1].innerHTML = `<div class="items-block">
                                             <div class="food-img">
                                                 <img src="/static/trousers/4.jpg">
                                             </div>
                                             <div class="price-and-btn">
                                                 <p><span>H&M classic</span><br>
                                                 <span>$27.00</span></p>
                                                 <button id="one" class="purchaseBtn">add to cart</button>
                                             </div>
                                         </div>
                                         <!------------------------------------------------------------------------------------------------------------>
                                         <div class="items-block">
                                             <div class="food-img">
                                                 <img src="/static/trousers/5.jpg">
                                             </div>
                                             <div class="price-and-btn">
                                                 <p><span>blue casual</span><br>
                                                 <span>$10.00</span></p>
                                                 <button id="two" class="purchaseBtn">add to cart</button>
                                             </div>
                                         </div>
                                         <!------------------------------------------------------------------------------------------------------------>
                                         <div class="items-block">
                                             <div class="food-img">
                                                 <img src="/static/trousers/6.jpg">
                                             </div>
                                             <div class="price-and-btn">
                                                 <p><span>navy rayshirt</span><br>
                                                     <span>$9.00</span></p>
                                                 <button id="three" class="purchaseBtn">add to cart</button>
                                             </div>
                                         </div>`;                           
    });
 };


 const renderShoes = () =>{
    categoryBtn[3].addEventListener('click', ()=>{
         //console.log('heky');
         commodityAreaTitle.textContent = `Cool footwears`;
         commodityArea[0].innerHTML = `<div class="items-block">
                                             <div class="food-img">
                                               <img src="/static/shoes/1.jpeg">
                                             </div>
                                             <div class="price-and-btn">
                                               <p><span>H&M classic</span><br>
                                                 <span>$27.00</span></p>
                                               <button id="one" class="purchaseBtn">add to cart</button>
                                             </div>
                                         </div>
                                         <!------------------------------------------------------------------------------------------------------------>
                                         <div class="items-block">
                                             <div class="food-img">
                                               <img src="/static/shoes/2.jpg">
                                             </div>
                                             <div class="price-and-btn">
                                               <p><span>blue casual</span><br>
                                                 <span>$10.00</span></p>
                                               <button id="two" class="purchaseBtn">add to cart</button>
                                             </div>
                                         </div>
                                         <!------------------------------------------------------------------------------------------------------------>
                                         <div class="items-block">
                                             <div class="food-img">
                                                 <img src="/static/shoes/3.jpg">
                                             </div>
                                             <div class="price-and-btn">
                                                 <p><span>navy rayshirt</span><br>
                                                   <span>$9.00</span></p>
                                                 <button id="three" class="purchaseBtn">add to cart</button>
                                             </div>
                                         </div>`;
 
         commodityArea[1].innerHTML = `<div class="items-block">
                                             <div class="food-img">
                                                 <img src="/static/shoes/4.jpg">
                                             </div>
                                             <div class="price-and-btn">
                                                 <p><span>H&M classic</span><br>
                                                 <span>$27.00</span></p>
                                                 <button id="one" class="purchaseBtn">add to cart</button>
                                             </div>
                                         </div>
                                         <!------------------------------------------------------------------------------------------------------------>
                                         <div class="items-block">
                                             <div class="food-img">
                                                 <img src="/static/shoes/5.jpg">
                                             </div>
                                             <div class="price-and-btn">
                                                 <p><span>blue casual</span><br>
                                                 <span>$10.00</span></p>
                                                 <button id="two" class="purchaseBtn">add to cart</button>
                                             </div>
                                         </div>
                                         <!------------------------------------------------------------------------------------------------------------>
                                         <div class="items-block">
                                             <div class="food-img">
                                                 <img src="/static/shoes/6.jpg">
                                             </div>
                                             <div class="price-and-btn">
                                                 <p><span>navy rayshirt</span><br>
                                                     <span>$9.00</span></p>
                                                 <button id="three" class="purchaseBtn">add to cart</button>
                                             </div>
                                         </div>`;                           
    });
 };


 const renderAccessories = () =>{
    categoryBtn[4].addEventListener('click', ()=>{
         //console.log('heky');
         commodityAreaTitle.textContent = `Watches, glasses and much more!`;
         commodityArea[0].innerHTML = `<div class="items-block">
                                             <div class="food-img">
                                               <img src="/static/accessory/1.jpg">
                                             </div>
                                             <div class="price-and-btn">
                                               <p><span>H&M classic</span><br>
                                                 <span>$27.00</span></p>
                                               <button id="one" class="purchaseBtn">add to cart</button>
                                             </div>
                                         </div>
                                         <!------------------------------------------------------------------------------------------------------------>
                                         <div class="items-block">
                                             <div class="food-img">
                                               <img src="/static/accessory/2.jpg">
                                             </div>
                                             <div class="price-and-btn">
                                               <p><span>blue casual</span><br>
                                                 <span>$10.00</span></p>
                                               <button id="two" class="purchaseBtn">add to cart</button>
                                             </div>
                                         </div>
                                         <!------------------------------------------------------------------------------------------------------------>
                                         <div class="items-block">
                                             <div class="food-img">
                                                 <img src="/static/accessory/3.jpg">
                                             </div>
                                             <div class="price-and-btn">
                                                 <p><span>navy rayshirt</span><br>
                                                   <span>$9.00</span></p>
                                                 <button id="three" class="purchaseBtn">add to cart</button>
                                             </div>
                                         </div>`;
 
         commodityArea[1].innerHTML = `<div class="items-block">
                                             <div class="food-img">
                                                 <img src="/static/accessory/4.jpg">
                                             </div>
                                             <div class="price-and-btn">
                                                 <p><span>H&M classic</span><br>
                                                 <span>$27.00</span></p>
                                                 <button id="one" class="purchaseBtn">add to cart</button>
                                             </div>
                                         </div>
                                         <!------------------------------------------------------------------------------------------------------------>
                                         <div class="items-block">
                                             <div class="food-img">
                                                 <img src="/static/accessory/5.jpg">
                                             </div>
                                             <div class="price-and-btn">
                                                 <p><span>blue casual</span><br>
                                                 <span>$10.00</span></p>
                                                 <button id="two" class="purchaseBtn">add to cart</button>
                                             </div>
                                         </div>
                                         <!------------------------------------------------------------------------------------------------------------>
                                         <div class="items-block">
                                             <div class="food-img">
                                                 <img src="/static/accessory/6.jpg">
                                             </div>
                                             <div class="price-and-btn">
                                                 <p><span>navy rayshirt</span><br>
                                                     <span>$9.00</span></p>
                                                 <button id="three" class="purchaseBtn">add to cart</button>
                                             </div>
                                         </div>`;                           
    });
 };


 const renderBags = () =>{
    categoryBtn[5].addEventListener('click', ()=>{
         //console.log('heky');
         commodityAreaTitle.textContent = `Oops!`;
         commodityArea[0].innerHTML = `<div class="items-block">
                                            <h1 style='color:red;'>Sorry no</h1>
                                            <h1 style='color:red;'>items yet!</h1>
                                        </div>
                                        <!------------------------------------------------------------------------------------------------------------>
                                        <div class="items-block">
                                            <h1 style='color:red;'>Sorry no</h1>
                                            <h1 style='color:red;'>items yet!</h1>
                                        </div>
                                        <!------------------------------------------------------------------------------------------------------------>
                                        <div class="items-block">
                                            <h1 style='color:red;'>Sorry no</h1>
                                            <h1 style='color:red;'>items yet!</h1>
                                        </div>`;
 
         commodityArea[1].innerHTML = `<div class="items-block">
                                            <h1 style='color:red;'>Sorry no</h1>
                                            <h1 style='color:red;'>items yet!</h1>
                                         </div>
                                         <!------------------------------------------------------------------------------------------------------------>
                                         <div class="items-block">
                                            <h1 style='color:red;'>Sorry no</h1>
                                            <h1 style='color:red;'>items yet!</h1>
                                         </div>
                                         <!------------------------------------------------------------------------------------------------------------>
                                         <div class="items-block">
                                            <h1 style='color:red;'>Sorry no</h1>
                                            <h1 style='color:red;'>items yet!</h1>
                                         </div>`;                           
    });
 };


const renderCultureFits = () =>{
    categoryBtn[6].addEventListener('click', ()=>{
        //console.log('heky');
        commodityAreaTitle.textContent = `Oops!`;
        commodityArea[0].innerHTML = `<div class="items-block">
                                        <h1 style='color:black;'>Sorry no</h1>
                                        <h1 style='color:red;'>items yet!</h1>
                                    </div>
                                    <!------------------------------------------------------------------------------------------------------------>
                                    <div class="items-block">
                                        <h1 style='color:black;'>Sorry no</h1>
                                        <h1 style='color:red;'>items yet!</h1>
                                    </div>
                                    <!------------------------------------------------------------------------------------------------------------>
                                    <div class="items-block">
                                        <h1 style='color:black;'>Sorry no</h1>
                                        <h1 style='color:red;'>items yet!</h1>
                                    </div>`;

        commodityArea[1].innerHTML = ` <div class="items-block">
                                            <h1 style='color:black;'>Sorry no</h1>
                                            <h1 style='color:red;'>items yet!</h1>
                                        </div>
                                            <!------------------------------------------------------------------------------------------------------------>
                                        <div class="items-block">
                                            <h1 style='color:black;'>Sorry no</h1>
                                            <h1 style='color:red;'>items yet!</h1>
                                        </div>
                                            <!------------------------------------------------------------------------------------------------------------>
                                        <div class="items-block">
                                            <h1 style='color:black;'>Sorry no</h1>
                                            <h1 style='color:red;'>items yet!</h1>
                                        </div>`;       
});
};


const renderShorts = () =>{
    categoryBtn[7].addEventListener('click', ()=>{
         //console.log('heky');
         commodityAreaTitle.textContent = `Oops!`;
         commodityArea[0].innerHTML = `<div class="items-block">
                                            <h1 style='color:black;'>Sorry no</h1>
                                            <h1 style='color:black;'>items yet!</h1>
                                        </div>
                                        <!------------------------------------------------------------------------------------------------------------>
                                        <div class="items-block">
                                            <h1 style='color:black;'>Sorry no</h1>
                                            <h1 style='color:black;'>items yet!</h1>
                                        </div>
                                        <!------------------------------------------------------------------------------------------------------------>
                                        <div class="items-block">
                                            <h1 style='color:black;'>Sorry no</h1>
                                            <h1 style='color:black;'>items yet!</h1>
                                        </div>`;
 
         commodityArea[1].innerHTML = `<div class="items-block">
                                            <h1 style='color:black;'>Sorry no</h1>
                                            <h1 style='color:black;'>items yet!</h1>
                                         </div>
                                         <!------------------------------------------------------------------------------------------------------------>
                                         <div class="items-block">
                                            <h1 style='color:black;'>Sorry no</h1>
                                            <h1 style='color:black;'>items yet!</h1>
                                         </div>
                                         <!------------------------------------------------------------------------------------------------------------>
                                         <div class="items-block">
                                            <h1 style='color:black;'>Sorry no</h1>
                                            <h1 style='color:black;'>items yet!</h1>
                                         </div>`;       
    });
};




const renderCategory = () =>{
    renderShirts();
    renderGowns();
    renderTrousers();
    renderShoes();
    renderAccessories();
    renderBags();
    renderCultureFits();
    renderShorts();
};

renderCategory();






