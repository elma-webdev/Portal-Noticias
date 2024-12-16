Teste Prático Back-end Pleno O POVO

Este repositório foi criado com intuito de disponibilizar o código para o teste prático para se tornar um Desenvolvedor Back-end Pleno do Grupo de Comunicação O POVO disponível no link: https://github.com/opovoonline/teste-backend-pleno

Entidades
Jornalistas do Jornalista

Id - Primary Key
Nome - Obrigatório
Sobrenome - Obrigatório
Email - Obrigatório
Senha (Criptografada) - Obrigatório
Notícias

Id da notícia - Primary Key
Id do jornalista - Obrigatório
Id do tipo da notícia - Obrigatório
Título - Obrigatório
Descrição - Obrigatório
Corpo da notícia - Obrigatório
Imagem de destaque (link) - Não obrigatório
Tipos de Notícia

Id - Primary Key
Id do Jornalista - Obrigatório
Nome do Tipo - Obrigatório
Caso queira, você poderá criar propriedades.

Rotas Obrigatórias:
Jornalistas

POST /api/register (rota para criação de novos jornalistas)
POST /api/login (rota para autenticação jornalistas)
POST /api/me (rota que retorna os dados do jornalista, a senha deverá estar oculta. Essa rota necessita de autenticação)
Notícias (Todas as requisições para as rotas de Notícias devem ser autenticadas por um token JWT gerado para o jornalista)

POST /api/news/create (Cria uma notícia)
POST /api/news/update/{news_id} (Altera uma notícia do jornalista)
POST /api/news/delete/{news_id} (Exclui uma notícia do jornalista)
GET /api/news/me (Lista todas as notícias do jornalista)
GET /api/news/type/{type_id} (Lista todas as notícias do jornalista por tipo)
Tipos de Notícias (Todas as requisições para as rotas de Notícias devem ser autenticadas por um token JWT gerado para o jornalista)

POST /api/type/create (Cria um novo tipo de notícia)
POST /api/type/update/{type_id} (Altera um tipo de notícia do jornalista)
POST /api/type/delete/{type_id} (Exclui um tipo de notícia do jornalista, uma exceção deverá ser lançada caso se tente deletar uma notícia que esteja sendo referenciada em Notícias)
GET /api/type/me (Lista todos os tipos notícias do jornalista)


Att: não tem todos os endpoinst criados, apenas os necessários.
