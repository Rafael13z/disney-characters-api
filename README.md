<<<<<<< HEAD
# API de Personagens da Disney

API RESTful para gerenciar personagens da Disney, utilizando Node.js, MySQL, Prisma ORM e padrão MVC.

## Pré-requisitos
- Node.js
- MySQL
- Prisma CLI

## Configuração
1. Clone o repositório.
2. Instale as dependências: `npm install`.
3. Configure o banco de dados MySQL e atualize o arquivo `.env`.
4. Execute as migrações do Prisma: `npx prisma migrate dev`.
5. Inicie o servidor: `npm run dev`.

## Endpoints
- `POST /api/characters` - Cria um novo personagem.
- `GET /api/characters` - Lista todos os personagens.
- `GET /api/characters/:id` - Obtém um personagem por ID.
- `PUT /api/characters/:id` - Atualiza um personagem.
- `DELETE /api/characters/:id` - Exclui um personagem.

## Exemplo de Requisição (POST)
```json
{
  "name": "Mickey Mouse",
  "nickname": "Mickey",
  "biography": "Rato carismático e líder da turma.",
  "creationDate": "1928-11-18",
  "birthplace": "Estúdios Disney",
  "clothing": "Luvas brancas, sapatos amarelos, calça vermelha",
  "profilePicture": "http://exemplo.com/mickey.jpg",
  "species": "Rato",
  "creator": "Walt Disney"
}
=======
# disney-characters-api
>>>>>>> df1d6bc49f40c1a889a4cbda1963fbc98d6c5302
