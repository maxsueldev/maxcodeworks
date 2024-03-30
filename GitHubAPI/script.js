// API pública do GitHub
const apiUrl = "https://api.github.com/users/";
// Usuário a ser pesquisado
const user = "maxsueldev";

// Função assíncrona que retorna os dados da
// requisição, em JSON
async function getDataUser() {
  const response = await fetch(apiUrl + user);
  return response.json();
}

// Tratamento da promise
getDataUser().then((data) => {
  // Criação de objeto com os dados da promise
  const infoUser = {
    Nome: data.name,
    Bio: data.bio,
    Localizacao: data.location,
    Login: data.login,
    Seguidores: data.followers,
    Seguindo: data.following,
  };

  console.log(infoUser);
});
 
// Função para retornar os dados de outra requisição
async function getUserRepos() {
  const response = await fetch(apiUrl + user + "/repos");
  return response.json();
}

const repos = [];

// Tratamento da nova promisse
getUserRepos().then((data) => {
  // Cada elemento de "data" é percorrido
  data.forEach((element) => {
    // Cada elemento é inserido como um objeto
    // dentro do Array
    repos.push({
      Projeto: element.name,
      Descricao: element.description,
      "Linguagem principal": element.language,
      Visibilidade: element.visibility,
    });
  });

  console.log(repos);
});
