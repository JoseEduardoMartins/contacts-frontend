# Contact Management System - Front-end

Este projeto é uma aplicação front-end desenvolvida em React para realizar operações básicas de listagem, cadastro e edição de contatos, os quais podem ter múltiplos números de telefone associados.

## Pré-requisitos

Certifique-se de ter as seguintes dependências instaladas antes de iniciar:

Opção 1

-   [Node.js](https://nodejs.org/) (versão 16.17.0 ou superior)
-   Pacotes [npm](https://www.npmjs.com/) (Node Package Manager)

Opção 2

-   [Docker](https://docs.docker.com/get-docker/)
-   [Docker Compose](https://docs.docker.com/compose/install/)

## Instruções de Configuração

### 1. Clone o repositório

```bash
git clone https://github.com/JoseEduardoMartins/contacts-frontend.git

cd contacts-frontend
```

### 2. Configurar ambiente.

#### Opção 1: Local

-   Instale as dependências:

    ```bash
    npm install
    ```

-   Criar um arquivo `.env` na raiz do projeto com base no `.env.example` e mude as variaveis se necessario.

    ```bash
    REACT_APP_API_URL=http://localhost:3000/api
    ```

#### Opção 2: Utilizando Docker

-   Certifique-se de configurar corretamente as variáveis de ambiente no arquivo `docker-compose.yml` para conectar ao back-end.

### 4. Executar a Aplicação

#### Opção 1: Local

-   Inicie a aplicação em modo de desenvolvimento:

    ```bash
    npm start
    ```

-   Para criar uma versão otimizada para produção:

    ```bash
    npm run build
    ```

Os arquivos resultantes estarão na pasta build/.

#### Opção 2: Utilizando Docker

-   Inicie a aplicação:

    ```bash
    docker-compose up
    ```

-   Crie imagens antes de iniciar contêineres:

    ```bash
    docker-compose up --build
    ```

-   Interrompe contêineres e remove contêineres, redes, volumes e imagens criadas pelo `up`:

    ```bash
    docker-compose down
    ```

Acesse http://localhost:3001 em seu navegador.

## Funcionalidades

1. Listagem de contatos
2. Cadastro de novos contatos
3. Edição de contatos existentes

## Contribuição

Contribuições são bem-vindas! Se encontrar algum problema ou tiver sugestões, por favor, abra uma [issue](https://github.com/JoseEduardoMartins/contacts-frontend/issues/new).

## Autor

-   José Eduardo Martins

## Licença

Este projeto é licenciado sob a Licença MIT - consulte o arquivo LICENSE.md para obter detalhes.

## Contato

Para qualquer dúvida ou problema, entre em contato com `m4rt1ns.jose@gmail.com`.
