// Load Google Charts for Line Chart
google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawChart2);

// Line Chart Function
function drawChart() {
  const data = new google.visualization.DataTable();
  data.addColumn('number', 'X');
  data.addColumn('number', 'Percentile');

  data.addRows([
    [0, 0], [5, 2], [10, 8], [15, 15],
    [20, 25], [25, 30], [30, 40], [35, 50],
    [40, 65], [45, 80], [50, 90], [55, 85],
    [60, 75], [65, 65], [70, 50], [75, 35], [100, 3],
  ]);

  const options = {
    hAxis: { ticks: [0, 25, 50, 75, 100], gridlines: { color: 'none' }, baselineColor: 'none' },
    vAxis: { gridlines: { color: 'none' }, baselineColor: 'none', textPosition: 'none' },
    legend: 'none',
    curveType: 'function',
    pointSize: 3,
    lineWidth: 1.2,
  };

  const chart = new google.visualization.LineChart(document.getElementById('line_top_x'));
  chart.draw(data, options);
}

// Donut Chart Function
function drawChart2(correctAnswer = 0) {
  const data = google.visualization.arrayToDataTable([
    ['Effort', 'Amount given'],
    ['My all', correctAnswer],
    ['Remaining', 15 - correctAnswer], // Dynamically update the remainder
  ]);

  const options = {
    pieHole: 0.5,
    pieSliceTextStyle: { color: 'black' },
    slices: { 0: { color: '#4f63f5' }, 1: { color: '#e7eeff' } },
    legend: 'none',
  };

  const chart = new google.visualization.PieChart(document.getElementById('donut_single'));
  chart.draw(data, options);
}

// Popup and Overlay Logic
const openPopupBtn = document.getElementById('openPopupBtn');
const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');
const dataForm = document.getElementById('dataForm');
const displayRank = document.getElementById('displayRank');
const displayPercentile = document.getElementById('displayPercentile');
const displayCorrectAnswer = document.getElementById('displayCorrectAnswer');

// Open popup
openPopupBtn.addEventListener('click', () => {
  popup.style.display = 'block';
  overlay.style.display = 'block';
});

// Close popup
overlay.addEventListener('click', () => {
  popup.style.display = 'none';
  overlay.style.display = 'none';
});

// Handle form submission
dataForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Retrieve input values
  const rankInput = document.getElementById('rank');
  const percentileInput = document.getElementById('percentile');
  const correctAnswerInput = document.getElementById('correctAnswer');

  const rank = rankInput.value;
  const percentile = percentileInput.value;
  const correctAnswer = parseInt(correctAnswerInput.value, 10) || 0;

  // Update display
  displayRank.textContent = rank;
  displayPercentile.textContent = percentile;
  displayCorrectAnswer.textContent = correctAnswer;

  // Refresh donut chart with the updated score
  drawChart2(correctAnswer);

  // Close popup
  popup.style.display = 'none';
  overlay.style.display = 'none';
});
