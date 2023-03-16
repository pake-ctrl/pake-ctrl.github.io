const array1 = ["tachanka", "kapkan", "bandit", "yeger", "ruk", "dok", "mut", "smouk", "kastl", "puls", "frosya", "valkiriya", "kavejra", "eho", "mira", "lesion", "ela", "vidzhil", "alibi", "maestro", "oriks", "tanderbord", "klesh", "kaid", "mozi", "varden", "gojo", "vamaj", "melyusi", "aruni", "torn", "azami", "solis"];
const array2 = ["termit", "asha", "glaz", "f'yuz", "ajk'yu", "blic", "tvich", "montazhnik", "slejdzh", "techer", "bak", "blekbord", "kapitao", "hibana", "dzhakal", "ing", "sofiya", "dokayebi", "finka", "lion", "mavrik", "novmad", "gridlok", "nok", "amaru", "kali", "grim", "sens", "ejs", "nul", "yana", "flores", "osa"];

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const array1Text = document.getElementById("array1");
const array2Text = document.getElementById("array2");
const result = document.getElementById("result");

array1Text.innerHTML = array1.join(", ");
array2Text.innerHTML = array2.join(", ");

button1.addEventListener("click", generateRandomElement.bind(null, array1));
button2.addEventListener("click", generateRandomElement.bind(null, array2));

function generateRandomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  result.innerHTML = array[randomIndex];
}
