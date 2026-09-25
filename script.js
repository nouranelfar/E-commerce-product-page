//---------------- Handle next and previous image ------------------

const productImages = [
    "./assets/images/image-product-1.jpg",
    "./assets/images/image-product-2.jpg",
    "./assets/images/image-product-3.jpg",
    "./assets/images/image-product-4.jpg"
];
const product = document.querySelector(".product");
const previous = document.querySelectorAll(".previous");
const next = document.querySelectorAll(".next");
const lightboxImg = document.getElementsByClassName("lightboxImg")[0];
let number = 0;

function showCurrentImage(){
        lightboxImg.src = productImages[number];
        
        product.src = productImages[number];
}

showCurrentImage();


function displayClickedImage(){
    
    showCurrentImage();

    images.forEach((img)=>{
        img.classList.remove("activeImg");
    })

    images2.forEach((img)=>{
        img.classList.remove("activeImg");
    })

    images[number].classList.add("activeImg");
    images2[number].classList.add("activeImg");

    imgOverlay.style.left = `${images[number].offsetLeft}px`;
    imgOverlay2.style.left = `${images[number].offsetLeft}px`;
}

next.forEach((next)=>{
    next.addEventListener("click", ()=>{
        if(number >= productImages.length -1){
            return;
        }else{
            number++;
            displayClickedImage();
        }
    });
})

previous.forEach((prev)=>{
    prev.addEventListener("click", ()=>{
        if(number <= 0){
            return;
        }
        else{
            number--;
            displayClickedImage();
        }
    })
})


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

overlay.addEventListener("click",
    ()=>{
        if(window.innerWidth < 960){
        navigation.style.display = "none";
        overlay.style.display = "none";
    }
}
)

//----------------Handle choosing small images------------------


const smallPictures = document.querySelector(".smallPictures");
const lightboxSmallImages = document.querySelector(".lightboxSmallImages");
const images = document.querySelectorAll(".smallImg");
const images2 = document.querySelectorAll(".lightboxSmallImg");
const imgOverlay = document.getElementsByClassName("imgOverlay")[0];
const imgOverlay2 = document.getElementsByClassName("imgOverlay2")[0];

function HandleChoosingSmallImages(e){
    const image = e.target.dataset.value;
    if(typeof(image) != "undefined"){
        
        product.setAttribute("src" , `./assets/images/image-product-${image}.jpg`);
        lightboxImg.setAttribute("src" , `./assets/images/image-product-${image}.jpg`);

        number = image-1;

        images.forEach((img)=>{
            img.classList.remove("activeImg");
        })

        images[number].classList.add("activeImg");

        images2.forEach((img)=>{
            img.classList.remove("activeImg");
        })

        images2[number].classList.add("activeImg");

        imgOverlay.style.left = `${e.target.offsetLeft}px`;  //بتجيب المسافة بين الحافة الشمال للعنصر وبين الحافة الشمال للـ parent بتاعه.
        imgOverlay2.style.left = `${e.target.offsetLeft}px`;
    }
}

smallPictures.addEventListener("click",(e)=>{
    HandleChoosingSmallImages(e);
})

lightboxSmallImages.addEventListener("click",(e)=>{
    HandleChoosingSmallImages(e);
})


//------------------handle opening cart------------------------


const cartBtn = document.getElementsByClassName("cartBtn")[0];
const cartContainer = document.getElementById("cartContainer");

cartBtn.addEventListener("click",()=>{
    cartContainer.classList.toggle("show");
});


//------------------add to cart--------------------


const addToCart = document.getElementsByClassName("add_to_cart")[0];
const orderDetailsContainer = document.getElementsByClassName("orderDetailsContainer")[0];
const message = document.getElementsByClassName("emptyMessage")[0];
const numOfAmount = document.getElementsByClassName("num_of_amount")[0];
const total = document.getElementsByClassName("total")[0];
const deleteBtn = document.getElementsByClassName("delete")[0];
const itemsNum = document.getElementsByClassName("itemsNum")[0];

addToCart.addEventListener("click",()=>{
    if(Number(amount.textContent) > 0){
        message.style.display = "none";
        orderDetailsContainer.style.display = "flex";
        numOfAmount.textContent = amount.textContent;
        total.textContent = "$"+ (125 * Number(amount.textContent)).toFixed(2);
        itemsNum.style.display = "flex";
        itemsNum.textContent = amount.textContent;
    }
})

deleteBtn.addEventListener("click" , ()=>{
    message.style.display = "flex";
    orderDetailsContainer.style.display = "none";
    amount.textContent = 0;
    itemsNum.style.display = "none";
    itemsNum.textContent = "";
})


//---------------------- Display Light box---------------------------


const lightboxContainer = document.getElementsByClassName("lightboxContainer")[0];

product.addEventListener("click",()=>{
    overlay.style.display = "flex";
    lightboxContainer.style.display = "flex";
})

//---------------------- Close Light box--------------------------


const closeLightBox = document.getElementsByClassName("closeLightBox")[0];

closeLightBox.addEventListener("click",()=>{
    overlay.style.display = "none";
    lightboxContainer.style.display = "none";
})