let time = 0
let playing = false
// Aボタンでスタート
input.onButtonPressed(Button.A, function () {
    time = 0
    playing = true
})
// ずっとカウント
basic.forever(function () {
    if (playing) {
        time += 1
        basic.showNumber(time)
        // 1秒ごとに数える
        basic.pause(1000)
    }
    if (playing && pins.analogReadPin(AnalogPin.P0) > 300) {
        // 水がたまったら止める
        playing = false
    }
})
