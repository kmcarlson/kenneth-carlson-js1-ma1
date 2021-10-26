const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

// Question 1

const cat = {
  name: "Henrik",
  age: 27,
  complain: function () {
    console.log("Meow!");
  },
};

// Question 2

const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";
// Question 3
heading.style = "font-size: 2em;";
// Question 4
heading.classList.add("subheading");

// Question 5
const paragraphs = document.getElementsByTagName("p");
for (let p of paragraphs) {
  p.style = "color: red;";
}

// Question 6
const results = document.getElementsByClassName("results")[0];
const p = document.createElement("p");
p.innerHTML = "New paragraph";
p.style.background = "yellow";
results.appendChild(p);

// Question 7

function getNames(list) {
    list.forEach(cat => {
        console.log(cat.name)
    });
}

getNames(cats)


// Question 8

function createCats(cats) {
    cats.forEach(cat =>{
       const wrapper = document.createElement("div");
       const name = document.createElement("h5");
       const age = document.createElement("p");
       
       name.innerHTML = cat.name;
       if(cat.hasOwnProperty("age")) {
           age.innerHTML = cat.age
       }
       else{
           age.innerHTML = "Age unknown"
       }
       
       wrapper.appendChild(name);
       wrapper.appendChild(age);
    
       

    }) 
}
