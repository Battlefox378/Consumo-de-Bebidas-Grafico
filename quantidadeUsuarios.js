async function quantidadeEspeciesPorHabitat() {
    const res = await fetch('https://www.gbif.org'); 
    const dados = await res.json();

   
    const nomeDosHabitats = Object.keys(dados);
    const quantidadeDeEspecies = Object.values(dados);

    const data = [{
        x: nomeDosHabitats,
        y: quantidadeDeEspecies,
        type: 'bar',
        marker: {
            color: '#4CAF50'
        }
    }];

    const layout = {
        title: 'Espécies por Habitat',
        xaxis: {
            title: 'Tipo de Habitat',
        },
        yaxis: {
            title: 'Número de Espécies',
        }
    };

    const grafico = document.createElement('div');
    grafico.className = 'grafico';
    document.getElementById('graficos-container').appendChild(grafico);
    Plotly.newPlot(grafico, data, layout);
}

quantidadeEspeciesPorHabitat();
