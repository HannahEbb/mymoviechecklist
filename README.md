# mymoviechecklist

Trata-se de uma API para listar e avaliar filmes de diferetes plataformas de 'streaming'.

## AVISO INICIAL

Para quem usa extensão ThunderClient para testar a API, uma 'collection' se encontra na raiz do projeto como 'thunder-collection_myMovieCheckList.json'.

Deve-se começar a testar pela rota 'sign-up', seguida pela 'sign-in' para pegar o token retornado e utilizá-lo no 'Headers' das demais rotas, no seguinte formato:

#### Authorization:        Bearer TOKEN gerado

## ROTAS DE AUTENTICAÇÃO

### POST /sign-up

Deve-se enviar um body no seguinte formato:

    {

      "email": "user02@gmail.com",
      "password": "0123456789"

    }

Obs. A senha deve conter pelo menos 10 dígitos.

### POST /sign-in

Deve-se enviar um body no seguinte formato:

    {

      "email": "user02@gmail.com",
      "password": "0123456789"

    }

Se os dados estiverem corretos, a API retornará um token, <ins> o qual será necessário para que o usuário realize qualquer requisição (desve ser adicionado ao 'Headers' no seguinte formato:</ins>

#### Authorization:        Bearer TOKEN gerado


## ROTAS DE FILMES

### POST /films

Cadastrar um novo filme à lista do usuário.
Deve-se enviar um body no seguinte formato:

    {
      "name": "Little Mermeid",
      "streaming": "Disney+",
      "genre": "Fantasy"
    }

Obs. O nome do filme <ins>só pode ser inserido uma vez no banco, e os parâmetros 'streaming', referente à plataforma de streaming no qual o filme se encontra, e 'genre', ou seja, gênero do filme, devem estar contidos nas seguintes listas, respectivemnte:</ins>

  Streaming: Netflix, Disney+, Star+, Amazon Prime, Mubi, Globoplay, HBO Max.
  
  Genre: Action, Thriller, Comedy, Drama, Fantasy, Mistery, Romance, Horror.

### GET /films

Retornar todos os filmes na lista de um usuário.

### GET /films/:id

Retornar um filme específico informando um 'id' válido como parâmetro no endereço de requisição.

### GET /films/streaming/:streaming

Retornar todos os filmes contendo o 'streaming' informado no endereço de requisição.

Obs. Se o 'streaming' conter espaços entre caracteres, substituir o espaço por '-', com todos os caracteres minúsculos, como no seguinte exemplo:

  'HBO Max' seria inserido no endereço como 'hbo-max'

### PUT /films/:id

Atualizar o cadastro de um filme específico assim que o usuário marcar o filme como 'assistido', juntamente com uma nota para avaliar o mesmo.
Deve-se enviar um body no seguinte formato:

    {
      "stars": "5"
    }
    
Obs. A nota fornecida deve ser de 1 a 5.

### DELETE /films/:id

Deleter um filme específico da lista do usuário, informando um 'id' válido como parâmetro no endereço de requisição.






