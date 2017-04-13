import { Component,ViewChild } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { Chart } from 'chart.js';

@Component({
  selector: 'page-app-home',
  templateUrl: 'app-home.html'
})
export class AppHomePage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public _menuController: MenuController) {}

  @ViewChild('doughnutCanvas') doughnutCanvas;
  @ViewChild('BarCanvas1') BarCanvas1;
  @ViewChild('BarCanvas2') BarCanvas2;
  @ViewChild('BarCanvas3') BarCanvas3; 

    doughnutChart: any;
    totalCaloriesPerDay: any;
    barChart1: any;
    barChart2: any;
    barChart3: any;
 
toggleMenu(){
  this._menuController.open();
}

  ionViewDidLoad() {
        this.totalCaloriesPerDay = this.navParams.data;
        let caloriesLeftForDay = this.totalCaloriesPerDay - 190;            //Hard Coded 190
        Chart.defaults.global.animation.easing = 'easeOutBounce';
        Chart.defaults.global.title.fullWidth = false;
        
        Chart.pluginService.register({
          beforeDraw: function(chart) {
            var width = chart.chart.width,
                height = chart.chart.height,
                ctx = chart.chart.ctx;

            ctx.restore();
            var fontSize = (height / 150).toFixed(2);
            ctx.font = fontSize + "em sans-serif";
            ctx.textBaseline = "middle";
            ctx.fillStyle = '#fff'

            var text = caloriesLeftForDay + '\n KCAL LEFT',
               textX = Math.round((width - ctx.measureText(text).width) / 2),
                textY = height / 2;
            if(chart.chart.config.type === "doughnut"){
               ctx.fillText(text, textX, textY);
               ctx.save();
            }    
           
          }
        });
        this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
            type: 'doughnut',
            data: {
                labels: ["Calories Consumed", "Total Calories to be Consumed"],
                datasets: [{
                    data: [190,this.totalCaloriesPerDay],                    //Hard Coded 190
                    strokeColor : "#ACC26D",
                    pointColor : "#fff",
                    pointStrokeColor : "#9DB86D",
                    backgroundColor: [
                        'rgba(255, 255, 255, 1)',
                        'rgba(0,0,0,.6)'
                    ],
                    borderWidth:[0,0],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB"
                    ]
                }]
            },
            options:{
              legend: {
               display: false
              },
               cutoutPercentage: 90,
               animation:{
                 segmentShowStroke : false,
                 animateRotate:true
            }
            }
 
        });

        Chart.defaults.horizontalBar.scales.xAxes = [{
                                                      type: 'linear',
                                                      position: 'top'
                                                  }]
         this.barChart1 =new Chart(this.BarCanvas1.nativeElement, {
              type: 'horizontalBar',
              data: {
                labels: ["Consumed","Total"],
                datasets: [{
                    data: [190],                    //Hard Coded 190
                    strokeColor : "#ACC26D",
                    pointColor : "#fff",
                    pointStrokeColor : "#9DB86D",
                    backgroundColor: [
                      'rgba(245, 61, 61, 1)'
                    ],
                    borderWidth:[0,0],
                    hoverBackgroundColor: [
                        "#36A2EB"
                    ]
                },
                {
                    data: [1000],                    //Hard Coded 190
                    strokeColor : "#ACC26D",
                    pointColor : "#fff",
                    pointStrokeColor : "#9DB86D",
                    backgroundColor: [
                       'rgba(0,0,0,.6)'
                    ],
                    borderWidth:[0,0],
                    hoverBackgroundColor: [
                        "#FF6384"
                    ]
                }]
            },
              options: {
              legend: {
                 display: false
              },
              scales:{
                  xAxes: [{
                    display: false,
                     stacked: true
                  }],
                 yAxes: [{
                      display: false,
                     stacked: true
                  }]
               } ,
               animation:{
                 segmentShowStroke : false,
                 animateRotate:true
            }
            }
        });

         this.barChart2 =new Chart(this.BarCanvas2.nativeElement, {

              type: 'horizontalBar',
              data: {
                labels: ["Consumed","Total"],
                datasets: [{
                    data: [256],                    //Hard Coded 190
                    strokeColor : "#ACC26D",
                    pointColor : "#fff",
                    pointStrokeColor : "#9DB86D",
                    backgroundColor: [
                      'rgba(245, 61, 61, 1)'
                    ],
                    borderWidth:[0,0],
                    hoverBackgroundColor: [
                        "#36A2EB"
                    ]
                },
                {
                    data: [1000],                    //Hard Coded 190
                    strokeColor : "#ACC26D",
                    pointColor : "#fff",
                    pointStrokeColor : "#9DB86D",
                    backgroundColor: [
                        'rgba(0,0,0,.6)'
                    ],
                    borderWidth:[0,0],
                    hoverBackgroundColor: [
                        "#FF6384"
                    ]
                }]
            },
              options: {
              legend: {
                 display: false
              },
              scales:{
                  xAxes: [{
                    display: false,
                     stacked: true
                  }],
                 yAxes: [{
                      display: false,
                     stacked: true
                  }]
               } ,
               animation:{
                 segmentShowStroke : false,
                 animateRotate:true
            }
            }
        });

         this.barChart3 =new Chart(this.BarCanvas3.nativeElement, { 

              type: 'horizontalBar',
              data: {
                labels: ["Consumed","Total"],
                datasets: [{
                    data: [895],                    //Hard Coded 190
                    strokeColor : "#ACC26D",
                    pointColor : "#fff",
                    pointStrokeColor : "#9DB86D",
                    backgroundColor: [
                        'rgba(245, 61, 61, 1)'
                    ],
                    borderWidth:[0,0],
                    hoverBackgroundColor: [
                        "#36A2EB"
                    ]
                },
                {
                    data: [1000],                    //Hard Coded 190
                    strokeColor : "#ACC26D",
                    pointColor : "#fff",
                    pointStrokeColor : "#9DB86D",
                    backgroundColor: [
                         'rgba(0,0,0,.6)'
                    ],
                    borderWidth:[0,0],
                    hoverBackgroundColor: [
                        "#FF6384"
                    ]
                }]
            },
              options: {
              legend: {
                 display: false
              },
              scales:{
                  xAxes: [{
                    display: false,
                     stacked: true
                  }],
                 yAxes: [{
                      display: false,
                     stacked: true
                  }]
               } ,
               animation:{
                 segmentShowStroke : false,
                 animateRotate:true
            }
            }
        });
  }
}
