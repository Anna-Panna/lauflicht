let strip = neopixel.create(DigitalPin.P1, 32, NeoPixelMode.RGB)
strip.setBrightness(50)
basic.forever(function () {
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    strip.show()
    basic.pause(500)
    strip.rotate(1)
})
