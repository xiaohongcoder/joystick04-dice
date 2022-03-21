function 显示1 () {
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
}
function 显示2 () {
    basic.showLeds(`
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        `)
}
function 电子骰子显示 (数字: number) {
    if (数字 == 1) {
        显示1()
    } else if (数字 == 2) {
        显示2()
    } else if (数字 == 3) {
        显示3()
    } else if (数字 == 4) {
        显示4()
    } else if (数字 == 5) {
        显示5()
    } else {
        显示6()
    }
    basic.pause(3000)
    basic.clearScreen()
}
input.onButtonPressed(Button.A, function () {
    电子骰子显示(randint(1, 6))
})
function 显示5 () {
    basic.showLeds(`
        # . . . #
        . . . . .
        . . # . .
        . . . . .
        # . . . #
        `)
}
function 显示3 () {
    basic.showLeds(`
        . . . . #
        . . . . .
        . . # . .
        . . . . .
        # . . . .
        `)
}
function 显示4 () {
    basic.showLeds(`
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        `)
}
function 显示6 () {
    basic.showLeds(`
        # . . . #
        . . . . .
        # . . . #
        . . . . .
        # . . . #
        `)
}
