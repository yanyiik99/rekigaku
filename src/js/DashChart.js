const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember',],
        datasets: [{
            label: 'Statistik Konsultasi',
            data: [11, 10, 3, 5, 2, 3, 7, 8, 4, 9, 7, 9],
            backgroundColor: [
                'rgba(90, 226, 187, 0.6)',
                'rgba(90, 226, 187, 0.6)',
                'rgba(90, 226, 187, 0.6)',
                'rgba(90, 226, 187, 0.6)',
                'rgba(90, 226, 187, 0.6)',
                'rgba(90, 226, 187, 0.6)',
                'rgba(90, 226, 187, 0.6)',
                'rgba(90, 226, 187, 0.6)',
                'rgba(90, 226, 187, 0.6)',
                'rgba(90, 226, 187, 0.6)',
                'rgba(90, 226, 187, 0.6)',
                'rgba(90, 226, 187, 0.6)',
            ],
            borderColor: [
                'rgba(90, 226, 187, 1)',
                'rgba(90, 226, 187, 1)',
                'rgba(90, 226, 187, 1)',
                'rgba(90, 226, 187, 1)',
                'rgba(90, 226, 187, 1)',
                'rgba(90, 226, 187, 1)',
                'rgba(90, 226, 187, 1)',
                'rgba(90, 226, 187, 1)',
                'rgba(90, 226, 187, 1)',
                'rgba(90, 226, 187, 1)',
                'rgba(90, 226, 187, 1)',
                'rgba(90, 226, 187, 1)',
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            // y: {
            //     beginAtZero: true
            // },
            x: {
                beginAtZero: true
            }, 
            xAxes: [{
                ticks: {
                    fontColor: 'red'
                },
                gridLines: {
                    color: 'blue !important'
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Employee',
                    fontSize: 20.0,
                    fontColor: 'green'
                }
            }]
        }
    }
});