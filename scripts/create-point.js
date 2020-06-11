function populateUFs() {
  const ufSelect = document.querySelector("select[name=uf]")

  fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
   .then((response) => response.json())
   .then(states => {

     // Ordenando por ordem alfabética
     states.sort((a, b) => {
      if (a.nome > b.nome) {
        return 1;
      } else if (a.nome < b.nome) {
        return -1;
      } else {
        return 0;
      }
     });
     
     for (const state of states) {
       ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
     }
   });
}

 populateUFs();
