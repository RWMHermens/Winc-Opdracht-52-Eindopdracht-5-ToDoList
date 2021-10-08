//selectors
const list = document.querySelector(".list");
const button = document.querySelector("button");
const input = document.querySelector(".input");

//functions
const addInputToList = async (e) => {
  e.preventDefault();
  try {
    const todos = await getData();
    todos.forEach((todo) => {
      console.log(todo);
      //Elementen aanmaken en toevoegen (append) aan de lijst
      //newItem
      const newItem = document.createElement("li");
      newItem.classList.add("todolist");
      newItem.contentEditable = "true";
      newItem.innerText = input.value;
      if (input.value === "") {
        return null;
      }
      list.appendChild(newItem);
      //checkbox
      const checkBox = document.createElement("input");
      checkBox.type = "checkbox";
      // checkBox.setAttribute("type", "checkbox");
      checkBox.classList.add("checkbox");
      newItem.appendChild(checkBox);

      checkBox.addEventListener("change", function () {
        newItem.style.textDecoration = checkBox.checked
          ? "line-through"
          : "none";
      });
      //trashbin
      const bin = document.createElement("img");
      bin.src = "trashbin_white.png";
      bin.classList.add("trashbin");
      newItem.appendChild(bin);
      input.value = "";
      return newItem;
    });
  } catch (err) {
    console.log(err);
  }
};

//EventListeners
button.addEventListener("click", addInputToList, postData());
