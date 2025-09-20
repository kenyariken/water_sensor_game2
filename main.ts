let time = 0
let playing = false
// Aボタンでスタート
input.onButtonPressed(Button.A, function () {
    time = 0
    playing = true
})
basic.forever(function () {
    if (playing) {
        time += 1
        basic.showNumber(time)
        basic.pause(1000)
    } else {
        // playingがfalseならタイム値を表示し続ける
        basic.showNumber(time)
    }
    if (playing && pins.analogReadPin(AnalogPin.P0) > 300) {
        playing = false
    }
})
