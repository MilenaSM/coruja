/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// let lastInserted = document.getElementById("#last-inserted");
// lastInserted = "Ordenar por último inserido"

// let firstInserted = document.getElementById("#first-inserted");
// firstInserted = "Ordenar por primeiro inserido"

const selectElement = document.getElementsByClassName(".lista")
const buttton = document.getElementById("#button")

console.log(selectElement)

selectElement.addEventListener('change', updateValue)

function updateValue(event1) {
    buttton.textContent = event1.target.value
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    // console.log(typeof dropdowns)

    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }



  // if (event.target.matches(".dropbtn")) {

    // comparar variavel com o conteudo do botão
  //   if(event)
  //   document.getElementById("#last-inserted").addEventListener("click", function(event) {
  //     alert(event.target)
  //   });
  // } else if(event.target.matches(".dropbtn")) {
  //   document.getElementById("#first-inserted").addEventListener("click", function(event) {
  //     alert(event.target)
  //   });
  // }

};


// let changeName = document.getElementById("#button-value")

// changeName = ""



// let lastInserted = document.getElementById("#last-inserted");
// lastInserted = "Ordenar por último inserido"

// let firstInserted = document.getElementById("#first-inserted");
// firstInserted = "Ordenar por primeiro inserido"

// console.log(firstInserted)
// console.log(lastInserted)

// window.onclick = function(event1) {
//   if(!event1.target.matches(".dropbtn")) {
//   } 
// }


// function myFunction() {
//   var c = document.getElementById("button-value")[0];
//   var x = c.childNodes[0].nodeValue;  
//   document.getElementById("demo").innerHTML = x;
// }

// function changeNameDropButton() {
//   if(document.getElementById("#button-value").value == "Ordenar por último inserido") {
//     document.getElementById("#button-value").value == "Ordenar por primeiro inserido"
//   }
// }