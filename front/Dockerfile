# Estágio 1: Construção
FROM node:alpine AS build
# Definindo o diretório de trabalho
WORKDIR /app
# Copiar package.json e package-lock.json da raiz do projeto para o diretório de trabalho do container
COPY ./package*.json .
# Instalando dependências
RUN npm install
# Copiando o código fonte do frontend
COPY . .
# Construindo a aplicação
RUN npm run build
# Estágio 2: Servidor NGINX para servir a aplicação
EXPOSE 5173