

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_item')) ?? []
const setLocalStorage = (dbItem) => localStorage.setItem("db_item", JSON.stringify(dbItem))

// CRUD - create read update delete
const deleteItem = (index) => {
    const dbItem = readItem()
    dbItem.splice(index, 1)
    setLocalStorage(dbItem)
}

const updateItem = (index, item) => {
    const dbItem = readItem()
    dbItem[index] = item
    setLocalStorage(dbItem)
}

const readItem = () => getLocalStorage()

const createItem = (item) => {
    const dbItem = getLocalStorage()
    dbItem.push (item)
    setLocalStorage(dbItem)
}

const isValidFields = () => {
  return document.querySelector('#form').reportValidity()
}

const clearFields = () => {
  const fields = document.querySelectorAll(".form-control")
  fields.forEach(field => field.value = "")
}

// interação com o layout
const saveItem = () => {
  if (isValidFields()) {
    const item = {
      nome: document.querySelector('#nome').value,
      unidade: document.querySelector('#unidade').value,
      quantidade: document.querySelector('#quantidade').value,
      preco: document.querySelector('#preco').value,
      perecivel: document.querySelector('#perecivel').value,
      validade: document.querySelector('#validade').value,
      fabricacao: document.querySelector('#fabricacao').value
    }
    createItem(item)
    clearFields()
    updateTable()
  }
}

const createRow = (item, index) => {
  const newRow = document.createElement('tr')
  newRow.innerHTML = `
    <td>${item.nome}</td>
    <td>${item.unidade}</td>
    <td>${item.quantidade}</td>
    <td>${item.preco}</td>
    <td>${item.perecivel}</td>
    <td>${item.validade}</td>
    <td>${item.fabricacao}</td>
    <td>
      <button type="button" class="btn btn-primary" id="edit-${index}">Editar</button>
      <button type="button" class="btn btn-danger" id="delete-${index}" >Excluir</button>
    </td>
  `

  document.querySelector("#tableItem>tbody").appendChild(newRow)
}

const clearTable = () => {
  const rows = document.querySelectorAll('#tableItem>tbody tr')
  rows.forEach(row => row.parentNode.removeChild(row))
}

const updateTable = () => {
  const dbItem = readItem()
  dbItem.forEach(createRow) 
}


updateTable()




// eventos
document.querySelector('#salvar')
  .addEventListener('click', saveItem)

document.querySelector('#cancelar')
