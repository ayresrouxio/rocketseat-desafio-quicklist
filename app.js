const form = document.querySelector("form")
const input = document.querySelector("input")
const items = document.querySelector(".list-items li")

form.addEventListener("submit", (event) => {
  event.preventDefault()

  const itemToAdd = input.value
  input.value = ""

  addItem(itemToAdd)
})

function addItem(item) {
  const list = document.querySelector(".list-items")

  const newItem = document.createElement("li")
  newItem.innerHTML = `${item} <button>remover</button>`

  list.append(newItem)
}
