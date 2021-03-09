colors = ["rgb(127, 17, 127)","rgb(24, 204, 204)"]
colorAxis = "Z";


colorscale = [
    ['0.0', 'rgb(165,0,38)'],
    ['0.111111111111', 'rgb(215,48,39)'],
    ['0.222222222222', 'rgb(244,109,67)'],
    ['0.333333333333', 'rgb(253,174,97)'],
    ['0.444444444444', 'rgb(254,224,144)'],
    ['0.555555555556', 'rgb(224,243,248)'],
    ['0.666666666667', 'rgb(171,217,233)'],
    ['0.777777777778', 'rgb(116,173,209)'],
    ['0.888888888889', 'rgb(69,117,180)'],
    ['1.0', 'rgb(49,54,149)']
]

function makeArr(startValue, stopValue, cardinality) {
    var arr = [];
    var step = (stopValue - startValue) / (cardinality - 1);
    for (var i = 0; i < cardinality; i++) {
      arr.push(startValue + (step * i));
    }
    return arr;
  }

function setAxis(btn){
    btn.className = btn.className + "axisButtonActive"
    colorAxis = btn.name;
}




function plotData() {
    Plotly.d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/3d-scatter.csv', function(err, rows){
        function unpack(rows, key) {
            return rows.map((row) => { return row[key]; });
        }
        let len = unpack(rows, 'x1').length
        // var trace1 = {
        //     x:unpack(rows, 'x1'), y: unpack(rows, 'y1'), z: unpack(rows, 'z1'),
        //     mode: 'markers',
        //     marker: {
        //         size: 3,
        //         line: {
        //             color: 'rgba(217, 217, 217, 0.14)',
        //             width: 0.5
        //         },
        //         opacity: 0.8
        //     },

        //     type: 'scatter3d'
        // };

        var trace2 = {
            x:unpack(rows, 'x1'), y: unpack(rows, 'y1'), z: unpack(rows, 'z1'),
            mode: 'markers',
            marker: {
                color: makeArr(0, 1, len),
                colorsclae: 'Rainbow',
                size: 3,
                symbol: 'circle',
                line: {
                    color: 'rgb(204, 204, 204)',
                    width: 1
                },
                opacity: 0.8
            },
            type: 'scatter3d'
        };

        var data = [trace2];
        var layout = {
            margin: {
                l: 0,
                r: 0,
                b: 0,
                t: 0
            }
        };
        Plotly.newPlot('plotPanel', data, layout);
    });
}



