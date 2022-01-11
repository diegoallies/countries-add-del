let fruit = [
    "Berries",
    "Apple",
    "Watermelon",
    "Orange",
    "Guava",
    "Banana",
    "Coconut",
    "Mango",
    "Lemon",
    "Cherry ",
];

function readFruit(fruit){
   document.querySelector("#fruit").innerHTML = "";

   fruit.forEach((fruit,position) => {
   document.querySelector("#fruit").innerHTML +=`
    <li>
    ${fruit} 
    <div class="content">
    <div  class="buttons">
    <button  class="btn btn-outline-success" onclick="updateFruit(${position})">UPDATE</button>
    <button  class="btn btn-outline-danger" onclick="deleteFruit(${position})">DELETE</button>
    </div>
    </div>
   
    
    </li>
   `;
   });
}

readFruit(fruit);

function createFruit(){
    let newfruit = document.querySelector("#add").value;
    try{
        if(newfruit =="") throw "Please enter a fruit name..."
        fruit.forEach(individual =>{
            if(individual == newfruit)throw "That fruit name already exists..."
        })
        console.log(fruit);


        fruit.push(newfruit);
        readFruit(fruit);
    } catch(err){
        alert(err)
    }

}

function deleteFruit(position){
    fruit.splice(position, 1)
    readFruit(fruit);
}

function updateFruit(position){
    let fruits = prompt("Update me...");
    console.log(fruits);
    fruit[position]= fruits;
    readFruit(fruit);
}