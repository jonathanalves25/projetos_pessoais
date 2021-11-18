
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

  const dataInputVal = document.querySelector('#validade')
  const dataInputFab = document.querySelector('#fabricacao')
  const dataValForm = moment(dataInputVal.value)
  const dataFabForm = moment(dataInputFab.value)
  const precoFloat = parseFloat(document.querySelector('#preco').value)


  if (isValidFields()) {
    const item = {
      nome: document.querySelector('#nome').value,
      unidade: document.querySelector('#unidade').value,
      quantidade: document.querySelector('#quantidade').value,
      preco: precoFloat.toFixed(2),
      perecivel: document.querySelector('#perecivel').value,
      validade: dataValForm.format('DD/MM/YYYY'),
      fabricacao: dataFabForm.format('DD/MM/YYYY')
    }

    const index = document.getElementById('nome').dataset.index
        if (index == 'new') {
            createItem(item)
            updateTable()
            closeNav()
        } else {
            updateItem(index, item)
            updateTable()
            closeNav()
        }
  }
}

const createRow = (item, index) => {
  const newRow = document.createElement('tr')
  newRow.innerHTML = `
    <td>${item.nome}</td>
    <td>${item.unidade}</td>
    <td>${item.quantidade} ${item.unidade}${item.quantidade > 1 ? 's' :''}</td>
    <td>R$: ${item.preco}</td>
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

const fillFields = (item) => {
  document.querySelector('#nome').value = item.nome
  document.querySelector('#unidade').value = item.unidade
  document.querySelector('#quantidade').value = item.quantidade
  document.querySelector('#preco').value = item.preco
  document.querySelector('#perecivel').value = item.perecivel
  document.querySelector('#validade').value = item.validade
  document.querySelector('#fabricacao').value = item.fabricacao
  document.querySelector('#nome').dataset.index = item.index
}

const editItem = (index) => {
  const item = readItem()[index]
  item.index = index
  fillFields(item)
  openNav()
}

const editDelete = (event) => {
  if(event.target.type == 'button') {

    const [action, index] = event.target.id.split('-')

    if(action == 'edit') {
      editItem(index)
    } else {
      const item = readItem()[index]
      const response = confirm(`Deseja realmente deletar o item ${item.nome}?`)
      if (response) {
        deleteItem(index)
        clearTable()
        updateTable()
      }

    }
  }
}


updateTable()




// eventos
document.querySelector('#salvar')
  .addEventListener('click', saveItem)

document.querySelector('#cancelar')
  .addEventListener('click', () => {
    closeNav()
  })

document.querySelector('#tableItem>tbody')
  .addEventListener('click', editDelete)


// abertura do sideNav

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}