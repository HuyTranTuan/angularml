import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import Chart from 'chart.js';

@Component({
  selector: "app-dashboard",
  styleUrls: ["dashboard.component.css"],
  templateUrl: "dashboard.component.html"
})
export class DashboardComponent implements OnInit {
  public canvas : any;
  public ctx;
  public datasets: any;
  public data: any;
  public myChartData;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  public clicked2: boolean = false;
  
  public dataTime: Array<String> = [];
  public dataAccuracy: Array<String> = [];
  public total_time = 0;
  public dataTrain: any;
  public dataTest: any;
  public hanhphuc = 0;
  public buonba = 0;
  public sohai = 0;
  public phanno = 0;
  public ngacnhien = 0;
  public thongtin = 0;
  public tong_train = 0;
  public tong_test = 0;
  public tong_all = 0;
  public xtrain = 0;
  public xtest = 0;
  public ytrain = 0;
  public ytest = 0;

  public bert_time = 23.633352279663086;
  public bert_acc = 0.36507936507936506;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://172.28.0.2').subscribe((res: any)=>{
      console.log(res);
    })
    this.http.get('http://127.0.0.1:5000/home').subscribe((res: any)=> {
      this.tong_train = res.tong_train;
      this.tong_test = res.tong_test;
      this.tong_all = res.tong_all;
      this.hanhphuc = res.hanhphuc;
      this.buonba = res.buonba;
      this.sohai = res.sohai;
      this.phanno = res.phanno;
      this.ngacnhien = res.ngacnhien;
      this.thongtin = res.thongtin;
      this.xtrain = res.xtrain;
      this.xtest = res.xtest;
      this.ytrain = res.ytrain;
      this.ytest = res.ytest;
      console.log (res)
      for(let i of res.time_accuracy){
        this.dataTime.push(i[0]);
        this.total_time += parseFloat(i[0]);
        this.dataAccuracy.push(i[1]);
      }
      this.total_time = this.total_time + this.bert_time;
      this.total_time = (Math.round(this.total_time));

      var gradientChartOptionsConfigurationWithTooltipBlue: any = {
        maintainAspectRatio: false,
        legend: {
          display: false
        },
  
        tooltips: {
          backgroundColor: '#f5f5f5',
          titleFontColor: '#333',
          bodyFontColor: '#666',
          bodySpacing: 4,
          xPadding: 12,
          mode: "nearest",
          intersect: 0,
          position: "nearest"
        },
        responsive: true,
        scales: {
          yAxes: [{
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: 'rgba(29,140,248,0.0)',
              zeroLineColor: "transparent",
            },
            ticks: {
              suggestedMin: 60,
              suggestedMax: 125,
              padding: 20,
              fontColor: "#2380f7"
            }
          }],
  
          xAxes: [{
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: 'rgba(29,140,248,0.1)',
              zeroLineColor: "transparent",
            },
            ticks: {
              padding: 20,
              fontColor: "#2380f7"
            }
          }]
        }
      };
  
      var gradientChartOptionsConfigurationWithTooltipPurple: any = {
        maintainAspectRatio: false,
        legend: {
          display: false
        },
  
        tooltips: {
          backgroundColor: '#f5f5f5',
          titleFontColor: '#333',
          bodyFontColor: '#666',
          bodySpacing: 4,
          xPadding: 12,
          mode: "nearest",
          intersect: 0,
          position: "nearest"
        },
        responsive: true,
        scales: {
          yAxes: [{
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: 'rgba(29,140,248,0.0)',
              zeroLineColor: "transparent",
            },
            ticks: {
              suggestedMin: 60,
              suggestedMax: 125,
              padding: 20,
              fontColor: "#9a9a9a"
            }
          }],
  
          xAxes: [{
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: 'rgba(225,78,202,0.1)',
              zeroLineColor: "transparent",
            },
            ticks: {
              padding: 20,
              fontColor: "#9a9a9a"
            }
          }]
        }
      };
  
      var gradientChartOptionsConfigurationWithTooltipRed: any = {
        maintainAspectRatio: false,
        legend: {
          display: false
        },
  
        tooltips: {
          backgroundColor: '#f5f5f5',
          titleFontColor: '#333',
          bodyFontColor: '#666',
          bodySpacing: 4,
          xPadding: 12,
          mode: "nearest",
          intersect: 0,
          position: "nearest"
        },
        responsive: true,
        scales: {
          yAxes: [{
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: 'rgba(29,140,248,0.0)',
              zeroLineColor: "transparent",
            },
            ticks: {
              suggestedMin: 0.1,
              suggestedMax: 50,
              padding: 20,
              fontColor: "#9a9a9a"
            }
          }],
  
          xAxes: [{
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: 'rgba(233,32,16,0.1)',
              zeroLineColor: "transparent",
            },
            ticks: {
              padding: 20,
              fontColor: "#9a9a9a"
            }
          }]
        }
      };
  
      var gradientChartOptionsConfigurationWithTooltipOrange: any = {
        maintainAspectRatio: false,
        legend: {
          display: false
        },
  
        tooltips: {
          backgroundColor: '#f5f5f5',
          titleFontColor: '#333',
          bodyFontColor: '#666',
          bodySpacing: 4,
          xPadding: 12,
          mode: "nearest",
          intersect: 0,
          position: "nearest"
        },
        responsive: true,
        scales: {
          yAxes: [{
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: 'rgba(29,140,248,0.0)',
              zeroLineColor: "transparent",
            },
            ticks: {
              suggestedMin: 50,
              suggestedMax: 110,
              padding: 20,
              fontColor: "#ff8a76"
            }
          }],
  
          xAxes: [{
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: 'rgba(220,53,69,0.1)',
              zeroLineColor: "transparent",
            },
            ticks: {
              padding: 20,
              fontColor: "#ff8a76"
            }
          }]
        }
      };
  
      var gradientChartOptionsConfigurationWithTooltipGreen: any = {
        maintainAspectRatio: false,
        legend: {
          display: false
        },
  
        tooltips: {
          backgroundColor: '#f5f5f5',
          titleFontColor: '#333',
          bodyFontColor: '#666',
          bodySpacing: 4,
          xPadding: 12,
          mode: "nearest",
          intersect: 0,
          position: "nearest"
        },
        responsive: true,
        scales: {
          yAxes: [{
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: 'rgba(29,140,248,0.0)',
              zeroLineColor: "transparent",
            },
            ticks: {
              suggestedMin: 0,
              suggestedMax: 1,
              padding: 20,
              fontColor: "#9e9e9e"
            }
          }],
  
          xAxes: [{
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: 'rgba(0,242,195,0.1)',
              zeroLineColor: "transparent",
            },
            ticks: {
              padding: 20,
              fontColor: "#9e9e9e"
            }
          }]
        }
      };
  
  
      var gradientBarChartConfiguration: any = {
        maintainAspectRatio: false,
        legend: {
          display: false
        },
  
        tooltips: {
          backgroundColor: '#f5f5f5',
          titleFontColor: '#333',
          bodyFontColor: '#666',
          bodySpacing: 4,
          xPadding: 12,
          mode: "nearest",
          intersect: 0,
          position: "nearest"
        },
        responsive: true,
        scales: {
          yAxes: [{
  
            gridLines: {
              drawBorder: false,
              color: 'rgba(29,140,248,0.1)',
              zeroLineColor: "transparent",
            },
            ticks: {
              suggestedMin: 60,
              suggestedMax: 120,
              padding: 20,
              fontColor: "#9e9e9e"
            }
          }],
  
          xAxes: [{
  
            gridLines: {
              drawBorder: false,
              color: 'rgba(29,140,248,0.1)',
              zeroLineColor: "transparent",
            },
            ticks: {
              padding: 20,
              fontColor: "#9e9e9e"
            }
          }]
        }
      };
  
      this.canvas = document.getElementById("chartLineRed");
      this.ctx = this.canvas.getContext("2d");
  
      var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, 'rgba(233,32,16,0.2)');
      gradientStroke.addColorStop(0.4, 'rgba(233,32,16,0.0)');
      gradientStroke.addColorStop(0, 'rgba(233,32,16,0)'); //red colors
  
      var data = {
        labels: ['Naive', 'Logistic', 'SVM', 'LSTM', 'BERT'],
        datasets: [{
          label: "Time",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: '#ec250d',
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: '#ec250d',
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: '#ec250d',
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [this.dataTime[0], this.dataTime[1], this.dataTime[2], this.dataTime[3], this.bert_time],
        }]
      };
  
      var myChart = new Chart(this.ctx, {
        type: 'line',
        data: data,
        options: gradientChartOptionsConfigurationWithTooltipRed
      });
  
  
      this.canvas = document.getElementById("chartLineGreen");
      this.ctx = this.canvas.getContext("2d");
  
  
      var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, 'rgba(66,134,121,0.15)');
      gradientStroke.addColorStop(0.4, 'rgba(66,134,121,0.0)'); //green colors
      gradientStroke.addColorStop(0, 'rgba(66,134,121,0)'); //green colors
  
      var data2 = {
        labels: ['Naive', 'Logistic', 'SVM', 'LSTM', 'BERT'],
        datasets: [{
          label: "Accuracy",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: '#00d6b4',
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: '#00d6b4',
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: '#00d6b4',
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [this.dataAccuracy[0], this.dataAccuracy[1], this.dataAccuracy[2], this.dataAccuracy[3], this.bert_acc],
        }]
      };
  
      var myChart = new Chart(this.ctx, {
        type: 'line',
        data: data2,
        options: gradientChartOptionsConfigurationWithTooltipGreen
  
      });
  
  
  
      var chart_labels = ['X_train', 'Y_train', 'X_test', 'Y_test'];
      this.datasets = [
        [this.xtrain, this.xtest, this.ytrain, this.ytest],
      ];
      this.data = this.datasets[0];
  
  
  
      this.canvas = document.getElementById("chartBig1");
      this.ctx = this.canvas.getContext("2d");
  
      var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, 'rgba(29,140,248,0.2)');
      gradientStroke.addColorStop(0.4, 'rgba(29,140,248,0.0)');
      gradientStroke.addColorStop(0, 'rgba(29,140,248,0)'); //blue colors
  
      var config = {
        type: 'bar',
        data: {
          labels: chart_labels,
          datasets: [{
            label: "Data",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: '#ecd90d',
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: '#ec250d',
            pointBorderColor: 'rgba(255,255,255,0)',
            pointHoverBackgroundColor: '#ec250d',
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: this.data,
          }]
        },
        options: gradientChartOptionsConfigurationWithTooltipRed
      };
      this.myChartData = new Chart(this.ctx, config);
  
    });
    
  }
  public updateOptions() {
    this.myChartData.data.datasets[0].data = this.data;
    this.myChartData.update();
  }
}
