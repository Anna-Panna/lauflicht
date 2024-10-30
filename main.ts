let strip = neopixel.create(DigitalPin.P0, 32, NeoPixelMode.RGB)
strip.setBrightness(100)
basic.forever(function () {
    basic.pause(500)
    strip.show()
})
