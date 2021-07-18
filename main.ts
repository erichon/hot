let status = 0
let duration = randint(8, 15)
while (duration > 0) {
    duration += -1
    if (status == 0) {
        status = 1
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else {
        status = 0
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
}
soundExpression.giggle.play()
