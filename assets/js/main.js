let usersDoughnutChart = document.getElementById('usersDoughnutChart').getContext('2d');

let doughnutUsersChart = new Chart(usersDoughnutChart, {
    type: 'doughnut',
    data: {
        labels: ["Dosen", "Staff", "Mahasiswa"],
        datasets: [{
            label: "Users",
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 159, 64, 1)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderWidth: 1,
            data: [500, 650, 1200]
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        cutoutPercentage: 70,
        legend: { display: false },
        animation: { duration: 2000 }
    }
});