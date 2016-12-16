var graf;
$('.plot').click(function (e) {
  e.preventDefault()
  clearInterval(graf);
    console.log(graf);
    //  255, 255, 255, 0.8 "rgba(255,255,255, 0)"
    var options = {
    series: {
        color: "#423189",
        lines: { show: true, lineWidth: 3, fill: false, fillColor: "#00F" },
        points: { show: false, fill: false }
    }
    };
    var x = parseFloat($('.from').val());
    const x1 = x;
    var i = x;
    const x2 = parseFloat($('.to').val());
    const fun = ($('.fun').val());
    var points = [x, eval(fun)];

    //console.log(points);
    //console.log(fun);
    if (i < x2)
    {
    graf=setInterval(function () {
        $.plot($('.graph'), [{label: fun, data: points}], options);
        x = x + (x2 - x1) / 100;
       // console.log(points);
        if (points.length > 100) {
            points.splice(1, 1)
        }
        points.push([x, eval(fun)])
    }, 100);
     //   i += parseFloat(1)
    }
    else
    {
        clearInterval(graf);
    }
});