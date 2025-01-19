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
function drawChart2(correctAnswer = 12) {
  const data = google.visualization.arrayToDataTable([
    ['Effort', 'Amount given'],
    ['Correct', correctAnswer],
    ['Wrong', 15 - correctAnswer], // Dynamically update the remainder
  ]);

  const options = {
    pieHole: 0.5,
    pieSliceTextStyle: { color: 'black' },
    slices: { 0: { color: '#4f63f5' }, 1: { color: '#e7eeff' } },
    legend: 'none',
  };

  const chart = new google.visualization.PieChart(document.getElementById('donut_single'));
  chart.draw(data, options);

  // Add target emoji directly
  const chartContainer = document.getElementById('donut_single');

  // Create a div for the emoji
  const emojiDiv = document.createElement('div');
  emojiDiv.style.position = 'absolute';
  emojiDiv.style.top = '50%';
  emojiDiv.style.left = '50%';
  emojiDiv.style.transform = 'translate(-50%, -50%)';
  emojiDiv.style.fontSize = '2.5rem';
  emojiDiv.textContent = '🎯'; // Add emoji to the div

  // Add the emoji div on top of the chart
  chartContainer.style.position = 'relative';
  chartContainer.appendChild(emojiDiv);

}

// Popup and Overlay Logic
const openPopupBtn = document.getElementById('openPopupBtn');
const closePopupBtn = document.getElementById('closePopupBtn');
const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');
const dataForm = document.getElementById('dataForm');
const displayRank = document.getElementById('displayRank');
const displayPercentile = document.getElementById('displayPercentile');
const displayCorrectAnswer = document.getElementById('displayCorrectAnswer');
const questionAnalysisScore = document.getElementById('questionAnalysisScore');
const comparisonGraphPercentile = document.getElementById('comparisonGraphPercentile');


// Open popup
openPopupBtn.addEventListener('click', () => {
  popup.style.display = 'block';
  overlay.style.display = 'block';
});

// Close popup - overlay
overlay.addEventListener('click', () => {
  popup.style.display = 'none';
  overlay.style.display = 'none';
});

// Close popup - cancelButton
closePopupBtn.addEventListener('click', ()=> {
  popup.style.display = 'none';
  overlay.style.display = 'none';
})

// Handle form submission
dataForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Retrieve input values
  const rankInput = document.getElementById('rank');
  const percentileInput = document.getElementById('percentile');
  const correctAnswerInput = document.getElementById('correctAnswer');

  const rank = rankInput.value;
  const percentile = percentileInput.value;
  const correctAnswer = parseInt(correctAnswerInput.value);

  // Update display
  displayRank.textContent = rank;
  displayPercentile.textContent = percentile;
  displayCorrectAnswer.textContent = correctAnswer;

  // Refresh donut chart with the updated score
  drawChart2(correctAnswer);

  // Refresh questionAnalysisScore with the updated score
  questionAnalysisScore.textContent = correctAnswer;

  // Refresh questionAnalysisScore with the updated score
  comparisonGraphPercentile.textContent = percentile;

  // Close popup
  popup.style.display = 'none';
  overlay.style.display = 'none';
});
