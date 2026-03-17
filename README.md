
# CodeLeap Network

Projeto desenvolvido com React, TypeScript e Vite, simulando uma rede social simples onde usuários podem criar, editar e deletar posts.

## Funcionalidades

- **Cadastro de usuário:** Tela inicial para inserir o nome de usuário.
- **Página principal:** Exibe posts, permite criar novos posts com título e conteúdo.
- **CRUD de posts:** 
  - Criar post
  - Editar post (modal)
  - Deletar post (modal)
- **Interface responsiva e moderna:** Utilizando TailwindCSS.
- **Fluxo de navegação:** React Router DOM.

## Estrutura do Projeto

- `src/pages/SignUp.tsx`: Tela de cadastro de usuário.
- `src/pages/Home.tsx`: Página principal com feed de posts e formulário para criar post.
- `src/components/EditModal.tsx`: Modal para editar posts.
- `src/components/DeleteModal.tsx`: Modal para deletar posts.
- `src/assets/icons/`: Ícones para ações de editar e deletar.

## Tecnologias Utilizadas

- React 19
- TypeScript
- Vite
- TailwindCSS
- React Router DOM
- ESLint

## Como rodar o projeto

1. Instale as dependências:
   ```
   npm install
   ```
2. Rode o servidor de desenvolvimento:
   ```
   npm run dev
   ```
3. Acesse [http://localhost:5173](http://localhost:5173) no navegador.

## Scripts disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Gera o build de produção.
- `npm run preview`: Visualiza o build.
- `npm run lint`: Executa o lint.

## Diferenciais

- Modais para edição e exclusão de posts.
- Validação de campos para criação e edição.
- UI clean e responsiva.
