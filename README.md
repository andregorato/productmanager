# Gerenciador de produtos

O grenciador de produtos, tem a finalidade de realizar um CRUD simples de produtos, persistindo-os em uma base de dados NO SQL, que no caso é o MongoDB.

## Requisitos
- [Git] (https://git-scm.com/)
- [Node] (https://nodejs.org/)
- [MongoDB] (https://www.mongodb.org/)

## Instalação

1.  Clone o repositório: `git clone https://github.com/andregorato/productmanager.git`
2.  Instale as dependências do projeto: `npm install`
3.  Verifique se a pasta default do MongoDB foi criada, senão existir, crie: `pasta default C:\data\db`
4.  Inicie o executável do MongoDB: `o mongo deverá está rodando em sua porta default 27017` 
5.  Inicie o servidor node: `node server`

## Recursos disponibilizados

1.  Acesse a aplicação pelo browser em: http://localhost:3350
2.  Documentação da api: http://localhost:3350/apidocs
3.  Testes de integração: `npm test` 

![Gerenciador de produtos - Home](http://i.imgur.com/n7vJzbQ.png)
