let escolherRacas = document.getElementById('escolherRacas');
let botaoClique = document.getElementById('botaoClique');
let divImgDog = document.getElementById('divImgDog');

botaoClique.addEventListener('click', () => {
  if (escolherRacas.value === "") {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        let imageUrl = data.message;
        divImgDog.innerHTML = '<img src="' + imageUrl + '">';
      })
      .catch(error => {
        console.log('Erro na requisição de imagem aleatória.');
      });
  } else {
    let selectedBreed = escolherRacas.value.toLowerCase();

    fetch('https://dog.ceo/api/breed/' + selectedBreed + '/images/random')
      .then(response => response.json())
      .then(data => {
        let imageUrl = data.message;
        divImgDog.innerHTML = '<img src="' + imageUrl + '">';
      })
      .catch(error => {
        console.log('Raça inexistente ou erro na requisição.');
      });
  }
});
