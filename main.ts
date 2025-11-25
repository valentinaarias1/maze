scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles10, function (sprite, location) {
    game.over(true)
})
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . 3 3 3 3 3 3 3 3 3 . . 
    . . . . . 3 3 3 3 3 3 3 3 3 . . 
    . . . . . 3 3 3 3 3 3 3 3 3 . . 
    . . . . . 3 3 3 3 3 3 3 3 3 . . 
    . . . . . 3 3 3 3 3 3 3 3 3 . . 
    . . . . . 3 3 3 3 3 3 3 3 3 . . 
    . . . . . 3 3 3 3 3 3 3 3 3 . . 
    . . . . . 3 3 3 3 3 3 3 3 3 . . 
    . . . . . 3 3 3 3 3 3 3 3 3 . . 
    . . . . . 3 3 3 3 3 3 3 3 3 . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, sprites.builtin.forestTiles0)
scene.cameraFollowSprite(mySprite)
info.startCountdown(10)
