let ball = sprites.create(img`
    .....111111111......
    ...11fffffffff11....
    ..1fffffffffffff1...
    .1fffffffffffffff1..
    1fffffffffffffffff1.
    1fffff1111111fffff1.
    1ffff111fff111fffff1
    1ffff111f1f111fffff1
    1ffff111f1f111fffff1
    1ffff111fff111fffff1
    1ffff111f1f111fffff1
    1ffff111f1f111fffff1
    1ffff111fff111fffff1
    1fffff1111111ffffff1
    1ffffffffffffffffff1
    1fffffffffffffffff1.
    1fffffffffffffffff..
    .1fffffffffffffff1..
    ..1fffffffffffff1...
    ...1111111111111....
`, SpriteKind.Player)
controller.moveSprite(ball)
ball.setStayInScreen(true)
ball.sayText("Press A to ask me a question")
controller.A.onEvent(ControllerButtonEvent.Pressed, function on_event_pressed() {
    let question = game.askForString("Ask me a question")
    let answer = randint(1, 8)
    if (answer == 1) {
        ball.sayText("Yes, definetly.")
    } else if (answer == 2) {
        ball.sayText("It is certain.")
    } else if (answer == 3) {
        ball.sayText("You may rely on it.")
    } else if (answer == 4) {
        ball.sayText("Don't count on it.")
    } else if (answer == 5) {
        ball.sayText("My sources say no.")
    } else if (answer == 6) {
        ball.sayText("Very doubtful.")
    } else if (answer == 7) {
        ball.sayText("Not sure, try again.")
    } else if (answer == 8) {
        ball.sayText("Can't think of anything.")
    }
    
})
