let CPU = [
    "AMD",
    "Intel",
    "Nvidia",
    "Qualcomm",
    "Mediatek",
    "Bionic",
    "Acer inc.",

];

function readCPU(CPU){
   document.querySelector("#CPU").innerHTML = "";

   CPU.forEach((CPU,position) => {
   document.querySelector("#CPU").innerHTML +=`
    <li>
    ${CPU} 
    <div class="content">
    <div  class="buttons">
    <button  class="btn btn-outline-success" onclick="updateCPU(${position})">UPDATE</button>
    <button  class="btn btn-outline-danger" onclick="deleteCPU(${position})">DELETE</button>
    </div>
    </div>
   
    
    </li>
   `;
   });
}

readCPU(CPU);

function createCPU(){
    let newCPU = document.querySelector("#add").value;
    try{
        if(newCPU =="") throw "Please enter a CPU name..."
        CPU.forEach(individual =>{
            if(individual == newCPU)throw "That CPU name already exists..."
        })
        console.log(CPU);


        CPU.push(newCPU);
        readCPU(CPU);
    } catch(err){
        alert(err)
    }

}

function deleteCPU(position){
    CPU.splice(position, 1)
    readCPU(CPU);
}

function updateCPU(position){
    let CPUs = prompt("Update me...");
    console.log(CPUs);
    CPU[position]= CPUs;
    readCPU(CPU);
}