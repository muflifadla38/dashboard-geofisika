// Doughat Chart.Js
if ($("#usersDoughnutChart").length) {
    let usersDoughnutChart = $("#usersDoughnutChart")[0].getContext('2d');

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
}

if ($("#barChartMorris").length) {
    Morris.Bar({
        element: 'barChartMorris',
        data: [
            { y: '2013', a: 274, b: 60 },
            { y: '2014', a: 470, b: 65 },
            { y: '2015', a: 645, b: 50 },
            { y: '2016', a: 699, b: 62 },
            { y: '2017', a: 668, b: 60 }
        ],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Peminat', 'Diterima'],
        barColors: ['#23649E', '#65B5C2'],
        resize: true,
    });
}

if ($("#doughnutChartMorris").length) {
    Morris.Donut({
        element: 'doughnutChartMorris',
        data: [
            { label: "Laki-laki", value: 12 },
            { label: "Wanita", value: 30 }
        ],
        colors: ['#D17905', '#3A5276', '#3DC9B0'],
        resize: true,
    });
}


// Indonesia Vector Map with label data
let provinsiData = {
    "ID_ac": 0, //aceh
    "ID_ba": 0, //bali
    "ID_bb": 0, //bangka belitung
    "ID_be": 0, //bengkulu
    "ID_bt": 0, //banten
    "ID_go": 0, //gorontalo
    "ID_ja": 0, //jambi
    "ID_jb": 0, //jabar
    "ID_jl": 0, //jatim
    "ID_jk": 0, //jakarta
    "ID_jt": 3, //jateng
    "ID_kb": 0, //kalbar
    "ID_ki": 0, //kaltim
    "ID_kr": 0, //kep. riau
    "ID_ks": 0, //kalsel
    "ID_kt": 0, //kalteng
    "ID_ku": 0, //kalut
    "ID_la": 0, //lampung
    "ID_ma": 0, //maluku
    "ID_mu": 0, //maluku utara
    "ID_nb": 0, //NTB
    "ID_nt": 0, //NTT
    "ID_pa": 0, //papua
    "ID_pb": 0, //papua barat
    "ID_ri": 0, //riau
    "ID_sa": 9, //sulut
    "ID_sb": 0, //sumbar
    "ID_sg": 5, //sulteng
    "ID_sn": 164, //sulsel
    "ID_sr": 1, //sulbar
    "ID_ss": 0, //sumsel
    "ID_st": 0, //sulteng
    "ID_su": 0, //sumut
    "ID_yo": 0, //yogyakarta
    "tl": 0, //timor leste
    "my_sb": 0, //sabah malaysia
    "my_sr": 0, //serawak malaysia
    "bn": 0 //brunei
};

if ($("#indonesiaMap").length) {
    $('#indonesiaMap').vectorMap({
        map: 'id_ID',
        scaleColors: ['#C8EEFF', '#0071A4'],
        normalizeFunction: 'polynomial',
        hoverOpacity: 0.7,
        hoverColor: false,
        regionStyle: { initial: { fill: "#0D47A1" } },
        markerStyle: {
            initial: {
                fill: '#5c5c5c',
                stroke: '#efefef'
            }
        },
        backgroundColor: '#fff',
        series: {
            regions: [{
                values: provinsiData,
                scale: ['#0083be', '#005f8b'], //color scale
                normalizeFunction: 'polynomial'
            }]
        },
        onRegionTipShow: function(e, el, code) {
            el.html(el.html() + ': ' + provinsiData[code]);
        }
    });
}

// Login Page
let fullUrl = document.location.href;
let linkUrl = document.location.pathname.split('/');
let lenghtLink = linkUrl.length;
let currentPage = linkUrl[lenghtLink - 1];
if (currentPage == 'login' || currentPage == 'login.php') {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
    });
}