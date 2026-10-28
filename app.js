

/////////////////////////////////////////
//bom => browser object model
/////////////////////////////////////////
//console.log(navigator.onLine);

//alert("warning one!!!");

//used for confirm action(return type bool)
//const ok = confirm("Delete Item?");

//console.log(ok);


//function delet() {
//    if(ok)
//    {
//       console.log("deleted");
//    }
//   else{
//      console.log("no");
// }
//}

//delet();


//const email = prompt("Enter Email");
//console.log(email);


//////////////////////////////////////////////////
///////DOM
//////////////////////////////////////////////////
//console.log(document.body.children); ////element
//console.log(document.body.childNodes);  ///node

//selectors



//1-query selectors like css selector

//let title = document.querySelector("h2") //select one element
//let title = document.querySelectorAll("h2") 

//let btn = document.querySelector("#cart-btn")

/*
let btn = document.getElementById("cart-btn")
let title = document.getElementsByClassName("product-title");z
let h2 = document.getElementsByTagName("h2");
console.log(btn);
*/

//let title =document.querySelector(".product-title");

//let title =document.getElementsByClassName("product-title");

//console.log(title.textContent);
//console.log(title.innerHTML);
//console.log(title.innerText);

//title.textContent = "<strong>Hello</strong>"
//title.innerHTML = "<strong>Hello</strong>"
//title.innerText = "<strong>Hello</strong>"

//title[0].textContant = "Hello";

////////////////////////////////////////////////////////////////

//when user visit our website, take his name, and say hello with user name
//let username = prompt("Enter your name");

//alert(`welcome, ${username}`);

//let name = document.getElementById("user");
//name.innerText = `welcome, ${username}`;
//name.style.color = "red";

//function sayhello() {
//alert(`welcome, ${username}`);
//}

/*
const products = [
    {id: 1, name: "pc", price:100},
    {id:2, name: "laptop", price: 500},
];


let product = document.getElementsByClassName("product");

for(let product of products) 
{
    const item = document.createElement("div");
    item.innerHTML = `<p><em>${product.id}</em> <strong>${product.name}</strong>..${product.price} EGP </p>}`

    console.log(item);
    product.appendChild(item);
    console.log(product);
}
    */