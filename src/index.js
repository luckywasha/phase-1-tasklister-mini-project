document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector("form").addEventListener("submit",(e) =>{
    e.preventDefault()
    console.log(e)
    const inputValue = document.getElementById("new-task-description").value;
    createNewElement(inputValue)
    console.log(inputValue)

  })

  function createNewElement(toDo){
    let p = document.createElement("p");
    let btn = document.createElement("button");
    btn.textContent = "X"

    p.textContent = `${toDo} `

    p.appendChild(btn)
    console.log(btn)

    document.getElementById("tasks").appendChild(p)
    console.log(document.querySelector("p"))

    btn.addEventListener("click", handleDelete)

    
  }

  function handleDelete(e){
    e.target.parentNode.remove()
  }
  
  // function(){
    
  //   const inputValue = document.getElementById("new-task-description").value;
  //   console.log(inputValue)
  //   inputValue.preventDefault()

  // })
});