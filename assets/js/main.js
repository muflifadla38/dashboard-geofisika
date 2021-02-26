// Doughat Chart.Js
if ($('#usersDoughnutChart').length) {
    let usersDoughnutChart = $('#usersDoughnutChart')[0].getContext('2d');
    let doughnutUsersChart = new Chart(usersDoughnutChart, {
        type: 'doughnut',
        data: {
            labels: ['Dosen', 'Staff', 'Mahasiswa'],
            datasets: [{
                label: 'Users',
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

if ($('#barChartMorris').length) {
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

if ($('#doughnutChartMorris').length) {
    Morris.Donut({
        element: 'doughnutChartMorris',
        data: [
            { label: 'Laki-laki', value: 12 },
            { label: 'Wanita', value: 30 }
        ],
        colors: ['#D17905', '#3A5276', '#3DC9B0'],
        resize: true,
    });
}


// Indonesia Vector Map with label data
let provinsiData = {
    'ID_ac': 0, //aceh
    'ID_ba': 0, //bali
    'ID_bb': 0, //bangka belitung
    'ID_be': 0, //bengkulu
    'ID_bt': 0, //banten
    'ID_go': 0, //gorontalo
    'ID_ja': 0, //jambi
    'ID_jb': 0, //jabar
    'ID_jl': 0, //jatim
    'ID_jk': 0, //jakarta
    'ID_jt': 3, //jateng
    'ID_kb': 0, //kalbar
    'ID_ki': 0, //kaltim
    'ID_kr': 0, //kep. riau
    'ID_ks': 0, //kalsel
    'ID_kt': 0, //kalteng
    'ID_ku': 0, //kalut
    'ID_la': 0, //lampung
    'ID_ma': 0, //maluku
    'ID_mu': 0, //maluku utara
    'ID_nb': 0, //NTB
    'ID_nt': 0, //NTT
    'ID_pa': 0, //papua
    'ID_pb': 0, //papua barat
    'ID_ri': 0, //riau
    'ID_sa': 9, //sulut
    'ID_sb': 0, //sumbar
    'ID_sg': 5, //sulteng
    'ID_sn': 164, //sulsel
    'ID_sr': 1, //sulbar
    'ID_ss': 0, //sumsel
    'ID_st': 0, //sulteng
    'ID_su': 0, //sumut
    'ID_yo': 0, //yogyakarta
    'tl': 0, //timor leste
    'my_sb': 0, //sabah malaysia
    'my_sr': 0, //serawak malaysia
    'bn': 0 //brunei
};

if ($('#indonesiaMap').length) {
    $('#indonesiaMap').vectorMap({
        map: 'id_ID',
        scaleColors: ['#C8EEFF', '#0071A4'],
        normalizeFunction: 'polynomial',
        hoverOpacity: 0.7,
        hoverColor: false,
        regionStyle: { initial: { fill: '#0D47A1' } },
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
        container.classList.add('right-panel-active');
    });

    signInButton.addEventListener('click', () => {
        container.classList.remove('right-panel-active');
    });
}

/*==== Sidebar toggle navigation show and hide =====*/
function toggle_menu(ele) {
    //close all ul with children class that are open except the one with the selected id
    $('.children').not(document.getElementById(ele)).slideUp("Normal");
    $('#' + ele).slideToggle('Normal');
    localStorage.setItem('lastTab', ele);
}

function pageLoad() {
    $.each($('.children'), function() {
        let ele = localStorage.getItem('lastTab');
        if ($(this).attr('id') == ele) {
            $('#' + ele).slideToggle('Normal');
        }
        //$('.children').hide();
    });
}
pageLoad();

// Arrow icon and add active class
$('#sidebar-wrapper ul li.parent').click(function() {
    $(this).addClass('active').siblings().removeClass('active');

    let findIcon = $('.active').find('#arrow-icon').hasClass('toggle-icon');
    let iconElement = $('.active #arrow-icon');
    if (findIcon) {
        iconElement.removeClass('toggle-icon');
    } else
    if (!findIcon) {
        iconElement.addClass('toggle-icon');
    }

    let listParent = $('.active').siblings().not('.child');
    if (listParent.hasClass('parent')) {
        resetArrow = listParent.find('#arrow-icon');
        resetArrow.removeClass('toggle-icon');
    }
});
/*==== Sidebar toggle navigation show and hide =====*/


/*==== Statistik Dosen Page =====*/
// Big Dashboard Dosen
if ($('#dosenBarChartMorris').length) {
    Morris.Bar({
        element: 'dosenBarChartMorris',
        data: [
            { y: 'Guru Besar', a: Math.floor(Math.random() * 50) },
            { y: 'Lektor Kepala', a: Math.floor(Math.random() * 50) },
            { y: 'Asisten Ahli', a: Math.floor(Math.random() * 50) },
            { y: 'Belum Menjabat', a: Math.floor(Math.random() * 50) }
        ],
        xkey: 'y',
        ykeys: ['a'],
        labels: ['Jumlah: '],
        barColors: ['#23649E'],
        resize: true
    });
}

// Golongan Dosen
if ($('#golonganDosenBarChart').length) {
    Morris.Bar({
        element: 'golonganDosenBarChart',
        data: [
            { y: 'III/a', a: Math.floor(Math.random() * 50) },
            { y: 'III/b', a: Math.floor(Math.random() * 50) },
            { y: 'III/c', a: Math.floor(Math.random() * 50) },
            { y: 'III/d', a: Math.floor(Math.random() * 50) },
            { y: 'IV/a', a: Math.floor(Math.random() * 50) },
            { y: 'IV/b', a: Math.floor(Math.random() * 50) },
            { y: 'IV/c', a: Math.floor(Math.random() * 50) },
            { y: 'IV/d', a: Math.floor(Math.random() * 50) },
            { y: 'IV/e', a: Math.floor(Math.random() * 50) }
        ],
        xkey: 'y',
        ykeys: ['a'],
        labels: ['Jumlah: '],
        barColors: ['#23649E'],
        resize: true
    });
}

// Pendidikan Dosen
if ($('#pendidikanDosenDonut').length) {
    Morris.Donut({
        element: 'pendidikanDosenDonut',
        data: [
            { label: 'Professor', value: Math.floor(Math.random() * 50) },
            { label: 'Doktor', value: Math.floor(Math.random() * 50) },
            { label: 'Magister', value: Math.floor(Math.random() * 50) }
        ],
        colors: ['#D17905', '#3A5276', '#3DC9B0'],
        resize: true
    });
}

//Usia Dosen
if ($('#usiaDosenBarChart').length) {
    Morris.Bar({
        element: 'usiaDosenBarChart',
        data: [
            { y: '< 35', a: Math.floor(Math.random() * 50) },
            { y: '35 - 40', a: Math.floor(Math.random() * 50) },
            { y: '41 - 45', a: Math.floor(Math.random() * 50) },
            { y: '46 - 50', a: Math.floor(Math.random() * 50) },
            { y: '51 - 55', a: Math.floor(Math.random() * 50) },
            { y: '56 - 60', a: Math.floor(Math.random() * 50) },
            { y: '> 60', a: Math.floor(Math.random() * 50) }
        ],
        xkey: 'y',
        ykeys: ['a'],
        labels: ['Jumlah: '],
        barColors: ['#23649E'],
        resize: true
    });
}
/*==== Statistik Dosen Page =====*/

/*==== Peta Depatemen Page =====*/
if ($('#departemen-map').length) {
    let departemenMap = L.map('departemen-map').setView([-5.132032, 119.486547], 20);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 25,
        id: 'mapbox/streets-v11', //mapbox/satellite-v9
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiZ2VvZmlzaWthMzgiLCJhIjoiY2tsbDJ6NnNjMDdkMzJ1bnpqMzIxOXZseiJ9.k7XxJ1ma-Bgjcyj_gYFx-Q'
    }).addTo(departemenMap);

    let markerDepartemen = L.marker([-5.132032, 119.486547]).addTo(departemenMap);
    markerDepartemen.bindPopup("<b>Departemen Geofisika</b><br>").openPopup();

    // Check LatLong
    /*
    function onMapClick(e) {
        alert("You clicked the map at " + e.latlng);
    }

    departemenMap.on('click', onMapClick);*/
}
/*==== Peta Depatemen Page =====*/