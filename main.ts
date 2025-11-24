scene.onOverlapTile(SpriteKind.Player, assets.tile`transparency16`, function (sprite, location) {
    game.over(true)
})
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 3 3 3 . 3 3 . . . 
    . . . . . . . 3 . 3 3 . . . . . 
    . . . . . . . 3 . 3 . . . . . . 
    . . . . . . . 3 3 3 . . . . . . 
    . . . . . . . 3 3 3 . . . . . . 
    . . . . . . . 3 3 3 . . . . . . 
    . . . . . . . 3 3 3 . . . . . . 
    . . . . . . . . 3 3 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, assets.tile`transparency16`)
scene.cameraFollowSprite(mySprite)
info.startCountdown(10)
