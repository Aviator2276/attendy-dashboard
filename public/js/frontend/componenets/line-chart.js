const graphs = [
  'graph-homeLineGraph',
  'graph-classLineGraph',
  'graph-studentLineGraph',
];

export const graph = (graphID, options) => {
  const graphElement = `<div id="graph-${graphID}" class="overflow-visible"></div>`;
  setTimeout(() => {
    createChart(graphID, options);
  }, 1);
  return graphElement;
};

const createChart = (graphID, options) => {
  if (
    document.getElementById('graph-' + graphID) !== null &&
    typeof ApexCharts != 'undefined'
  ) {
    graphs['graph-' + graphID] = new ApexCharts(
      document.getElementById('graph-' + graphID),
      options
    );
    graphs['graph-' + graphID].render();
  }
};

export const updateChart = (graphID, options) => {
  if (document.getElementById('graph-' + graphID) !== null) {
    graphs['graph-' + graphID].updateOptions(options, true, true);
  }
};

export const deleteChart = (graphID) => {
  if (document.getElementById('graph-' + graphID) !== null) {
    graphs['graph' + graphID].destroy();
  }
};
