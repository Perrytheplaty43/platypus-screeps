let mapVisuals = function mapVisuals() {
    //room claiming plans
    Game.map.visual.line(Game.rooms['E54N39'].controller.pos, new RoomPosition(25,25,'E59N37'), {color: "#1aff00", width: 1})
}

module.exports = mapVisuals