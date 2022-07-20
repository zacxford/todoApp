const input = document.querySelector("#note");
const btn = document.querySelector("#add");
const ul = document.querySelector("#mylist")

btn.addEventListener("click", ekle)

function ekle(){  
if (input.value == "") {
alert("lütfen bir gorev giriniz");
} else {

const div = document.createElement("div")
const li = document.createElement("li");
const span = document.createElement("span");
const btnsil = document.createElement("button");
li.innerText = input.value;
div.classList = "items";
span.classList ="sille";
btnsil.classList = "sil";
btnsil.setAttribute("type","button");
btnsil.innerText = "Sil";
ul.appendChild(div)
div.appendChild(li);
li.appendChild(span);
span.appendChild(btnsil)

input.value="";

 } 
}

const sillbutton = document.querySelectorAll(".sil")

for (i = 0; i < sillbutton.length; i++) {
	sillbutton[i].addEventListener("click", sill);
 }


function sill() {
    const silinecek = this.parentElement.parentElement.parentElement;
    silinecek.remove(); 	


}