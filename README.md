## Descrição:

Uma API que recebe formulário e os armazena num banco de dados, permitindo também umas busca por data de envio.

## Instalação:

```bash
$ git clone https://github.com/JV-Albuquerque-S/teste-precato.git
$ cd teste-precato/
$ npm i
```

- crie um arquivo .env e preencha-o usando o .env.example como base

## Uso:

- rode o servidor em mode DEV:

```bash
$ cd teste-precato/
$ npm run dev
```

- para fazer interações com o banco, você pode usar qualquer ferramenta do seu agrado, Thunder Client é um exemplo.
- para inserções no banco envie na porta que você escolheu no .env requisições com o corpo no formato:

```bash
{
   "name": "nome",
   "email": "email",
   "cpf": "cpf",
   "phone": "celular(com DDD e o 9 na frente)"
}
```

- para fazer pesquisas no banco faça um GET na porta que você escolheu no .env com o corpo no formato:

```bash
{
  "start_date": "2023-03-13T00:00:00-03:00",
  "end_date": "2023-03-15T00:20:00-03:00"
}
```
