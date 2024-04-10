header_footer();//Calls the function

// Gets the code from header and foother html
function header_footer()
{
    $("header").load("header.html");
    $("footer").load("footer.html");
}

// Method for hamburger menu
function toggleMenu(){
   // console.log("working");
    document.querySelector("div.hidden_menu").classList.toggle("show_class");
}

// Code for product details page for showing different view of the shoe product images
let var1 = document.querySelectorAll(".contact_topic")[0];
let var2 = document.querySelectorAll(".contact_topic")[1];
let var3 = document.querySelectorAll(".contact_topic")[2];


//Grabs the images
let picture = document.querySelectorAll(".preview_angles>img");
picture.forEach(pic => {
    pic.addEventListener("click",function(){
        let mnimg = document.querySelector(".shoe_assests>img");
        // shows the image
        mnimg.setAttribute("src",pic.getAttribute("src"));
    });
}); 