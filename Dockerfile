# Use a imagem base do Node
FROM node:14

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie os arquivos package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie todo o código do projeto para o diretório de trabalho
COPY . .

# Exponha a porta 80 para acessar o aplicativo
EXPOSE 8080

# Comando para iniciar o nginx
CMD ["npm", "start"]
