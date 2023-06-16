// item,i so jonhathan will shut up

const GrayscaleSlider = document.getElementById("GrayscaleSlider")
const SaturationSlider = document.getElementById("SaturationSlider")
const ImageSettings = document.getElementById("ImageSettings")

const ImageDisplay = document.getElementById("ImageDisplay")

let ImageSaturate = "saturate(100%)"
let ImageGrayscale = "grayscale(0%)"
let ImageBlur = "blur(0px)"
let ImageBrightness = "brightness(100%)"
let ImageHue = "hue-rotate(0deg)"
let ImageContrast = "contrast(100%)"



let Filters = ImageGrayscale + " " + ImageSaturate + " " + ImageBlur + " " + ImageBrightness + " " + ImageHue + " " + ImageContrast

let canvas = document.getElementById('canvas')

let Context = canvas.getContext('2d')


document.getElementById("ImageDisplay").onload = function() {

    Context.filter = Filters

    canvas.width = ImageDisplay.width
    canvas.height = ImageDisplay.height

    Context.drawImage(ImageDisplay, 0, 0, ImageDisplay.width, ImageDisplay.height)
    canvas.crossOrigin = "anonymous"
    
    console.log("loaded!")
    }

UpdateImage()

function readURL(FileInput) {
    //Display Image & Settings
    ImageSettings.style.display = "block"

    ImageDisplay.src = URL.createObjectURL(event.target.files[0]);
  }


function UpdateImage() {
    //Update Image Settings
    ImageDisplay.style.filter = ImageGrayscale + " " + ImageSaturate + " " + ImageBlur + " " + ImageBrightness + " " + ImageHue + " " + ImageContrast

    let Filters = ImageGrayscale + " " + ImageSaturate + " " + ImageBlur + " " + ImageBrightness + " " + ImageHue + " " + ImageContrast

    
    canvas.width = ImageDisplay.width
    canvas.height = ImageDisplay.height

    Context.filter = Filters;
    Context.drawImage(ImageDisplay, 0, 0, ImageDisplay.width, ImageDisplay.height);

    console.log(ImageDisplay.width + " - " + ImageDisplay.height)

    console.log(Context.filter)
}

// Filters
// All the functions are essentially the same, just different variables


//Grayscale
GrayscaleSlider.oninput = function() {
    ImageGrayscale = "grayscale(" + this.value + "%)"
    document.getElementById("GrayscaleDisplay").value = this.value + "%"

    UpdateImage()
}

GrayscaleDisplay.oninput = function() {
    ImageGrayscale = "grayscale(" + this.value + ")"
    GrayscaleSlider.value = this.value.replace(/\D/g, "")

    UpdateImage()
}


//Saturation
SaturationSlider.oninput = function() {
    ImageSaturate = "saturate(" + this.value + "%)"
    
        document.getElementById("SaturationDisplay").value = this.value + "%"
    
    UpdateImage()
}

SaturationDisplay.oninput = function() {
    ImageSaturate = "saturate(" + this.value + ")"
    SaturationSlider.value = this.value.replace(/\D/g, "")

    UpdateImage()
}


//Blur
BlurSlider.oninput = function() {
    ImageBlur = "blur(" + (this.value)/(10) + "px)"
    document.getElementById("BlurDisplay").value = (this.value)/(10) + "px"
    
    UpdateImage()
}

BlurDisplay.oninput = function() {
    ImageBlur = "blur(" + this.value + ")"
    BlurSlider.value = this.value.replace(/\D/g, "")
    
    UpdateImage()
}


//Brightness
BrightnessSlider.oninput = function() {
    ImageBrightness = "brightness(" + this.value + "%)"
    document.getElementById("BrightnessDisplay").value = this.value + "%"
    
    UpdateImage()
}

BrightnessDisplay.oninput = function() {
    ImageBrightness = "brightness(" + this.value + ")"
    BrightnessSlider.value = this.value.replace(/\D/g, "")
    
    UpdateImage()
}


//Hue Rotate
HueSlider.oninput = function() {
    ImageHue = "hue-rotate(" + this.value + "deg)"
    document.getElementById("HueDisplay").value = this.value + "deg"
    
    UpdateImage()
}

HueDisplay.oninput = function() {
    ImageHue = "hue-rotate(" + this.value + ")"
    HueSlider.value = this.value.replace(/\D/g, "")
    
    UpdateImage()
}


//Contrast
ContrastSlider.oninput = function() {
    ImageContrast = "contrast(" + this.value + "%)"
    document.getElementById("ContrastDisplay").value = this.value + "%"
    
    UpdateImage()
}

ContrastDisplay.oninput = function() {
    ImageContrast = "contrast(" + this.value + ")"
    ContrastSlider.value = this.value.replace(/\D/g, "")
    
    UpdateImage()
}



function DownloadImage() {
//Display the Edited Image and Info

document.getElementById("!Canvas").innerHTML = ""
document.getElementById("CanvasDiv").style.display = "inline"

document.getElementById("CSSFiltersSingle").innerHTML = 'style="filter: ' + Context.filter + '"'
document.getElementById("CSSFiltersAll").innerHTML = Context.filter.replaceAll(" ", "<br>")

window.scroll(0, 0)
}