const mudar = function (elemento) {
    var bg = document.querySelector('#background');
    if(elemento.value == "eclipse") {
        bg.style.background = "radial-gradient(circle at 100%, #333, #333 50%, #eee 50%, #333 75%)"
    } else if(elemento.value == "sorvete") {
        bg.style.background = "linear-gradient(to right, rgb(78, 29, 16) 33.3%, ivory 33.3%, ivory 66.6%, pink 66.6%)"
    } else if(elemento.value == "sol") {
        bg.style.background = "radial-gradient(circle at 30% 20%, #f69d3c 10%, #ebf8e1 40%, #3f87a6 50%)"
    } else if(elemento.value == "buraco") {
        bg.style.background = "black"
        bg.style.backgroundImage = "radial-gradient(circle at center, white 0%, #222 10%, black 60%)"
    } else if(elemento.value == "zebra") {
        bg.style.background = "#210070"
        bg.style.opacity = "0.8"
        bg.style.backgroundImage = "linear-gradient(135deg, #213970 25%, transparent 25%), linear-gradient(225deg, #213970 25%, transparent 25%), linear-gradient(45deg, #213970 25%, transparent 25%), linear-gradient(315deg, #213970 25%, transparent 25%)"
        bg.style.backgroundPosition = "20px 0, 20px 0, 0 0, 0 0"
        bg.style.backgroundSize = "40px 40px"
        bg.style.backgroundRepeat = "repeat"
    }
}