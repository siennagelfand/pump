input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Umbrella)
    cakLandPump.startDuration(Pump.RIGHT, 60, 4)
    basic.clearScreen()
})
basic.forever(function () {
	
})
