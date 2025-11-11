🚀 API de Gestão de Filmes (Trabalho Final)
Esta é a API RESTful desenvolvida para o trabalho final da disciplina de Frameworks Web. O projeto consiste num backend completo em Node.js e Express para gerir um cadastro de filmes e seus respetivos atores, implementando um relacionamento N:M (Muitos-para-Muitos) entre eles.

🛠️ Tecnologias Utilizadas
O backend foi construído com as seguintes ferramentas:

Node.js: Ambiente de execução do JavaScript no servidor.

Express.js: Framework para a gestão das rotas e da API.

MongoDB Atlas: Banco de dados NoSQL na nuvem.

Mongoose: Biblioteca para modelagem dos dados (ODM) e conexão com o MongoDB.

DotEnv: Para gestão de variáveis de ambiente (como a senha do banco).

⚙️ Como Rodar o Projeto (Acesso)
Para rodar este projeto na tua máquina local, segue estes passos:

1. Pré-requisitos
Ter o Node.js (versão 18 ou superior) instalado.

Ter uma conta gratuita no MongoDB Atlas para criar o banco de dados.

2. Instalação
Clona este repositório:

Bash

git clone https://github.com/Humberto-Henrique-Medeiros/Projeto-Filmes.git
Entra na pasta do projeto:

Bash

cd api-filmes
Instala as dependências:

Bash

npm install
3. Configuração do Banco de Dados (.env)
Este projeto NÃO envia o ficheiro .env (que contém as senhas) para o GitHub, como é boa prática. Precisas de criar o teu.

Cria um ficheiro chamado .env na raiz do projeto.

Vai ao teu MongoDB Atlas, cria um cluster M0 (grátis), um utilizador de banco de dados e libera o acesso de qualquer IP (0.0.0.0/0).

Clica em "Connect" > "Drivers" e copia a tua String de Conexão.

Cola o seguinte conteúdo no teu ficheiro .env, substituindo pela tua string de conexão:

Bash

# Ficheiro .env
# Substitui <username>, <password> e <cluster-url> pela tua string do MongoDB Atlas
# Adiciona o nome da tua base de dados (ex: 'filmesDB') antes do '?'
DATABASE_URL=mongodb+srv://<username>:<password>@<cluster-url>/filmesDB?retryWrites=true&w=majority
4. Executar a API
Depois de configurar o .env, basta rodar o servidor:

Bash

npm run dev
O terminal deverá mostrar as mensagens Servidor rodando na porta 4000 e Conectado ao MongoDB!.

📄 Como Funciona (Endpoints da API)
Podes usar o Postman ou Insomnia para testar as rotas abaixo.

Atores (/api/actors)
1. Criar Ator
Método: POST

URL: http://localhost:4000/api/actors

Body (JSON):

JSON

{
  "nome": "Tom Holland"
}
2. Listar Atores
Método: GET

URL: http://localhost:4000/api/actors

Filmes (/api/movies)
1. Criar Filme
Método: POST

URL: http://localhost:4000/api/movies

Body (JSON): (Nota: O campo atores espera um array de IDs de atores que já existam no banco)

JSON

{
  "titulo": "Homem-Aranha",
  "faixaEtaria": 12,
  "genero": "Ação/Aventura",
  "atores": ["673f... (ID do Tom Holland)"]
}
2. Listar Filmes
Método: GET

URL: http://localhost:4000/api/movies

Resposta: (O backend usa .populate() para mostrar os dados completos dos atores)

JSON

[
  {
    "_id": "...",
    "titulo": "Homem-Aranha",
    "faixaEtaria": 12,
    "genero": "Ação/Aventura",
    "atores": [
      {
        "_id": "673f... (ID do Tom Holland)",
        "nome": "Tom Holland"
      }
    ]
  }
]
3. Atualizar Filme
Método: PUT

URL: http://localhost:4000/api/movies/ID_DO_FILME_PARA_ATUALIZAR

Body (JSON): (Envia apenas os campos que queres mudar)

JSON

{
  "genero": "Ação/Super-Herói"
}
4. Deletar Filme
Método: DELETE

URL: http://localhost:4000/api/movies/ID_DO_FILME_PARA_DELETAR

🏛️ Estrutura do Projeto
O projeto segue a arquitetura de camadas exigida na especificação do trabalho (Model, Service, Controller, Route):

src/models/: Define os "moldes" (Schemas) do Mongoose para Atores e Filmes.

src/services/: Contém a lógica de negócio e a comunicação direta com o banco de dados.

src/controllers/: Recebe as requisições (pedidos) e chama os serviços adequados.

src/routes/: Define os URLs (endpoints) da API e liga-os aos controllers.