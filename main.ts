let range3: neopixel.Strip = null
let range2: neopixel.Strip = null
let range: neopixel.Strip = null
let pulse_out = 0
let time1 = 0
let delta_t = 0
let time2 = 0
let PulseDet = 0
let counter = 0
let strip = neopixel.create(DigitalPin.P1, 8, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.White))
strip.show()
basic.pause(2000)
basic.forever(function () {
    PulseDet = pins.analogReadPin(AnalogPin.P2)
})
basic.forever(function () {
    serial.writeValue("Pulse diagram", PulseDet)
})
basic.forever(function () {
    if (PulseDet > 870 && counter == 0) {
        time2 = input.runningTime()
        delta_t = time2 - time1
        time1 = time2
        counter = 1
        pulse_out = (60000 - 60000 % delta_t) / delta_t
    } else if (PulseDet <= 430 && counter == 1) {
        counter = 0
    }
})
basic.forever(function () {
    basic.pause(5000)
    if (pulse_out <= 20) {
        range = strip.range(0, 3)
        range.showColor(neopixel.colors(NeoPixelColors.Blue))
        range.show()
        range2 = strip.range(3, 3)
        range2.showColor(neopixel.colors(NeoPixelColors.White))
        range2.show()
        range3 = strip.range(6, 2)
        range3.showColor(neopixel.colors(NeoPixelColors.Indigo))
        range3.show()
    } else if (pulse_out <= 40) {
        range = strip.range(0, 3)
        range.showColor(neopixel.colors(NeoPixelColors.Indigo))
        range.show()
        range2 = strip.range(3, 3)
        range2.showColor(neopixel.rgb(252, 3, 190))
        range2.show()
        range3 = strip.range(6, 2)
        range3.showColor(neopixel.rgb(3, 244, 252))
        range3.show()
    } else if (pulse_out <= 45) {
        range = strip.range(0, 3)
        range.showColor(neopixel.colors(NeoPixelColors.Green))
        range.show()
        range2 = strip.range(3, 3)
        range2.showColor(neopixel.colors(NeoPixelColors.Green))
        range2.show()
        range3 = strip.range(6, 2)
        range3.showColor(neopixel.rgb(252, 165, 3))
        range3.show()
    } else if (pulse_out <= 50) {
        range = strip.range(0, 3)
        range.showColor(neopixel.colors(NeoPixelColors.White))
        range.show()
        range2 = strip.range(3, 3)
        range2.showColor(neopixel.colors(NeoPixelColors.Red))
        range2.show()
        range3 = strip.range(6, 2)
        range3.showColor(neopixel.colors(NeoPixelColors.Red))
        range3.show()
    } else if (pulse_out <= 55) {
        range = strip.range(0, 3)
        range.showColor(neopixel.colors(NeoPixelColors.Blue))
        range.show()
        range2 = strip.range(3, 3)
        range2.showColor(neopixel.colors(NeoPixelColors.Blue))
        range2.show()
        range3 = strip.range(6, 2)
        range3.showColor(neopixel.colors(NeoPixelColors.Blue))
        range3.show()
    } else if (pulse_out <= 60) {
        range = strip.range(0, 3)
        range.showColor(neopixel.rgb(252, 3, 127))
        range.show()
        range2 = strip.range(3, 3)
        range2.showColor(neopixel.colors(NeoPixelColors.Green))
        range2.show()
        range3 = strip.range(6, 2)
        range3.showColor(neopixel.colors(NeoPixelColors.Indigo))
        range3.show()
    } else if (pulse_out <= 65) {
        range = strip.range(0, 3)
        range.showColor(neopixel.rgb(252, 3, 127))
        range.show()
        range2 = strip.range(3, 3)
        range2.showColor(neopixel.rgb(252, 3, 127))
        range2.show()
        range3 = strip.range(6, 2)
        range3.showColor(neopixel.rgb(252, 3, 127))
        range3.show()
    } else if (pulse_out <= 70) {
        range = strip.range(0, 3)
        range.showColor(neopixel.rgb(252, 165, 3))
        range.show()
        range2 = strip.range(3, 3)
        range2.showColor(neopixel.colors(NeoPixelColors.Green))
        range2.show()
        range3 = strip.range(6, 2)
        range3.showColor(neopixel.colors(NeoPixelColors.Indigo))
        range3.show()
    } else if (pulse_out <= 75) {
        range = strip.range(0, 3)
        range.showColor(neopixel.colors(NeoPixelColors.Red))
        range.show()
        range2 = strip.range(3, 3)
        range2.showColor(neopixel.colors(NeoPixelColors.White))
        range2.show()
        range3 = strip.range(6, 2)
        range3.showColor(neopixel.colors(NeoPixelColors.Blue))
        range3.show()
    } else if (pulse_out <= 80) {
        range = strip.range(0, 3)
        range.showColor(neopixel.rgb(3, 244, 252))
        range.show()
        range2 = strip.range(3, 3)
        range2.showColor(neopixel.rgb(252, 165, 3))
        range2.show()
        range3 = strip.range(6, 2)
        range3.showColor(neopixel.colors(NeoPixelColors.Indigo))
        range3.show()
    } else if (pulse_out <= 85) {
        range = strip.range(0, 3)
        range.showColor(neopixel.rgb(252, 165, 3))
        range.show()
        range2 = strip.range(3, 3)
        range2.showColor(neopixel.rgb(252, 3, 127))
        range2.show()
        range3 = strip.range(6, 2)
        range3.showColor(neopixel.rgb(3, 244, 252))
        range3.show()
    } else if (pulse_out <= 90) {
        range = strip.range(0, 3)
        range.showColor(neopixel.colors(NeoPixelColors.Green))
        range.show()
        range2 = strip.range(3, 3)
        range2.showColor(neopixel.colors(NeoPixelColors.Red))
        range2.show()
        range3 = strip.range(6, 2)
        range3.showColor(neopixel.colors(NeoPixelColors.Green))
        range3.show()
    } else if (pulse_out <= 95) {
        range = strip.range(0, 3)
        range.showColor(neopixel.rgb(252, 240, 3))
        range.show()
        range2 = strip.range(3, 3)
        range2.showColor(neopixel.colors(NeoPixelColors.Indigo))
        range2.show()
        range3 = strip.range(6, 2)
        range3.showColor(neopixel.colors(NeoPixelColors.White))
        range3.show()
    } else if (pulse_out <= 100) {
        range = strip.range(0, 3)
        range.showColor(neopixel.colors(NeoPixelColors.White))
        range.show()
        range2 = strip.range(3, 3)
        range2.showColor(neopixel.colors(NeoPixelColors.White))
        range2.show()
        range3 = strip.range(6, 2)
        range3.showColor(neopixel.colors(NeoPixelColors.White))
        range3.show()
    } else if (pulse_out <= 105) {
        range = strip.range(0, 3)
        range.showColor(neopixel.colors(NeoPixelColors.Red))
        range.show()
        range2 = strip.range(3, 3)
        range2.showColor(neopixel.colors(NeoPixelColors.Green))
        range2.show()
        range3 = strip.range(6, 2)
        range3.showColor(neopixel.colors(NeoPixelColors.Blue))
        range3.show()
    } else if (pulse_out <= 110) {
        range = strip.range(0, 3)
        range.showColor(neopixel.colors(NeoPixelColors.Blue))
        range.show()
        range2 = strip.range(3, 3)
        range2.showColor(neopixel.rgb(252, 3, 190))
        range2.show()
        range3 = strip.range(6, 2)
        range3.showColor(neopixel.colors(NeoPixelColors.White))
        range3.show()
    } else if (pulse_out <= 115) {
        range = strip.range(0, 3)
        range.showColor(neopixel.rgb(252, 3, 127))
        range.show()
        range2 = strip.range(3, 3)
        range2.showColor(neopixel.rgb(252, 165, 3))
        range2.show()
        range3 = strip.range(6, 2)
        range3.showColor(neopixel.rgb(252, 240, 3))
        range3.show()
    } else if (pulse_out <= 120) {
        range = strip.range(0, 3)
        range.showColor(neopixel.colors(NeoPixelColors.Blue))
        range.show()
        range2 = strip.range(3, 3)
        range2.showColor(neopixel.colors(NeoPixelColors.Green))
        range2.show()
        range3 = strip.range(6, 2)
        range3.showColor(neopixel.rgb(252, 240, 3))
        range3.show()
    } else if (pulse_out <= 125) {
        range = strip.range(0, 3)
        range.showColor(neopixel.colors(NeoPixelColors.Indigo))
        range.show()
        range2 = strip.range(3, 3)
        range2.showColor(neopixel.rgb(3, 244, 252))
        range2.show()
        range3 = strip.range(6, 2)
        range3.showColor(neopixel.colors(NeoPixelColors.Blue))
        range3.show()
    } else if (pulse_out <= 130) {
        range = strip.range(0, 3)
        range.showColor(neopixel.colors(NeoPixelColors.Red))
        range.show()
        range2 = strip.range(3, 3)
        range2.showColor(neopixel.colors(NeoPixelColors.Red))
        range2.show()
        range3 = strip.range(6, 2)
        range3.showColor(neopixel.colors(NeoPixelColors.Red))
        range3.show()
    } else if (pulse_out <= 135) {
        range = strip.range(0, 3)
        range.showColor(neopixel.rgb(252, 3, 127))
        range.show()
        range2 = strip.range(3, 3)
        range2.showColor(neopixel.rgb(252, 165, 3))
        range2.show()
        range3 = strip.range(6, 2)
        range3.showColor(neopixel.rgb(3, 244, 252))
        range3.show()
    } else if (pulse_out <= 140) {
        range = strip.range(0, 3)
        range.showColor(neopixel.rgb(252, 240, 3))
        range.show()
        range2 = strip.range(3, 3)
        range2.showColor(neopixel.colors(NeoPixelColors.Indigo))
        range2.show()
        range3 = strip.range(6, 2)
        range3.showColor(neopixel.colors(NeoPixelColors.White))
        range3.show()
    } else if (pulse_out <= 145) {
        range = strip.range(0, 3)
        range.showColor(neopixel.rgb(252, 240, 3))
        range.show()
        range2 = strip.range(3, 3)
        range2.showColor(neopixel.rgb(252, 240, 3))
        range2.show()
        range3 = strip.range(6, 2)
        range3.showColor(neopixel.rgb(252, 240, 3))
        range3.show()
    } else if (pulse_out <= 150) {
        range = strip.range(0, 3)
        range.showColor(neopixel.rgb(252, 3, 190))
        range.show()
        range2 = strip.range(3, 3)
        range2.showColor(neopixel.rgb(252, 165, 3))
        range2.show()
        range3 = strip.range(6, 2)
        range3.showColor(neopixel.colors(NeoPixelColors.Blue))
        range3.show()
    } else if (pulse_out <= 155) {
        range = strip.range(0, 3)
        range.showColor(neopixel.rgb(3, 244, 252))
        range.show()
        range2 = strip.range(3, 3)
        range2.showColor(neopixel.colors(NeoPixelColors.Indigo))
        range2.show()
        range3 = strip.range(6, 2)
        range3.showColor(neopixel.rgb(252, 3, 190))
        range3.show()
    } else if (pulse_out <= 160) {
        range = strip.range(0, 3)
        range.showColor(neopixel.colors(NeoPixelColors.Indigo))
        range.show()
        range2 = strip.range(3, 3)
        range2.showColor(neopixel.rgb(252, 165, 3))
        range2.show()
        range3 = strip.range(6, 2)
        range3.showColor(neopixel.colors(NeoPixelColors.White))
        range3.show()
    } else if (pulse_out <= 170) {
        range = strip.range(0, 3)
        range.showColor(neopixel.rgb(252, 240, 3))
        range.show()
        range2 = strip.range(3, 3)
        range2.showColor(neopixel.colors(NeoPixelColors.Green))
        range2.show()
        range3 = strip.range(6, 2)
        range3.showColor(neopixel.colors(NeoPixelColors.Red))
        range3.show()
    } else if (pulse_out <= 180) {
        range = strip.range(0, 3)
        range.showColor(neopixel.rgb(252, 3, 127))
        range.show()
        range2 = strip.range(3, 3)
        range2.showColor(neopixel.rgb(252, 240, 3))
        range2.show()
        range3 = strip.range(6, 2)
        range3.showColor(neopixel.colors(NeoPixelColors.White))
        range3.show()
    } else if (pulse_out <= 190) {
        range = strip.range(0, 3)
        range.showColor(neopixel.colors(NeoPixelColors.White))
        range.show()
        range2 = strip.range(3, 3)
        range2.showColor(neopixel.colors(NeoPixelColors.Green))
        range2.show()
        range3 = strip.range(6, 2)
        range3.showColor(neopixel.rgb(3, 244, 252))
        range3.show()
    } else if (pulse_out <= 200) {
        range = strip.range(0, 3)
        range.showColor(neopixel.rgb(252, 165, 3))
        range.show()
        range2 = strip.range(3, 3)
        range2.showColor(neopixel.colors(NeoPixelColors.Blue))
        range2.show()
        range3 = strip.range(6, 2)
        range3.showColor(neopixel.colors(NeoPixelColors.Indigo))
        range3.show()
    } else if (pulse_out <= 210) {
        range = strip.range(0, 3)
        range.showColor(neopixel.colors(NeoPixelColors.Red))
        range.show()
        range2 = strip.range(3, 3)
        range2.showColor(neopixel.colors(NeoPixelColors.Red))
        range2.show()
        range3 = strip.range(6, 2)
        range3.showColor(neopixel.colors(NeoPixelColors.Red))
        range3.show()
    } else if (pulse_out <= 220) {
        range = strip.range(0, 3)
        range.showColor(neopixel.colors(NeoPixelColors.Red))
        range.show()
        range2 = strip.range(3, 3)
        range2.showColor(neopixel.rgb(252, 165, 3))
        range2.show()
        range3 = strip.range(6, 2)
        range3.showColor(neopixel.rgb(252, 240, 3))
        range3.show()
    } else if (pulse_out > 220) {
        range = strip.range(0, 3)
        range.showColor(neopixel.colors(NeoPixelColors.Black))
        range.show()
        range2 = strip.range(0, 3)
        range2.showColor(neopixel.colors(NeoPixelColors.Black))
        range2.show()
        range3 = strip.range(0, 3)
        range3.showColor(neopixel.colors(NeoPixelColors.Black))
        range3.show()
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
    strip.setBrightness(255)
    basic.pause(5000)
})
