const form = document.querySelector("form")
const input = document.querySelector("input")
const list = document.querySelector(".list-items")

form.addEventListener("submit", (event) => {
  event.preventDefault()

  const itemToAdd = input.value
  input.value = ""

  addItem(itemToAdd)
})

function addItem(item) {
  const newItem = createItemElement(item)
  list.append(newItem)
}

function createItemElement(label) {
  const newItem = document.createElement("li")
  newItem.innerHTML = `${label}`

  newItem.addEventListener("click", (event) => {
    toggleCheckItem(event.target)
  })

  const newItemRemoveButton = document.createElement("button")
  newItemRemoveButton.textContent = "remover"

  newItemRemoveButton.addEventListener("click", (event) => {
    handleRemoveItem(event.target.parentNode)
  })

  newItem.append(newItemRemoveButton)

  return newItem
}

function toggleCheckItem(elementToCheck) {
  elementToCheck.classList.toggle("checked")
}

function handleRemoveItem(elementToRemove) {
  elementToRemove.remove()
}
