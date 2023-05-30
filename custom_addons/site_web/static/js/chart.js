const labelsChartLine = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
];

const labelsChartBar = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
];

const labelsChartDoughnut = [
    'Red',
    'Blue',
    'Yellow'
];


const dataChartLine = {
    labels: labelsChartLine,
    datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
    }]
};
const dataChartBar = {
    labels: labelsChartBar,
    datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
        ],
        borderWidth: 1
    }]
};


const dataChartDoughnut = {
    labels: labelsChartDoughnut,
    datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
    }]
};

const configChartLine = {
    type: 'line',
    data: dataChartLine,
    options: {}
};

const configChartBar = {
    type: 'bar',
    data: dataChartBar,
    options: {}
};
const configChartDoughnut = {
    type: 'doughnut',
    data: dataChartDoughnut,
    options: {}
};

const myChartLine = new Chart(
    document.getElementById('chart-line'),
    configChartLine
);
const myChartBar = new Chart(
    document.getElementById('chart-bar'),
    configChartBar
);
const myChartDoughunt = new Chart(
    document.getElementById('chart-doughnut'),
    configChartDoughnut
);