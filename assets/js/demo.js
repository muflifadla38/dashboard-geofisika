demo = {
    initPickColor: function() {
        $('.pick-class-label').click(function() {
            let new_class = $(this).attr('new-class');
            let old_class = $('#display-buttons').attr('data-class');
            let display_div = $('#display-buttons');
            if (display_div.length) {
                let display_buttons = display_div.find('.btn');
                display_buttons.removeClass(old_class);
                display_buttons.addClass(new_class);
                display_div.attr('data-class', new_class);
            }
        });
    },

    initDocChart: function() {
        chartColor = "#FFFFFF";

        // General configuration for the charts with Line gradientStroke
        gradientChartOptionsConfiguration = {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            tooltips: {
                bodySpacing: 4,
                mode: "nearest",
                intersect: 0,
                position: "nearest",
                xPadding: 10,
                yPadding: 10,
                caretPadding: 10
            },
            responsive: true,
            scales: {
                yAxes: [{
                    display: 0,
                    gridLines: 0,
                    ticks: {
                        display: false
                    },
                    gridLines: {
                        zeroLineColor: "transparent",
                        drawTicks: false,
                        display: false,
                        drawBorder: false
                    }
                }],
                xAxes: [{
                    display: 0,
                    gridLines: 0,
                    ticks: {
                        display: false
                    },
                    gridLines: {
                        zeroLineColor: "transparent",
                        drawTicks: false,
                        display: false,
                        drawBorder: false
                    }
                }]
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 15,
                    bottom: 15
                }
            }
        };

        if ($("#lineChartExample").length) {
            ctx = document.getElementById('lineChartExample').getContext("2d");

            gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
            gradientStroke.addColorStop(0, '#80b6f4');
            gradientStroke.addColorStop(1, chartColor);

            gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
            gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
            gradientFill.addColorStop(1, "rgba(249, 99, 59, 0.40)");

            myChart = new Chart(ctx, {
                type: 'line',
                responsive: true,
                data: {
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    datasets: [{
                        label: "Active Users",
                        borderColor: "#f96332",
                        pointBorderColor: "#FFF",
                        pointBackgroundColor: "#f96332",
                        pointBorderWidth: 2,
                        pointHoverRadius: 4,
                        pointHoverBorderWidth: 1,
                        pointRadius: 4,
                        fill: true,
                        backgroundColor: gradientFill,
                        borderWidth: 2,
                        data: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 630]
                    }]
                },
                options: gradientChartOptionsConfiguration
            });
        }
    },

    initDashboardPageCharts: function() {
        chartColor = "#FFFFFF";

        // General configuration for the charts with Line gradientStroke
        gradientChartOptionsConfiguration = {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            tooltips: {
                bodySpacing: 4,
                mode: "nearest",
                intersect: 0,
                position: "nearest",
                xPadding: 10,
                yPadding: 10,
                caretPadding: 10
            },
            responsive: 1,
            scales: {
                yAxes: [{
                    display: 0,
                    gridLines: 0,
                    ticks: {
                        display: false
                    },
                    gridLines: {
                        zeroLineColor: "transparent",
                        drawTicks: false,
                        display: false,
                        drawBorder: false
                    }
                }],
                xAxes: [{
                    display: 0,
                    gridLines: 0,
                    ticks: {
                        display: false
                    },
                    gridLines: {
                        zeroLineColor: "transparent",
                        drawTicks: false,
                        display: false,
                        drawBorder: false
                    }
                }]
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 15,
                    bottom: 15
                }
            }
        };

        gradientChartOptionsConfigurationWithNumbersAndGrid = {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            tooltips: {
                bodySpacing: 4,
                mode: "nearest",
                intersect: 0,
                position: "nearest",
                xPadding: 10,
                yPadding: 10,
                caretPadding: 10
            },
            responsive: true,
            scales: {
                yAxes: [{
                    gridLines: 0,
                    gridLines: {
                        zeroLineColor: "transparent",
                        drawBorder: false
                    }
                }],
                xAxes: [{
                    display: 0,
                    gridLines: 0,
                    ticks: {
                        display: false
                    },
                    gridLines: {
                        zeroLineColor: "transparent",
                        drawTicks: false,
                        display: false,
                        drawBorder: false
                    }
                }]
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 15,
                    bottom: 15
                }
            }
        };

        if ($("#bigDashboardChart").length) {
            let ctx = document.getElementById('bigDashboardChart').getContext("2d");

            let gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
            gradientStroke.addColorStop(0, '#80b6f4');
            gradientStroke.addColorStop(1, chartColor);

            let gradientFill = ctx.createLinearGradient(0, 200, 0, 50);
            gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
            gradientFill.addColorStop(1, "rgba(255, 255, 255, 0.24)");


            let tahun = ['2013', '2014', '2015', '2016', '2017'];
            let jumlahAktif = [57, 58, 48, 59, 58];
            let priaAktif = [17, 15, 8, 11, 18];
            let wanitaAktif = [];
            for (let i = 0; i < jumlahAktif.length; i++) {
                wanitaAktif[i] = jumlahAktif[i] - priaAktif[i];
            }

            let myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: tahun,
                    datasets: [{
                        label: "Jumlah",
                        borderColor: chartColor,
                        pointBorderColor: chartColor,
                        pointBackgroundColor: "#1e3d60",
                        pointHoverBackgroundColor: "#1e3d60",
                        pointHoverBorderColor: chartColor,
                        pointBorderWidth: 1,
                        pointHoverRadius: 7,
                        pointHoverBorderWidth: 2,
                        pointRadius: 5,
                        fill: true,
                        backgroundColor: gradientFill,
                        borderWidth: 2,
                        data: jumlahAktif
                    }, {
                        label: "Laki-laki",
                        borderColor: chartColor,
                        pointBorderColor: chartColor,
                        pointBackgroundColor: "#3a76ba ",
                        pointHoverBackgroundColor: "#3a76ba ",
                        pointHoverBorderColor: chartColor,
                        pointBorderWidth: 1,
                        pointHoverRadius: 7,
                        pointHoverBorderWidth: 2,
                        pointRadius: 5,
                        fill: true,
                        backgroundColor: gradientFill,
                        borderWidth: 2,
                        data: priaAktif
                    }, {
                        label: "Perempuan",
                        borderColor: chartColor,
                        pointBorderColor: chartColor,
                        pointBackgroundColor: "#2c598d",
                        pointHoverBackgroundColor: "#2c598d",
                        pointHoverBorderColor: chartColor,
                        pointBorderWidth: 1,
                        pointHoverRadius: 7,
                        pointHoverBorderWidth: 2,
                        pointRadius: 5,
                        fill: true,
                        backgroundColor: gradientFill,
                        borderWidth: 2,
                        data: wanitaAktif
                    }]
                },
                options: {
                    layout: {
                        padding: {
                            left: 20,
                            right: 20,
                            top: 0,
                            bottom: 40
                        }
                    },
                    maintainAspectRatio: false,
                    tooltips: {
                        backgroundColor: '#fff',
                        titleFontColor: '#333',
                        bodyFontColor: '#666',
                        bodySpacing: 4,
                        xPadding: 12,
                        mode: "nearest",
                        intersect: 0,
                        position: "nearest"
                    },
                    legend: {
                        position: "bottom",
                        fillStyle: "#FFF",
                        display: false
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                fontColor: "rgba(255,255,255,0.4)",
                                fontStyle: "bold",
                                beginAtZero: true,
                                maxTicksLimit: 5,
                                padding: 10
                            },
                            gridLines: {
                                drawTicks: true,
                                drawBorder: false,
                                display: true,
                                color: "rgba(255,255,255,0.1)",
                                zeroLineColor: "transparent"
                            }

                        }],
                        xAxes: [{
                            gridLines: {
                                zeroLineColor: "transparent",
                                display: false,

                            },
                            ticks: {
                                padding: 10,
                                fontColor: "rgba(255,255,255,0.4)",
                                fontStyle: "bold"
                            }
                        }]
                    }
                }
            });

            let cardStatsMiniLineColor = "#fff",
                cardStatsMiniDotColor = "#fff";
        }

        if ($("#lineChartExampleWithNumbersAndGrid").length) {
            ctx = document.getElementById('lineChartExampleWithNumbersAndGrid').getContext("2d");

            gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
            gradientStroke.addColorStop(0, '#18ce0f');
            gradientStroke.addColorStop(1, chartColor);

            gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
            gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
            gradientFill.addColorStop(1, hexToRGB('#18ce0f', 0.4));

            myChart = new Chart(ctx, {
                type: 'line',
                responsive: true,
                data: {
                    labels: ["12pm,", "3pm", "6pm", "9pm", "12am", "3am", "6am", "9am"],
                    datasets: [{
                        label: "Email Stats",
                        borderColor: "#18ce0f",
                        pointBorderColor: "#FFF",
                        pointBackgroundColor: "#18ce0f",
                        pointBorderWidth: 2,
                        pointHoverRadius: 4,
                        pointHoverBorderWidth: 1,
                        pointRadius: 4,
                        fill: true,
                        backgroundColor: gradientFill,
                        borderWidth: 2,
                        data: [40, 500, 650, 700, 1200, 1250, 1300, 1900]
                    }]
                },
                options: gradientChartOptionsConfigurationWithNumbersAndGrid
            });
        }

        if ($("#barChartSimpleGradientsNumbers").length) {
            let e = document.getElementById("barChartSimpleGradientsNumbers").getContext("2d");

            gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
            gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
            gradientFill.addColorStop(1, hexToRGB('#2CA8FF', 0.6));

            let a = {
                type: "bar",
                data: {
                    labels: ["2015", "2016", "2017", "2018", "2019", "2020"],
                    datasets: [{
                        label: "Active Countries",
                        backgroundColor: gradientFill,
                        borderColor: "#2CA8FF",
                        pointBorderColor: "#FFF",
                        pointBackgroundColor: "#2CA8FF",
                        pointBorderWidth: 2,
                        pointHoverRadius: 4,
                        pointHoverBorderWidth: 1,
                        pointRadius: 4,
                        fill: true,
                        borderWidth: 1,
                        data: [54, 54, 53, 58, 56, 59]
                    }]
                },
                options: {
                    maintainAspectRatio: false,
                    legend: {
                        display: false
                    },
                    tooltips: {
                        bodySpacing: 4,
                        mode: "nearest",
                        intersect: 0,
                        position: "nearest",
                        xPadding: 10,
                        yPadding: 10,
                        caretPadding: 10
                    },
                    responsive: 1,
                    scales: {
                        yAxes: [{
                            gridLines: 0,
                            gridLines: {
                                zeroLineColor: "transparent",
                                drawBorder: false
                            }
                        }],
                        xAxes: [{
                            display: 0,
                            gridLines: 0,
                            ticks: {
                                display: false
                            },
                            gridLines: {
                                zeroLineColor: "transparent",
                                drawTicks: false,
                                display: false,
                                drawBorder: false
                            }
                        }]
                    },
                    layout: {
                        padding: {
                            left: 0,
                            right: 0,
                            top: 15,
                            bottom: 15
                        }
                    }
                }
            };
        }

        //Line Chart
        if ($("#lineChartExample").length) {
            ctx = document.getElementById('lineChartExample').getContext("2d");

            gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
            gradientStroke.addColorStop(0, '#80b6f4');
            gradientStroke.addColorStop(1, chartColor);

            gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
            gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
            gradientFill.addColorStop(1, "rgba(249, 99, 59, 0.40)");

            myChart = new Chart(ctx, {
                type: 'line',
                responsive: true,
                data: {
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    datasets: [{
                        label: "Active Users",
                        borderColor: "#f96332",
                        pointBorderColor: "#FFF",
                        pointBackgroundColor: "#f96332",
                        pointBorderWidth: 2,
                        pointHoverRadius: 4,
                        pointHoverBorderWidth: 1,
                        pointRadius: 4,
                        fill: true,
                        backgroundColor: gradientFill,
                        borderWidth: 2,
                        data: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 630]
                    }]
                },
                options: gradientChartOptionsConfiguration
            });

            let viewsChart = new Chart(e, a);
        }

    }
};