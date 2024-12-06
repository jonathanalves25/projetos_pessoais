
contato = {}
lista_contatos = []

def criarContato(nome, telefone, email, favorito):
    contato = dict(nome = nome, telefone = telefone, email = email, favorito = favorito)
    lista_contatos.append(contato)

    print(f'o contato {nome} foi criado com sucesso. \n')
    return lista_contatos

def visualizarContatos():
    print(f'Lista de contatos:\n')
    for i, contato in enumerate(lista_contatos):
        if contato["favorito"] == 'S':
            favorito = '✓'
        else:
            favorito = ''

        print(f'{i+1}. Nome: {contato["nome"]} - Email: {contato["email"]} - Favorito: [{favorito}].')


def editarContato(indice, lista_contatos, novo_nome):
    indice_contato = indice - 1
    for i, contato in enumerate(lista_contatos):
        if i == indice_contato:
            contato["nome"] = novo_nome
            print('Contato editado com sucesso!')
            input()

def marcarFavorito(indice, lista_contatos):
    indice_contato = indice -1

    for i, contato in enumerate(lista_contatos):
        if i == indice_contato:
            contato["favorito"] = 'S'
            print('Contato marcado como favorito!')
            input()

def visualizarFavoritos(lista_contatos):
    for i, contato in enumerate(lista_contatos):
        if contato["favorito"] == 'S':
            favorito = '✓'
            print(f'{i+1}. Nome: {contato["nome"]} - Email: {contato["email"]} - Favorito: [{favorito}].')

def excluirContato(indice, lista_contatos):
    indice_contato = indice - 1
    lista_contatos.pop(indice_contato)


while True:
    print(f'Escolha uma das opções abaixo: \n')
    print(f'1. Criar contato.\n')
    print(f'2. Visualizar contatos.\n')
    print(f'3. Editar contato. \n')
    print(f'4. Marcar como favorito. \n')
    print(f'5. Visualizar lista de favoritos. \n')
    print(f'6. Excluir contato. \n')
    print(f'7. Sair. \n')

    escolha = int(input('Escolha uma das opções listadas: '))

    if escolha == 1:
        nome = input('Escolha um nome para o contato: ')
        telefone = int(input('Digite o telefone: '))
        email = input('Digite um email: ')
        favorito = input('Marcar como favorito? (S/N) ').upper()

        criarContato(nome, telefone, email, favorito)

    elif escolha == 2:
        visualizarContatos()
        input()

    elif escolha == 3:
        visualizarContatos()
        indice = int(input('\nQuais dos itens você gostaria de editar? (Escolha um numero) '))
        novo_nome = input('Escolha um novo nome para o contato: ')
        editarContato(indice, lista_contatos, novo_nome, marcar_favorito)

    elif escolha == 4:
        visualizarContatos()
        indice = int(input('\nQuais dos itens você gostaria de marcar como favorito? (Escolha um numero) '))
        marcarFavorito(indice, lista_contatos)

    elif escolha == 5:
        print('Lista de contatos favoritos: \n')
        visualizarFavoritos(lista_contatos)
        input()

    elif escolha == 6:
        visualizarContatos()
        indice = int(input('\nQual item você gostaria de excluir? (Escolha um numero) '))
        excluirContato(indice, lista_contatos)
        print('Item removido com sucesso! \n')
        input()

    elif escolha == 7:
        break