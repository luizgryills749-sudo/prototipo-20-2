radio.onReceivedNumber(function (receivedNumber) {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(100)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(3)
})
basic.forever(function () {
    radio.setGroup(11)
})
