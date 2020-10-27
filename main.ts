scene.onOverlapTile(SpriteKind.Player, myTiles.tile2, function (sprite, location) {
    game.over(true, effects.hearts)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile3, function (sprite, location) {
    if (game.askForString("¿Cúal es el tercer día de la semana?", 6) == "martes") {
        tiles.setTileAt(location, sprites.castle.rock2)
        music.baDing.play()
    } else {
        game.over(false)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.rock1, function (sprite, location) {
    mySprite.say("Sobrevivir, pero supervivencia", 5000)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile8, function (sprite, location) {
    if (game.askForString("¿Cúal es el quinto día de la semana?", 6) == "martes") {
        tiles.setTileAt(location, sprites.castle.rock2)
        music.baDing.play()
    } else {
        game.over(false)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.saplingPine, function (sprite, location) {
    mySprite.say("Los arbustos no te detendrán", 5000)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.crowd4, function (sprite, location) {
    mySprite.say("¡Cuidado!", 5000)
    music.siren.play()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.setDialogTextColor(8)
    game.showLongText("Sábado, sabadete, camisa blanca y polvete.", DialogLayout.Full)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile7, function (sprite, location) {
    if (game.askForString("¿Cúal es el sexto día de la semana?", 6) == "martes") {
        tiles.setTileAt(location, sprites.castle.rock2)
        music.baDing.play()
    } else {
        game.over(false)
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile6, function (sprite, location) {
    if (game.askForString("¿Cúal es el cuarto día de la semana?", 6) == "martes") {
        tiles.setTileAt(location, sprites.castle.rock2)
        music.baDing.play()
    } else {
        while (false) {
            for (let index = 0; index < 4; index++) {
                game.over(false)
            }
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile1, function (sprite, location) {
    if (game.askForString("¿Cúal es el segundo día de la semana?", 6) == "martes") {
        tiles.setTileAt(location, sprites.castle.rock2)
        music.baDing.play()
    } else {
        game.over(false)
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile5, function (sprite, location) {
    if (game.askForString("¿Cúal es el séptimo día de la semana?", 6) == "martes") {
        tiles.setTileAt(location, sprites.castle.rock2)
        music.baDing.play()
    } else {
        game.over(false)
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.transparency16, function (sprite, location) {
    if (game.askForString("¿Cúal es el primer día de la semana?", 5) == "lunes") {
        tiles.setTileAt(location, sprites.castle.rock2)
        music.baDing.play()
    } else {
        while (false) {
            game.over(false)
        }
    }
})
let mySprite: Sprite = null
game.splash("¿Te sabes ", "los días de la semana? ")
mySprite = sprites.create(img`
    . . . . . . . . . . . . 
    . . 5 5 5 5 5 5 5 5 . . 
    . . 5 5 5 5 5 5 5 5 . . 
    . . 4 4 4 4 4 4 4 4 . . 
    . . 5 d 4 4 4 4 d 5 . . 
    . 5 d d d d d d d d 5 . 
    . d d 8 d d d d 8 d d . 
    . d d 8 d d d d 8 d d . 
    . d d d d d d d d d d . 
    . . d d d 3 3 d d d . . 
    . . . d d d d d d . . . 
    1 1 1 1 1 d d 1 1 1 1 1 
    1 . . 1 1 1 1 1 1 . . 1 
    1 d . d d d d d d . d 1 
    . . . 4 4 4 4 4 4 . . . 
    . . 4 4 4 . . 4 4 4 . . 
    `, SpriteKind.Player)
mySprite.say("¡vamos allá!", 5000)
controller.moveSprite(mySprite, 100, 100)
tiles.setTilemap(tiles.createTilemap(hex`17000c00080202070202020901010101010101150101140116010104131d0401010104010802070209010c1a0203130c17160a0202030209010b0210110401040104010101010401040f01010101041104110b02050104010b0207020c1001040101010802050104011301040104010d0104010104010408020205010101041110010b1c1b0104010b02021001040401010101080605010b0210010c0104010401010401040a02070207051101010401040104010b02100b021001040e010413040101080205010b02050104010401010401040802030103020210010101041c01010401040101030210040e0e0e0e0e0e040e0802101908020c010401010701041202020202020205110a020302031c180c030202030205`, img`
    . . . . . . . . 2 2 2 2 2 2 2 2 2 2 . 2 . 2 2 
    . 2 . . 2 2 2 . 2 . . . . . 2 . . . . 2 . 2 2 
    . . . . . . 2 . . . 2 . 2 . 2 . 2 2 2 2 . 2 . 
    . 2 2 2 2 . 2 . 2 . . . 2 . 2 . . . . 2 . 2 . 
    2 2 2 . . . 2 . 2 . 2 2 2 . 2 2 2 . 2 2 . 2 . 
    . . . . 2 2 2 . 2 2 2 . . . 2 . 2 . . . . 2 . 
    . 2 2 2 2 . . 2 2 . . . 2 . 2 . 2 . 2 2 . 2 . 
    . . . . . . . 2 2 . 2 . 2 . 2 . . . 2 . . 2 . 
    2 2 . . . 2 2 . . . 2 . . . 2 . 2 . 2 2 . 2 . 
    . . . 2 . . . . 2 2 2 . 2 2 2 . 2 . 2 2 . . . 
    . 2 2 2 2 2 2 . 2 . . . . . . . 2 . 2 2 2 2 . 
    . . . . . . . . 2 . . . . . 2 . . . . . . . . 
    `, [myTiles.tile0,sprites.builtin.brick,sprites.vehicle.roadHorizontal,sprites.vehicle.roadIntersection1,sprites.vehicle.roadVertical,sprites.vehicle.roadTurn4,sprites.dungeon.stairLarge,sprites.vehicle.roadIntersection3,sprites.vehicle.roadTurn1,sprites.vehicle.roadTurn2,sprites.vehicle.roadTurn3,sprites.vehicle.roadIntersection2,sprites.castle.shrub,sprites.castle.rock0,sprites.castle.rock2,sprites.castle.rock1,sprites.vehicle.roadIntersection4,sprites.castle.saplingPine,sprites.builtin.crowd1,sprites.dungeon.chestClosed,sprites.dungeon.purpleSwitchDown,sprites.dungeon.collectibleRedCrystal,myTiles.tile2,myTiles.tile3,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,sprites.builtin.crowd4,myTiles.transparency16,myTiles.tile9], TileScale.Sixteen))
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairLarge)
scene.cameraFollowSprite(mySprite)
info.startCountdown(180)
info.setLife(3)
music.playMelody("C5 G B A F A C5 B ", 66)
