const graphs = ['graph-homeLineGraph'];

export const graph = (graphID, options) => {
  const graphElement = `<div id="graph-${graphID}" class=""></div>`;
  setTimeout(() => {
    createChart(graphID, options);
  }, 1);
  return graphElement;
};

const createChart = (graphID, options) => {
  if (
    document.getElementById('graph-' + graphID) &&
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
  if (document.getElementById('graph-' + graphID)) {
    graphs['graph-' + graphID].updateOptions(options, true, true);
  }
};

export const deleteChart = (graphID) => {
  if (document.getElementById('graph-' + graphID)) {
    graphs['graph' + graphID].destroy();
  }
};
