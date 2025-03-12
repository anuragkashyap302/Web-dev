let products = {
    data:[
       {
        productname : "T-Shirt",
        category : "Topwear",
        price:"30",
        image: "./IMAGES/shirt1.png",
       },
       {
        productname: "T-Shirt",
        category: "Topwear",
        price: "419",
        image: "./IMAGES/shirt2.png",
      },
       {
        productname : "joggers",
        category : "joggers",
        price:"40",
        image: "./IMAGES/joggers1.png",
       },
       {
        productname: "joggers",
        category: "joggers",
        price: "129",
        image: "./IMAGES/joggers2.png",
      },
       {
        productname: "Sporty Shoes",
        category: "Shoes",
        price: "99",
        image: "./IMAGES/shoe1.png",
      },
      {
        productname: "Sporty Shoes",
        category: "Shoes",
        price: "1239",
        image: "./IMAGES/shoe2.png",
      },
      {
        productname: "Kurti",
        category: "Topwear",
        price: "969",
        image: "./IMAGES/kurti1.png",
      },
      {
        productname: "Kurti",
        category: "Topwear",
        price: "1209",
        image: "./IMAGES/kurti2.png",
      },
      
      {
        productname: "jeans",
        category: "Bottomwear",
        price: "1249",
        image: "./IMAGES/jeans1.png",
      },
      {
        productname: "jeans",
        category: "Bottomwear",
        price: "439",
        image: "./IMAGES/jeans2.png",
      },
      

    ]
};

for(let i of products.data){
    //creaate a card for item
    let card = document.createElement("div");
    // starting me card hiddeen hona chiey to use property hide
    card.classList.add("card" , i.category , "hide");
    // image ka div ban lo
    let imgcontainer = document.createElement("div");
    imgcontainer.classList.add("image-container")
    let image = document.createElement("img");
    image.setAttribute("src" , i.image);
    imgcontainer.appendChild(image);
    card.appendChild(imgcontainer);
    // details wala container 
    let container = document.createElement("div");
    container.classList.add("container");
    //naem of product
    let name = document.createElement("h4");
    name.classList.add("product-name");
    name.innerText = i.productname.toLocaleUpperCase();
    container.appendChild(name);
    let price = document.createElement("h4");
    price.innerText = "$"+i.price;
    container.appendChild(price);
    card.appendChild(container);
    document.getElementById("products").appendChild(card);

}

//parameteer passsed from button(pramerte same as category)
function filterproduct(value){
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button)=>{
        if(value.toLocaleUpperCase() == button.innerText.toLocaleUpperCase()){
            button.classList.add("active");
        }
        else{
            button.classList.remove("active");
        }
    });
    // slect all cards
    
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
    
}
// seaech button ka fucntion
document.getElementById("search").addEventListener("click" , ()=>{
    let searchinput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");

    elements.forEach((element , index)=>{
        if(element.innerText.includes(searchinput.toLocaleUpperCase())){
            cards[index].classList.remove("hide");
        }
        else{
            cards[index].classList.add("hide");
        }
    });
});
window.onload = () => {
    filterproduct("all");
  };