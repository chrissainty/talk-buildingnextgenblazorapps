export function buildChart(element, type, data) {
    let chart = new Chart(element, {
        type: type,
        data: data,
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        stepSize: 1
                    }
                }]
            },
            legend: {
                display: false
            }
        }
    });
}