function pesquisar() {
    let section = document.getElementById('resultados-pesquisa');

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if(!campoPesquisa){
        section.innerHTML = '<p>Nada foi encontrado. Digite um livro ou palavra chave</p>';
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    let resultados = '';
    let titulo = '';
    let sinopse = '';
    let tags = '';

    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        sinopse = dado.sinopse.toLowerCase();
        tags = dado.tags.toLowerCase();
        if(titulo.includes(campoPesquisa) || sinopse.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            resultados += `
        <div class = item-resultado>
            <h2>
                <a href="#">${dado.titulo}</a>
            </h2>
            <p class = descricao-meta>
                 ${dado.sinopse}
            </p>
            <a href=${dado.link} target="_blank">Mais informações</a>
        </div>`
        }
    }
    if(!resultados){
        section.innerHTML = '<p>Nada foi encontrado</p>';
        return;
    }
    section.innerHTML = resultados;
}




