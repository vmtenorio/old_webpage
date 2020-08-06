// Bar chart
var yTicks = ["Just the basics", "Medium level", "Pretty good", "A Master!"];
//var backgroundColors = ["#b2d77f", "#a6d06c", "#9ac959", "#8ec247", "#81b43c", "#73a036", "#668c30", "#58792a", "#4a6624", "#3c531d"]; // Green
//var backgroundColors = ["#dddcf4", "#cbc9ee", "#b8b6e7", "#a6a3e1", "#9490da", "#817dd3", "#706bcc", "#5e58c5", "#4c46be", "#433ead"]; // Blue

var backgroundColors = ["#d67e8b", "#d06b79", "#c95868", "#c24558", "#b23b4d", "#9f3645", "#8b303d", "#782a35", "#65232d", "#511d25"]; // Red
var ctx = document.getElementById("skill-chart");
var chartConfig = {
  type: 'bar',
  data: {
    labels: ["Python", "Programming", "Unix / Linux", "Machine Learning", "PyTorch", "TensorFlow", "Keras", "Pandas and Data Analytics", "IAM Tools", "PAM Tools"],
    ids: ["python", "programming", "unix", "machineLearning", "pytorch", "tensorflow", "keras", "pandas", "iam", "pam"],
    datasets: [
      {
      backgroundColor: backgroundColors,
      data: [3.5, 2.8, 2.5, 2.1, 2.5, 1.8, 1.7, 3.1, 2.3, 3.3]
      }
    ]
  },
  options: {
    legend: { display: false },
    title: {
      display: false,
      text: 'Skill set'
    },
    scales: {
      xAxes: [{
        ticks: {
          // fontColor: 'white',
          fontSize: 14,
          fontFamily: 'Rowdies'
        },
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 4,
          callback: function(value, index, values) {
            return yTicks[value-1];
          },
          // fontColor: 'white',
          fontSize: 20,
          fontFamily: 'Rowdies'
        }
      }]
    },
    tooltips: {
      displayColors: false,
      callbacks: {
        label: function(tooltipItem, data) {
          return data.datasets[tooltipItem.datasetIndex].label;
        }
      }
    },
    onClick: handleClick,
  }
};

var chart = new Chart(ctx, chartConfig);
var lastElement;

function handleClick(evt) {
  var activeEl = chart.getElementAtEvent(evt);
  var idEl = chartConfig.data.ids[activeEl[0]._index];
  var builtId = "#" + idEl + "Collapse"
  $(builtId).collapse("toggle");
  if (typeof lastElement !== undefined && $(lastElement).is('.show')) {
    $(lastElement).collapse("toggle");
    console.log(lastElement);
  }
  lastElement = builtId;
  console.log("builtId: " + builtId);
}
