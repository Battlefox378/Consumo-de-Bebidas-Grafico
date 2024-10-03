async function visualizarInformacoesGlobais() {
    const res = await fetch('https://www.gbif.org'); // Substitua pela URL válida
    const dados = await res.json();
    const especiesConservadas = dados.total_especies_conservadas || 0;
    const totalEspecies = dados.total_especies || 1; // Evita divisão por zero

    const paragrafo = document.createElement('p');
    paragrafo.innerHTML = `Total de espécies: ${totalEspecies}. Conservadas: ${especiesConservadas}.`;
    
    document.getElementById('graficos-container').appendChild(paragrafo);
}

visualizarInformacoesGlobais();
