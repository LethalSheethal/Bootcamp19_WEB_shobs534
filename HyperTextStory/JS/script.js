


img onmouseover="bigImg(this)"

function show_coords(event) {
  document.getElementById("demo").innerHTML = "X= " + event.clientX + "<br>Y= " + event.clientY;
}

onmousedown="show_coords(event)"



