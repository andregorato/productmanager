define({ "api": [
  {
    "type": "delete",
    "url": "api/product/:id",
    "title": "Deletar um produto",
    "version": "1.0.0",
    "group": "Product_Manager",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id do produto a ser deletado</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request",
          "type": "json"
        }
      ]
    },
    "filename": "./app/routes.js",
    "groupTitle": "Product_Manager",
    "name": "DeleteApiProductId"
  },
  {
    "type": "get",
    "url": "api/product",
    "title": "Obter todos os produtos cadastrados",
    "group": "Product_Manager",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n[\n {\n  \"_id\": \"570a633aa00010940b20d9fa\",\n  \"nome\": \"Sabão em pó\",\n  \"descricao\": \"Item utilizado para lavar roupas\",\n  \"preco\": 1.99,\n  \"__v\": 0\n  },\n  {\n  \"_id\": \"555a6340a00010940b20d9fa\",\n  \"nome\": \"Detergente\",\n  \"descricao\": \"Item utilizado para lavar louças\",\n  \"preco\": 1.99,\n  \"__v\": 0\n }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "filename": "./app/routes.js",
    "groupTitle": "Product_Manager",
    "name": "GetApiProduct"
  },
  {
    "type": "get",
    "url": "api/product/:id",
    "title": "Obter produto cadastrado através do seu id",
    "group": "Product_Manager",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Id",
            "description": "<p>id de um produto cadastrado.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n{\n \"_id\": \"570a633aa00010940b20d9fa\",\n \"nome\": \"Sabão em pó\",\n \"descricao\": \"Item utilizado para lavar roupas\",\n \"preco\": 1.99,\n \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\nHTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "filename": "./app/routes.js",
    "groupTitle": "Product_Manager",
    "name": "GetApiProductId"
  },
  {
    "type": "post",
    "url": "api/product",
    "title": "Cadastrar um produto",
    "group": "Product_Manager",
    "version": "1.0.0",
    "parameter": {
      "examples": [
        {
          "title": "informações do produto a ser cadastrado.    ",
          "content": "{\n \"nome\": \"Sabonete\",\n \"descricao\": \"Item utilizado no banho\",\n \"preco\": 1.99,\n \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n[\n {\n  \"_id\": \"570a633aa00010940b20d9fa\",\n  \"nome\": \"Sabão em pó\",\n  \"descricao\": \"Item utilizado para lavar roupas\",\n  \"preco\": 1.99,\n  \"__v\": 0\n  },\n {\n  \"_id\": \"570a6340a00010940b20d9fb\",\n  \"nome\": \"Sabonete\",\n  \"descricao\": \"Item utilizado no banho\",\n  \"preco\": 1.99,\n  \"__v\": 0\n },\n {\n  \"_id\": \"570a796fbfb4322c1a040930\",\n  \"nome\": \"Sabonete Líquido\",\n  \"descricao\": \"Item utilizado no banho\",\n  \"preco\": 1.99,\n  \"__v\": 0\n }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request",
          "type": "json"
        }
      ]
    },
    "filename": "./app/routes.js",
    "groupTitle": "Product_Manager",
    "name": "PostApiProduct"
  },
  {
    "type": "put",
    "url": "api/product/:id",
    "title": "Atualizar um produto",
    "group": "Product_Manager",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id do produto a ser atualizado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "informações do produto a ser cadastrado (JSON)    ",
          "content": "{\n \"nome\": \"Sabonete Líquido\",\n \"descricao\": \"Item utilizado no banho todos os dias\",\n \"preco\": 1.99,\n \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n[\n {\n  \"_id\": \"570a633aa00010940b20d9fa\",\n  \"nome\": \"Sabão em pó\",\n  \"descricao\": \"Item utilizado para lavar roupas\",\n  \"preco\": 1.99,\n  \"__v\": 0\n  },\n {\n  \"_id\": \"570a6340a00010940b20d9fb\",\n  \"nome\": \"Sabonete\",\n  \"descricao\": \"Item utilizado no banho\",\n  \"preco\": 1.99,\n  \"__v\": 0\n },\n {\n  \"_id\": \"570a796fbfb4322c1a040930\",\n  \"nome\": \"Sabonete Líquido\",\n  \"descricao\": \"Item utilizado no banho todos os dias\",\n  \"preco\": 1.99,\n  \"__v\": 0\n }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\nHTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "filename": "./app/routes.js",
    "groupTitle": "Product_Manager",
    "name": "PutApiProductId"
  }
] });
