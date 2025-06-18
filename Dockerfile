# Use a imagem Node.js 18 como base
FROM node:22

# Instale o Angular CLI globalmente no container
RUN npm install -g @angular/cli

# Não necessita, pois imagens node normalmente já vem com Yarn
# RUN npm install -g yarn

# Crie o diretório de trabalho no contêiner
WORKDIR /app

# Copie os arquivos do projeto para o contêiner
COPY . .

# Instale as dependências do projeto
RUN npm install

# Exponha as portas
EXPOSE 4200

# Execute o aplicativo Angular--poll 2000

CMD ["ng", "serve", "--host", "0.0.0.0", "--poll=2000", "--port", "4200", "--disable-host-check"]