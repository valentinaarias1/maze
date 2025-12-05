function start_game2 () {
	
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level_0`)
    tiles.placeOnRandomTile(mySprite, sprites.swamp.swampTile0)
})
function start_game () {
    tiles.setTilemap(tilemap`level9`)
    mySprite = sprites.create(img`
        ..................
        ..................
        ..fff.......fff...
        .f333fffffff333f..
        .f3333333333333f..
        ..ff333333333ff...
        ..f3ff33333ff3f...
        .f33ff33333ff33f..
        .f3333fffff3333f..
        .f333f33333f333f..
        .f333f3f3f3f333f..
        .f333f33333f333f..
        ..f333fffff333f...
        ..f33333333333f...
        ...f3f33333f3f....
        ...f33fffff33f....
        ...f33f...f33f....
        ...ffff...ffff....
        `, SpriteKind.Player)
    controller.moveSprite(mySprite)
    tiles.placeOnRandomTile(mySprite, sprites.builtin.forestTiles0)
    scene.cameraFollowSprite(mySprite)
    info.startCountdown(20)
}
let mySprite: Sprite = null
let gamestate = "menu"
start_game2()
