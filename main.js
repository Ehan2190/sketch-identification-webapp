function setup()
{
    canvas = createCanvas(900, 500);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
}

function clearCanvas()
{
    background("white");
}

function preload()
{
    classifier = ml5.imageClassifier('DoodleNet')
}

function draw()
{
    strokeWeight(13);
    stroke(0);
    if (mouseIsPressed)
    {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

function classifyCanvas()
{
    classifier.classify(canvas, gotResult);
}

function gotResult(error, results)
{
    if (error)
    {
        console.error(error);
    }
    console.log(results);
    document.getElementById('label').innerHTML = 'Label: ' + results[0].label;

    document.getElementById('confidence').innerHTML = 'confience: ' + Math.round(results[0].confidence * 100) + '%';
}
