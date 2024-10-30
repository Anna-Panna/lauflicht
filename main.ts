input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    status = 1
    strip.setPixelColor(0, neopixel.rgb(randint(0, 80), randint(0, 80), randint(0, 80)))
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    status = 0
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
})
let status = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P1, 32, NeoPixelMode.RGB)
strip.setBrightness(50)
status = 0
strip.clear()
basic.forever(function () {
    if (status == 1 && input.isGesture(Gesture.TiltLeft)) {
        if (status == 1) {
            strip.show()
            basic.pause(200)
            strip.rotate(1)
        }
    }
    if (true) {
        if (status == 1 && input.isGesture(Gesture.TiltRight)) {
            if (status == 1) {
                strip.show()
                basic.pause(200)
                strip.rotate(-1)
            }
        }
    }
})
