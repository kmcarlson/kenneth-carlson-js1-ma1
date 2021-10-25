const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

// Question 1

const cat = {
    name: "Henrik",
    age: 27,
    complain: function() {
        console.log("Meow!")
    }
}

// Question 2

const heading = 
    document.querySelector("h3");
    heading.innerHTML = "Updated heading";
    // Question 3
    heading.style = "font-size: 2em;";
    // Question 4
    heading.classList.add("subheading")

    // Question 5:
 const paragraphs = document.getElementsByTagName("p");
 for (let p of paragraphs) { 
     p.style = "color: red;";     
 };  

    // Question 6:
    const results = document.getElementsByClassName("results")[0];
    const p = document.createElement("p");
    p.innerHTML = "New paragraph";
    p.style.background = "yellow";
    results.appendChild(p)
    

 


 



