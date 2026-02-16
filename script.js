function myFunction() {
  var input = document.getElementById("myInput").value;
  var list = document.getElementById("myList");
  var li = document.createElement("li");
  li.textContent = input;
  list.appendChild(li);
}