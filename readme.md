# INSTRUÇÕES INICIAIS

1 - INSTALAR DEPENDENCIAS:

- Pelo terminal/CMD, dentro da pasta /backend execute o comando "npm install"
- Pelo terminal/CMD, dentro da pasta /frontend execute o comando "npm install"

2 - CRIAR BASE DE DADOS:

- Execute o comando SQL, no seu SGBD, que encontra-se na pasta /backend/schema/scripts
- Pelo terminal/CMD, dentro da pasta "/backend" execute o comando "npx sequelize db:migrate"

# CRIA ARQUIVO DE VARIAVES DE AMBIENTE (.env)

- Crie um arquivo com o nome ".env" (sem as aspas) dentra da pasta raiz do backend (/backend)

- Copie o conteudo abaixo, preencha com os dados do seu banco de dados e cole dentro do arquivo ".env"

#Banco de dados

DB_HOST=localhost

DB_PORT=5432

DB_NAME=

DB_USERNAME=

DB_PASS=

# INICIAR SERVIDORES

1 - Pelo terminal/CMD, dentro da pasta /backend execute o comando "npm start"

2 - Pelo terminal/CMD, dentro da pasta /frontend execute o comando "npm start"
