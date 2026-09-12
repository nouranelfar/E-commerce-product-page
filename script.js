//---------------- Handle next and previous image ------------------

const prodactImages = [
    "./assets/images/image-product-1.jpg",
    "./assets/images/image-product-2.jpg",
    "./assets/images/image-product-3.jpg",
    "./assets/images/image-product-4.jpg"
];
const product = document.getElementsByClassName("product")[0];
const previous = document.getElementsByClassName("previous")[0];
const next = document.getElementsByClassName("next")[0];
let number = 0;

function showCurrentImage(){
    product.src = prodactImages[number];
}

showCurrentImage();

function previousImage(){
    if(number <= 0){
        return;
    }

    number--;
    showCurrentImage();
    
}

function nextImage(){
    if(number >= prodactImages.length -1){
        return;
    }

    number++;
    showCurrentImage();
}

next.addEventListener("click", nextImage)

previous.addEventListener("click", previousImage);

document.addEventListener("keydown",(e)=>{
    if(e.key === "ArrowRight"){
        nextImage();
    }

    if(e.key === "ArrowLeft"){
        previousImage();
    }
})


//--------------- determine the amount of products-------------


const amount = document.getElementsByClassName("amount")[0];
const plus = document.getElementsByClassName("plus")[0];
const minus = document.getElementsByClassName("minus")[0];

function minusHandle(){
    if(Number(amount.textContent) > 0){
        amount.textContent = Number(amount.textContent)-1;
    }else{
        return;
    }
}

minus.addEventListener("click",minusHandle);

function plusHandle(){
    amount.textContent = Number(amount.textContent)+1;
}

plus.addEventListener("click",plusHandle)


//------------------- Handle opening the menu --------------------


const closeBtn = document.getElementsByClassName("close")[0];
const menu = document.getElementsByClassName("menu")[0];
const overlay = document.getElementsByClassName("overlay")[0];
const navigation = document.getElementsByClassName("navigation")[0];

closeBtn.addEventListener("click",()=>{
    navigation.style.display = "none";
    overlay.style.display = "none";
})

menu.addEventListener("click",()=>{
    navigation.style.display = "flex";
    overlay.style.display = "flex";
})

overlay.addEventListener("click",()=>{
    navigation.style.display = "none";
    overlay.style.display = "none";
})

//----------------Handle choosing images------------------


const smallPictures = document.querySelector(".smallPictures");
const images = smallPictures.querySelectorAll("img");
const imgOverlay = document.getElementsByClassName("imgOverlay")[0];

smallPictures.addEventListener("click",(e)=>{
    const image = e.target.dataset.value;
    if(typeof(image) != "undefined"){
        product.setAttribute("src" , `assets/images/image-product-${image}.jpg`);

        images.forEach((img)=>{
            img.classList.remove("activeImg");
        })

        e.target.classList.add("activeImg");
        //imgOverlay.style.left = `calc(2em * (${image} - 1) + 5em * (${image} - 1))`;
        imgOverlay.style.left = `${e.target.offsetLeft}px`;     //بتجيب المسافة بين الحافة الشمال للعنصر وبين الحافة الشمال للـ parent بتاعه.
    }
})

//------------------handle opening cart------------------------
const cartBtn = document.getElementsByClassName("cartBtn")[0];
const cartContainer = document.getElementById("cartContainer");
const main = document.getElementsByTagName("main");

cartBtn.addEventListener("click",()=>{
    cartContainer.classList.toggle("show");
});


//------------------add to cart--------------------

const addToCard = document.getElementsByClassName("add_to_card")[0];
const orderDetailsContainer = document.getElementsByClassName("orderDetailsContainer")[0];
const message = document.getElementsByClassName("emptyMessage")[0];
const numOfAmount = document.getElementsByClassName("num_of_amount")[0];
const total = document.getElementsByClassName("total")[0];
const deleteBtn = document.getElementsByClassName("delete")[0];

addToCard.addEventListener("click",()=>{
    if(Number(amount.textContent) > 0){
        message.style.display = "none";
        orderDetailsContainer.style.display = "flex";
        numOfAmount.textContent = amount.textContent;
        total.textContent = "$"+ (125 * Number(amount.textContent)).toFixed(2);
    }
})

deleteBtn.addEventListener("click" , ()=>{
    message.style.display = "flex";
    orderDetailsContainer.style.display = "none";
    amount.textContent = 0;
})


//---------------------- Display Light box---------------------------

const lightBoxImg = document.getElementsByClassName("lightBoxImg")[0];

product.addEventListener("click", ()=>{
    overlay.style.display = "flex";
    lightBoxImg.style.display = "flex";
})
