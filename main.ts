input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    status = 1
    basic.showNumber(status)
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    status = 0
    basic.showNumber(status)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
})
let status = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P1, 32, NeoPixelMode.RGB)
strip.setBrightness(50)
status = 0
basic.forever(function () {
    if (status == 1) {
        strip.show()
        basic.pause(200)
        strip.rotate(1)
    }
    for (let Index = 0; Index <= 32; Index++) {
    	
    }
})
