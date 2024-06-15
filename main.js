// delete task
let remove = document.querySelectorAll("ul li .wrong");
for (let i = 0; i < remove.length; i++) {
  remove[i].addEventListener("click", function () {
    let task = remove[i].parentNode;
    task.remove();
  });
}

// done task
let done = document.querySelectorAll("ul li");
for (let i = 0; i < done.length; i++) {
  done[i].addEventListener("click", () => {
    done[i].classList.toggle("done");
  });
}

// add task
var butt = document.querySelector(".btn");
butt.addEventListener("click", () => {
  var ul = document.querySelector("ul");
  var li = document.createElement("li");
  li.textContent = document.querySelector("input[type = text]").value;
  if (li.textContent === "") {
    alert("You must write something!");
  } else {
    ul.appendChild(li);
  }
  document.querySelector("input[type = text]").value = "";

  var w = document.createElement("span"); // w =>wrong
  var t = document.createElement("span"); // t =>true
  w.className = "wrong";
  w.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  t.className = "true";
  t.innerHTML = `<i class="fa-solid fa-check"></i>`;
  li.appendChild(w);
  li.appendChild(t);

  // delete new task
  w.onclick = function () {
    let task = w.parentNode;
    task.remove();
  };

  // toggle new task
  li.addEventListener("click", () => {
    li.classList.toggle("done");
  });
});
