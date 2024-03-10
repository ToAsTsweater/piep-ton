input.onButtonPressed(Button.A, function () {
    music.play(music.tonePlayable(400, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
})
input.onButtonPressed(Button.AB, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
})
