// script.js
document.addEventListener('DOMContentLoaded', function () {
    var chartWidth = 200;
    var chartHeight = 200;

    var ctxSummer = document.getElementById('summerChart').getContext('2d');
    var summerChart = new Chart(ctxSummer, {
        type: 'doughnut',
        data: {
            labels: ['France', 'USA', 'Belgique', 'Canada', 'Italie', 'Espagne', 'Arabie-Saoudite'],
            datasets: [{
                data: [8, 2, 5, 1, 8, 3, 3],
                backgroundColor: ['rgb(255, 192, 192)', 'rgb(135, 206, 250)', 'rgb(255, 250, 205)', 'rgb(175, 238, 238)', 'rgb(224, 187, 228)', 'rgb(255, 218, 185)', 'rgb(152, 251, 152)'],
                borderColor: ['rgb(255, 105, 180)', 'rgb(30, 144, 255)', 'rgb(255, 215, 0)', 'rgb(0, 206, 209)', 'rgb(147, 112, 219)', 'rgb(255, 99, 71)', 'rgb(0, 128, 0)'],
                borderWidth: 1
            }]
        },
        options: {
            cutout: '50%',
            responsive: true,
            legend: {
                position: 'top'
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Résultat de la saison été',
                    position: 'top',
                    font: {
                        size: 20
                    }
                },
            }
        }
    });
    
    document.getElementById('winterChart').classList.add('d-none');

    var ctxWinter = document.getElementById('winterChart').getContext('2d');
    var winterChart = new Chart(ctxWinter, {
        type: 'doughnut',
        data: {
            labels: ['France', 'USA', 'Belgique', 'Canada', 'Italie', 'Espagne', 'Arabie-Saoudite'],
            datasets: [{
                data: [10, 6, 6, 4, 2, 1, 1],
                backgroundColor: ['#FFB6C1', '#87CEFA', '#FFFACD', '#AFEEEE', '#E0BBE4', '#FFDAB9', '#98FB98'],
                borderColor: ['#FF69B4', '#1E90FF', '#FFD700', '#00CED1', '#9370DB', '#FF6347', '#008000'],
                borderWidth: 1
            }]
        },
        options: {
            cutout: '50%',
            responsive: true,
            legend: {
                position: 'top'
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Résultat de la saison hiver',
                    position: 'top',
                    font: {
                        size: 20
                    }
                },
            }
        }
    });

    var toggleButton = document.getElementById('toggleButton');

    toggleButton.addEventListener('click', function () {

    var isSummerChartVisible = !document.getElementById('summerChart').classList.contains('d-none');
    
    if (isSummerChartVisible) {
        document.getElementById('summerChart').classList.add('d-none');
        document.getElementById('winterChart').classList.remove('d-none');
    } 
    else 
    { 
    document.getElementById('winterChart').classList.add('d-none');
    document.getElementById('summerChart').classList.remove('d-none');
    }
    });
});

  