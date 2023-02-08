function encendidoApagado () {
    valor = tiempo % 2048
    if (valor > 1023) {
        valor = 2048 - valor
    }
    // Encendido y apagado
    pins.analogWritePin(AnalogPin.P2, valor)
}
function encendidoProgresivo () {
    // Encendido progresivo
    pins.analogWritePin(AnalogPin.P2, tiempo % 1024)
}
let valor = 0
let tiempo = 0
led.enable(false)
tiempo = 0
basic.forever(function () {
    tiempo = input.runningTime() / 10
    encendidoApagado()
})
