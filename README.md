Crewfare Backend

Backend do projeto Crewfare, responsável por receber, salvar, listar, atualizar e excluir eventos.

->Tecnologias
- NestJS
- TypeScript
- MongoDB
- Mongoose
- Multer

->Funcionalidades
- Criar eventos
- Receber e salvar banner do evento
- Listar todos os eventos cadastrados
- Buscar evento por ID
- Atualizar evento existente
- Excluir evento
- Servir imagens salvas localmente na pasta `uploads`

->Pré-requisitos
Antes de rodar o backend, é necessário ter instalado:
- Node.js
- npm
- MongoDB

O MongoDB precisa estar rodando localmente.

A aplicação usa a seguinte conexão:
```txt
mongodb://localhost:27017/crewfare

->Como rodar o projeto:
-instale no vscode npm install;
-inicie o servidor do backend: npm run start:dev;
-o backend ficará disponível em: http://localhost:3000.
-o frontend consome a API do backend em: http://localhost:3000/events.

-> O backend é consumido pelo frontend do projeto Crewfare, para usar o sistema completo, rode:
Backend: http://localhost:3000
Frontend: http://localhost:5173
