var trace1 = {
    x: data.AADR,
    y: data.Death,
    mode: 'markers',
    type: 'scattergo',
    name: 'Population',
    text: data.State,
    marker: { size: data.Population,
        sizemode: "area",
        sizeref: 20000
     }
  };
  
  var data = [trace1];
  
  var layout = {
      title: "AADR vs Death by State",
    xaxis: {
      title: "Age Adjusted Death Rate (AADR)"
    },
    yaxis: {
      title: "No.of Deaths by State"
    },
  };
  
  Plotly.newPlot('plotb', data, layout);