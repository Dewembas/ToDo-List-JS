let addB = document.getElementById("add");
let inn = document.getElementById("in");
let outt = document.getElementById("out");
let arr = [];
let closee = document.getElementById("closee")

if(localStorage.getItem("todo")){
    arr = JSON.parse(localStorage.getItem("todo"))
    display()
}


addB.addEventListener("click", function (){
    if(!inn.value) return;
    let nToDo = {
        todo: inn.value,
        checked: false,
        importand: false,
        closep: false
    }

    arr.push(nToDo);
    display();
    localStorage.setItem("todo", JSON.stringify(arr))
inn.value="";
})
function display (){
    let displayMasage = "";
    if(arr.length === 0) out.innerHTML = "";
  arr.forEach(function(item, i){
     displayMasage += `
      <li>
      <input type= "checkbox"  id= "item_${i}" ${item.checked ? "checked" : ""}>
      <label for= "item_${i}" class="${item.importand ? "importand" : ""}">${item.todo}</label>
      <span class="closee" onclick="deletee(${i})">X</span>
     <hr></hr>
      </li>
      `;
      out.innerHTML = displayMasage
     
  })

  
};


out.addEventListener("change", function(event){
    let idInput = event.target.getAttribute("id");
    let  forLable = out.querySelector("[for="+idInput+"]");
    let valueLable = forLable.innerHTML;
    
    arr.forEach(function (item){
        if(item.todo === valueLable){
            item.checked = !item.checked;
            localStorage.setItem("todo", JSON.stringify(arr))
            forLable && item.checked ? forLable.style.textDecoration = 'line-through' : forLable.style.textDecoration = 'none'
        }
    })
    
})







function deletee(i){
       arr.splice(i,1);
       display();
       localStorage.setItem("todo", JSON.stringify(arr))
                }
    
    function edit(i){
       document.write()
    }