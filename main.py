ball = sprites.create(img("""
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
"""), SpriteKind.player)
controller.move_sprite(ball)
ball.set_stay_in_screen(True)
ball.say_text("Press A to ask me a question")

def on_event_pressed():
    question = game.ask_for_string("Ask me a question")
    answer = randint(1, 8)
    if answer == 1:
        ball.say_text("Yes, definetly.")
    elif answer == 2:
        ball.say_text("It is certain.")
    elif answer == 3:
        ball.say_text("You may rely on it.")
    elif answer == 4:
        ball.say_text("Don't count on it.")
    elif answer == 5:
        ball.say_text("My sources say no.")
    elif answer == 6:
        ball.say_text("Very doubtful.")
    elif answer == 7:
        ball.say_text("Not sure, try again.")
    elif answer == 8:
        ball.say_text("Can't think of anything.")
controller.A.on_event(ControllerButtonEvent.PRESSED, on_event_pressed)







