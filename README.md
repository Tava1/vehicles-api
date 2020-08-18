# Back-end
**Requisitos:** Node.js, NPM.

## Instalação

### Instalando todas as dependências
Clone o repositório e acesse o diretório **backend/**.

    cd backend

Execute o seguinte comando para instalar todas as dependências necessárias:

    npm install

### Criando o banco de dados e suas respectivas tabelas (SQLite)
Utilizando o query builder **knex**, devemos executar as *migrations* para a criação do *database* e das *tables*. 

    npx knex migrate:latest

Se tudo ocorreu bem o banco e as tabelas foram criados.

    > output:
	    Batch 1 run: 3 migrations
    

*Os passos a seguir são **opcionais**, se não houver necessidade avance para as próximas etapas* 

**Alterando o arquivo de configuração do knex**

*Se algum erro ocorrer ao criar o aquivo **.sqlite**, verifique se o diretório **/data** existe em: **src/database***

Se houver necessidade de alterar o nascimento do aquivo ***vehicles.sqlite***, basta modificar o **value: *filename*** no arquivo de configuração ***knexfile.js*** na raiz do projeto. 


    connection: {
		  filename: './src/database/data/vehicles.sqlite'
	  }

Para modificar as ***migrations*** basta acessar o diretório **src/database/migrations** .

As ***migrations*** também são mapeadas no arquivo de configuração ***knexfile.js*** :

    migrations: {
	    directory: './src/database/migrations'
	  }

