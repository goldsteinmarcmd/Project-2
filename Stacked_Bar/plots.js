
// Create the Traces
var trace1 = {
    x: data.Location,
    y: data.Employer,
    type: "bar",
    name: "Employer",
    
};

var trace2 = {
    x: data.Location,
    y: data.Medicaid,
    type: "bar",
    name: "Medicaid",
};

var trace3 = {
    x: data.Location,
    y: data.Medicare,
    type: "bar",
    name: "Medicare",
};

var trace4 = {
    x: data.Location,
    y: data.NonGroup,
    type: "bar",
    name: "NonGroup",
};

var trace5 = {
    x: data.Location,
    y: data.Uninsured,
    type: "bar",
    name: "Uninsured",
};


// Create the data array for the plot
var plotData = [
    trace1, trace2, trace3, trace4, trace5
];

// Define the plot layout
var layout = {
    title: "Insurance Information by State",
    xaxis: { title: "State" },
    yaxis: { title: "Total Population" },
    barmode: "stack"
};

// Plot the chart to a div tag with id "plot"
Plotly.newPlot("plot", plotData, layout);
