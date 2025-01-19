// Placeholder for future interactivity
// document.addEventListener("DOMContentLoaded", () => {
//     console.log("Page loaded and ready!");
//   });

// --------
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'X');
    data.addColumn('number', 'Percentile');

    data.addRows([
        [0, 0],
        [5, 2],
        [10, 8],
        [15, 15],
        [20, 25],
        [25, 30],
        [30, 40],
        [35, 50],
        [40, 65],
        [45, 80],
        [50, 90],
        [55, 85],
        [60, 75],
        [65, 65],
        [70, 50],
        [75, 35],
        [100, 3]
    ]);

    var options = {
        // title: 'Your Percentile Distribution',
        hAxis: {
            // title: 'Percentile',
            ticks: [0, 25, 50, 75, 100],
            gridlines: { color: 'none' },
            baselineColor: 'none',
        },
        vAxis: {
            // title: 'Score',
            gridlines: { color: 'none' },
            baselineColor: 'none',
            textPosition: 'none',
        },
        // width: 900,
        // height: 500,
        legend: 'none',
        curveType: 'function', // Smoothens the line
        pointSize: 3, // Visible points
        lineWidth: 1.2, // Thickness of the line
    };

    var chart = new google.visualization.LineChart(document.getElementById('line_top_x'));
    chart.draw(data, options);
}

// --------
google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawChart2);

function drawChart2() {
  // Define the data
  const data = google.visualization.arrayToDataTable([
    ['Effort', 'Amount given'],
    ['My all', 80],
    ['Remaining', 20] // Placeholder for the rest of the chart
  ]);

  // Define the options
  const options = {
    pieHole: 0.5,
    pieSliceTextStyle: {
      color: 'black',
    },
    slices: {
      0: { color: '#4f63f5' }, // Main slice color
      1: { color: '#e7eeff' } // Color for the remaining chart
    },
    legend: 'none',
  };

  // Draw the chart
  const chart = new google.visualization.PieChart(document.getElementById('donut_single'));
  chart.draw(data, options);
}

// ---------

// // Elements
// const updateButton = document.getElementById("updateButton");
// const updateModal = document.getElementById("updateModal");
// const cancelButton = document.getElementById("cancelButton");
// const updateForm = document.getElementById("updateForm");
// const rankDisplay = document.getElementById("rank");
// const percentileDisplay = document.getElementById("percentile");
// const scoreDisplay = document.getElementById("score");

// // Show modal
// updateButton.addEventListener("click", () => {
//   updateModal.style.display = "flex";
// });

// // Hide modal
// cancelButton.addEventListener("click", () => {
//   updateModal.style.display = "none";
// });

// // Update data on save
// updateForm.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const rank = document.getElementById("rankInput").value;
//   const percentile = document.getElementById("percentileInput").value;
//   const score = document.getElementById("scoreInput").value;

//   // Update the main page
//   rankDisplay.textContent = rank;
//   percentileDisplay.textContent = `${percentile}%`;
//   scoreDisplay.textContent = `${score} / 15`;

//   // Close the modal
//   updateModal.style.display = "none";
// });

