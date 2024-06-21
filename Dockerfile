# Usar a imagem base do Node
FROM node:14

# Definir o diretório de trabalho no contêiner
WORKDIR /app

# Copiar package.json e package-lock.json
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar todo o código da aplicação
COPY . .

# Aceitar ARG para REACT_APP_API_URL
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL

# Construir a aplicação para produção
RUN npm run build

# Instalar um servidor simples para servir o conteúdo
RUN npm install -g serve

# Definir a porta que a aplicação vai rodar
EXPOSE 3001

# Comando para rodar a aplicação
CMD ["serve", "-s", "build", "-l", "3001"]
