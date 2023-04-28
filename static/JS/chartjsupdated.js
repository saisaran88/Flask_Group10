const ctx = document.getElementById('myChart');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['5', '4', '3', '2', '1'],
        datasets: [
            {
                label: 'Food Services',
                data: [12, 19, 3, 5, 2],
                fill: false,
                backgroundColor: [
                    'rgba(255,0,0,0.2)',
                    'rgba(255,255,0,0.2)',
                ],
                borderColor: [
                    'rgb(255,0,0)',
                    'rgb(255,255,0)',
                ],
                borderWidth: 1,
            },
            {
                label: 'Customer Support',
                data: [15, 10, 6, 8, 3],
                fill: false,
                backgroundColor: [
                    'rgba(0,255,0,0.2)',
                    'rgba(0,255,255,0.2)',
                ],
                borderColor: [
                    'rgb(0,255,0)',
                    'rgb(0,255,255)',
                ],
                borderWidth: 1,
            },
            {
                label: 'Ambiance',
                data: [8, 12, 7, 4, 9],
                fill: false,
                backgroundColor: [
                    'rgba(255,0,255,0.2)',
                    'rgba(0,0,255,0.2)',
                ],
                borderColor: [
                    'rgb(255,0,255)',
                    'rgb(0,0,255)',
                ],
                borderWidth: 1,
            },
        ],
    },
    options: {
        indexAxis: 'y',
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
});

