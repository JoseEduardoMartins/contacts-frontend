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

# Compilar o aplicativo React para produção
RUN npm run build

# Use uma imagem de servidor web para servir o aplicativo (por exemplo, nginx)
FROM nginx:alpine

# Copie os arquivos compilados do build anterior para o diretório de distribuição do nginx
COPY --from=0 /app/build /usr/share/nginx/html

# Exponha a porta 80 para acessar o aplicativo
EXPOSE 80

# Comando para iniciar o nginx
CMD ["nginx", "-g", "daemon off;"]
