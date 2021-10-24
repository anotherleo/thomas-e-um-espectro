let attributesChart = new Chart(
    document.getElementById('attributesChart'),
    config = {
        type: 'radar',
        data: {
            labels: [
                'Força',
                'Destreza',
                'Vigor',
                'Carisma',
                'Manipulação',
                'Aparência',
                'Percepção',
                'Inteligência',
                'Raciocínio',
            ],
            datasets: [{
                label: 'Pontos de Atributos',
                backgroundColor: 'rgba(255, 99, 132,.5)',
                borderColor: 'rgb(255, 99, 132)',
                data: [3, 3, 3, 2, 3, 3, 2, 4, 5],
            }]
        },
        options: {
            scales: {
                r: {
                    suggestedMin: 0,
                    suggestedMax: 5,
                    ticks: {
                        stepSize: 1,
                    }
                }
            },
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom',
                    align: 'center',
                }
            }
        }
    });

let skillsChart = new Chart(
    document.getElementById('skillsChart'),
    config = {
        type: 'bar',
        data: {
            labels: [
                'Atletismo',
                'Combate',
                'Expressão',
                'Acadêmicos',
                'Meditação',
                'Sobrevivência', 
                'Tecnologia',
                'Ocultismo',
                'Idiomas',
                'Ciências',
                'Ofícios'
            ],
            datasets: [{
                axis: 'y',
                label: 'Pontos de Habilidades',
                data: [2, 2, 3, 3, 2, 3, 4, 4, 3, 1, 2],
                fill: false,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(54, 162, 235)',
                    'rgb(75, 192, 192)',
                    'rgb(255, 99, 132)',
                    'rgb(153, 102, 255)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(153, 102, 255)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            scales: {
                x: {
                    min: 0,
                    max: 5,
                    ticks: {
                        stepSize: 1,
                    }
                }
            },
        }
    });