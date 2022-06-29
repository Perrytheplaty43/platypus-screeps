let roomPlanner = function roomPlanner(roomName) {
    if (!Memory.rooms) {
        Memory.rooms = {
            [roomName]: {}
        }
    } else if (!Memory.rooms[roomName]) {
        Memory.rooms = {
            [roomName]: {}
        }
    } else if (!Memory.rooms[roomName].plan) {
        let coords = findCenter(Game.rooms[roomName])
        writeToMemory(coords, roomName)
    } else if (!Memory.rooms[roomName].plan.level) {
        Memory.rooms[roomName].plan.level = Game.rooms[roomName].controller.level
    } else {
        let plan = Memory.rooms[roomName].plan
        if (Game.rooms[roomName].controller.level == 1) {
            let spawns = Game.rooms[roomName].find(FIND_MY_SPAWNS)[0];
            if (!spawns) {
                Game.rooms[roomName].createConstructionSite(plan.lvl1.spawns[0][0], plan.lvl1.spawns[0][1], STRUCTURE_SPAWN, "Spawn" + Game.spawns.length + 2)
            }
            Memory.rooms[roomName].plan.level = Game.rooms[roomName].controller.level
        } else if (Memory.rooms[roomName].plan.level != Game.rooms[roomName].controller.level) {
            switch (Game.rooms[roomName].controller.level) {
                case 2:
                    for (let i = 0; i < plan.lvl2.extensions.length; i++) {
                        Game.rooms[roomName].createConstructionSite(plan.lvl2.extensions[i][0], plan.lvl2.extensions[i][1], STRUCTURE_EXTENSION)
                    }
                    break
                case 3:
                    for (let i = 0; i < plan.lvl3.extensions.length; i++) {
                        Game.rooms[roomName].createConstructionSite(plan.lvl3.extensions[i][0], plan.lvl3.extensions[i][1], STRUCTURE_EXTENSION)
                    }
                    Game.rooms[roomName].createConstructionSite(plan.lvl3.towers[0][0], plan.lvl3.towers[0][1], STRUCTURE_TOWER)
                    break
                case 4:
                    for (let i = 0; i < plan.lvl4.extensions.length; i++) {
                        Game.rooms[roomName].createConstructionSite(plan.lvl4.extensions[i][0], plan.lvl4.extensions[i][1], STRUCTURE_EXTENSION)
                    }
                    Game.rooms[roomName].createConstructionSite(plan.lvl4.storage[0], plan.lvl4.storage[1], STRUCTURE_STORAGE)
                    break
                case 5:
                    for (let i = 0; i < plan.lvl5.extensions.length; i++) {
                        Game.rooms[roomName].createConstructionSite(plan.lvl5.extensions[i][0], plan.lvl5.extensions[i][1], STRUCTURE_EXTENSION)
                    }
                    Game.rooms[roomName].createConstructionSite(plan.lvl5.towers[0][0], plan.lvl5.towers[0][1], STRUCTURE_TOWER)
                    Game.rooms[roomName].createConstructionSite(plan.lvl5.link[0][0], plan.lvl5.link[0][1], STRUCTURE_LINK)
                    break
                case 6:
                    let mineral = Game.rooms[roomName].find(FIND_MINERALS)[0]
                    for (let i = 0; i < plan.lvl6.extensions.length; i++) {
                        Game.rooms[roomName].createConstructionSite(plan.lvl6.extensions[i][0], plan.lvl6.extensions[i][1], STRUCTURE_EXTENSION)
                    }
                    for (let i = 0; i < plan.lvl6.labs.length; i++) {
                        Game.rooms[roomName].createConstructionSite(plan.lvl6.labs[i][0], plan.lvl6.labs[i][1], STRUCTURE_LAB)
                    }
                    Game.rooms[roomName].createConstructionSite(plan.lvl6.terminal[0], plan.lvl6.terminal[1], STRUCTURE_TERMINAL)
                    Game.rooms[roomName].createConstructionSite(mineral.pos.x, mineral.pos.y, STRUCTURE_EXTRACTOR)
                    break
                case 7:
                    for (let i = 0; i < plan.lvl7.extensions.length; i++) {
                        Game.rooms[roomName].createConstructionSite(plan.lvl7.extensions[i][0], plan.lvl7.extensions[i][1], STRUCTURE_EXTENSION)
                    }
                    for (let i = 0; i < plan.lvl7.labs.length; i++) {
                        Game.rooms[roomName].createConstructionSite(plan.lvl7.labs[i][0], plan.lvl7.labs[i][1], STRUCTURE_LAB)
                    }
                    Game.rooms[roomName].createConstructionSite(plan.lvl7.factory[0], plan.lvl7.factory[1], STRUCTURE_FACTORY)
                    Game.rooms[roomName].createConstructionSite(plan.lvl7.spawns[0][0], plan.lvl7.spawns[0][1], STRUCTURE_SPAWN, "Spawn" + Game.spawns.length + 2)
                    Game.rooms[roomName].createConstructionSite(plan.lvl7.towers[0][0], plan.lvl7.towers[0][1], STRUCTURE_TOWER)
                case 8:
                    for (let i = 0; i < plan.lvl8.extensions.length; i++) {
                        Game.rooms[roomName].createConstructionSite(plan.lvl8.extensions[i][0], plan.lvl8.extensions[i][1], STRUCTURE_EXTENSION)
                    }
                    for (let i = 0; i < plan.lvl8.labs.length; i++) {
                        Game.rooms[roomName].createConstructionSite(plan.lvl8.labs[i][0], plan.lvl8.labs[i][1], STRUCTURE_LAB)
                    }
                    for (let i = 0; i < plan.lvl8.towers.length; i++) {
                        Game.rooms[roomName].createConstructionSite(plan.lvl8.towers[i][0], plan.lvl8.towers[i][1], STRUCTURE_TOWER)
                    }
                    Game.rooms[roomName].createConstructionSite(plan.lvl8.spawns[0][0], plan.lvl8.spawns[0][1], STRUCTURE_SPAWN, "Spawn" + Game.spawns.length + 2)
                    Game.rooms[roomName].createConstructionSite(plan.lvl8.observer[0], plan.lvl8.observer[1], STRUCTURE_OBSERVER)
                    Game.rooms[roomName].createConstructionSite(plan.lvl8.powerspawn[0], plan.lvl8.powerspawn[1], STRUCTURE_POWER_SPAWN)
                    Game.rooms[roomName].createConstructionSite(plan.lvl8.nuker[0], plan.lvl8.nuker[1], STRUCTURE_NUKER)
            }
        }
    }
}

function writeToMemory(coords, roomName) {
    let [x, y] = coords

    let positions = {
        lvl1: {
            spawns: [
                [x + 1, y]
            ],
        },
        lvl2: {
            extensions: [
                [x + 3, y + 2],
                [x + 2, y + 3],
                [x + 4, y + 1],
                [x + 1, y + 4],
                [x + 5, y]
            ]
        },
        lvl3: {
            extensions: [
                [x - 1, y + 4],
                [x - 2, y + 3],
                [x - 3, y + 2],
                [x - 4, y + 1],
                [x - 5, y]
            ],
            towers: [
                [x + 1, y + 2]
            ]
        },
        lvl4: {
            extensions: [
                [x, y + 5],
                [x + 1, y + 6],
                [x - 4, y - 1],
                [x - 3, y - 2],
                [x - 2, y - 3],
                [x - 1, y - 4],
                [x + 6, y - 1],
                [x + 6, y],
                [x + 5, y + 1],
                [x + 4, y + 2]
            ],
            storage: [x, y]
        },
        lvl5: {
            extensions: [
                [x - 3, y - 5],
                [x + 3, y + 3],
                [x + 2, y + 4],
                [x, y + 6],
                [x - 1, y + 5],
                [x - 2, y + 4],
                [x - 3, y + 3],
                [x - 4, y + 2],
                [x - 6, y + 1],
                [x - 5, y - 1]
            ],
            towers: [
                [x - 1, y - 2]
            ],
            link: [
                [x + 2, y - 1]
            ]
        },
        lvl6: {
            extensions: [
                [x - 6, y],
                [x - 4, y - 2],
                [x - 3, y - 3],
                [x - 2, y - 4],
                [x + 6, y + 1],
                [x + 5, y + 2],
                [x + 4, y + 3],
                [x + 3, y + 4],
                [x + 2, y + 5],
                [x - 1, y + 6]
            ],
            labs: [
                [x + 4, y - 1],
                [x + 4, y - 2],
                [x + 5, y - 2]
            ],
            terminal: [x - 3, y]
        },
        lvl7: {
            extensions: [
                [x - 2, y + 5],
                [x - 3, y + 4],
                [x - 4, y + 3],
                [x - 5, y + 2],
                [x - 6, y - 1],
                [x - 5, y - 2],
                [x - 4, y - 3],
                [x - 3, y - 4],
                [x - 2, y - 5],
                [x + 4, y + 4]
            ],
            factory: [x - 2, y + 1],
            spawns: [
                [x - 1, y]
            ],
            towers: [
                [x - 1, y + 2]
            ],
            labs: [
                [x + 3, y - 2],
                [x + 4, y - 3],
                [x + 5, y - 3]
            ]
        },
        lvl8: {
            spawns: [
                [x + 3, y]
            ],
            extensions: [
                [x + 6, y + 2],
                [x + 5, y + 3],
                [x + 3, y + 5],
                [x - 2, y + 6],
                [x - 3, y + 5],
                [x - 4, y + 4],
                [x - 5, y + 3],
                [x - 6, y - 2],
                [x - 5, y - 3],
                [x - 4, y - 4]
            ],
            towers: [
                [x, y + 3],
                [x, y - 3],
                [x + 1, y - 2]
            ],
            labs: [
                [x + 2, y - 3],
                [x + 3, y - 3],
                [x + 3, y - 4],
                [x + 4, y - 4]
            ],
            observer: [x + 2, y - 4],
            powerspawn: [x + 2, y + 1],
            nuker: [x + 1, y - 3]
        }
    }
    Memory.rooms = {
        [roomName]: {
            plan: positions
        }
    }
}

function findCenter(room) {
    let terrian = Game.map.getRoomTerrain(room.name)
    let walls = []

    for (let x = 0; x <= 49; x++) {
        for (let y = 0; y <= 49; y++) {
            if (terrian.get(x, y) == TERRAIN_MASK_WALL || room.lookForAt('structure', x, y).length) {
                if (x >= 2 && x <= 48 && y >= 1 && y <= 48) {
                    if ((terrian.get(x + 1, y) == TERRAIN_MASK_WALL || room.lookForAt('structure', x + 1, y).length) &&
                        (terrian.get(x + 1, y + 1) == TERRAIN_MASK_WALL || room.lookForAt('structure', x + 1, y + 1).length) &&
                        (terrian.get(x, y + 1) == TERRAIN_MASK_WALL || room.lookForAt('structure', x, y + 1).length) &&
                        (terrian.get(x - 1, y + 1) == TERRAIN_MASK_WALL || room.lookForAt('structure', x - 1, y + 1).length) &&
                        (terrian.get(x, y - 1) == TERRAIN_MASK_WALL || room.lookForAt('structure', x, y - 1).length) &&
                        (terrian.get(x + 1, y - 1) == TERRAIN_MASK_WALL || room.lookForAt('structure', x + 1, y - 1).length)) {
                        new RoomVisual(room.name).text("-", x, y, { font: 1 })
                    } else {
                        walls.push([x, y])
                        new RoomVisual(room.name).text("-", x, y, { font: 1 })
                    }
                } else {
                    walls.push([x, y])
                    new RoomVisual(room.name).text("-", x, y, { font: 1 })
                }
            }
        }
    }

    let acceptableTiles = []
    for (let x = 1; x < 49; x++) {
        for (let y = 1; y < 49; y++) {
            let distance = []
            for (i in walls) {
                distance.push(Math.sqrt(Math.pow(walls[i][0] - x, 2) + Math.pow(walls[i][1] - y, 2)))
            }
            let sorted = distance.sort((a, b) => a - b)
            if (sorted[0] >= 9) {
                acceptableTiles.push([x, y])
                new RoomVisual(room.name).text(Math.round(sorted[0]), x, y, { font: 0.8, backgroundColor: 'green', backgroundPadding: 0.3, opacity: 1 })
            }
            new RoomVisual(room.name).text(Math.round(sorted[0]), x, y, { font: 0.8, backgroundColor: changeHue('#00fbff', sorted[0] * 3), backgroundPadding: 0.8, opacity: 0.1 })
        }
    }
    if (acceptableTiles) {
        let sources = room.find(FIND_SOURCES);
        let avgSourceRange = []
        for (i in acceptableTiles) {
            let avg = 0
            for (let source in sources) {
                avg += Math.sqrt(Math.pow(acceptableTiles[i][0] - sources[source].pos.x, 2) + Math.pow(acceptableTiles[i][1] - sources[source].pos.y, 2))
            }
            avg += Math.sqrt(Math.pow(acceptableTiles[i][0] - room.controller.pos.x, 2) + Math.pow(acceptableTiles[i][1] - room.controller.pos.y, 2))
            avg /= sources.length + 1
            avgSourceRange.push([avg, acceptableTiles[i][0], acceptableTiles[i][1]])
        }
        avgSourceRange.sort(sortFunction)
        new RoomVisual(room.name).text(Math.round(avgSourceRange[0][0]), avgSourceRange[0][1], avgSourceRange[0][2], { font: 0.8, backgroundColor: 'red', backgroundPadding: 0.3, opacity: 1 })
        return [avgSourceRange[0][1], avgSourceRange[0][2]]
    }
}

function changeHue(rgb, degree) {
    let hsl = rgbToHSL(rgb);
    hsl.h += degree;
    if (hsl.h > 360) {
        hsl.h -= 360;
    }
    else if (hsl.h < 0) {
        hsl.h += 360;
    }
    return hslToRGB(hsl);
}

// exepcts a string and returns an object
function rgbToHSL(rgb) {
    // strip the leading # if it's there
    rgb = rgb.replace(/^\s*#|\s*$/g, '');

    // convert 3 char codes --> 6, e.g. `E0F` --> `EE00FF`
    if (rgb.length == 3) {
        rgb = rgb.replace(/(.)/g, '$1$1');
    }

    let r = parseInt(rgb.substr(0, 2), 16) / 255,
        g = parseInt(rgb.substr(2, 2), 16) / 255,
        b = parseInt(rgb.substr(4, 2), 16) / 255,
        cMax = Math.max(r, g, b),
        cMin = Math.min(r, g, b),
        delta = cMax - cMin,
        l = (cMax + cMin) / 2,
        h = 0,
        s = 0;

    if (delta == 0) {
        h = 0;
    }
    else if (cMax == r) {
        h = 60 * (((g - b) / delta) % 6);
    }
    else if (cMax == g) {
        h = 60 * (((b - r) / delta) + 2);
    }
    else {
        h = 60 * (((r - g) / delta) + 4);
    }

    if (delta == 0) {
        s = 0;
    }
    else {
        s = (delta / (1 - Math.abs(2 * l - 1)))
    }

    return {
        h: h,
        s: s,
        l: l
    }
}

// expects an object and returns a string
function hslToRGB(hsl) {
    let h = hsl.h,
        s = hsl.s,
        l = hsl.l,
        c = (1 - Math.abs(2 * l - 1)) * s,
        x = c * (1 - Math.abs((h / 60) % 2 - 1)),
        m = l - c / 2,
        r, g, b;

    if (h < 60) {
        r = c;
        g = x;
        b = 0;
    }
    else if (h < 120) {
        r = x;
        g = c;
        b = 0;
    }
    else if (h < 180) {
        r = 0;
        g = c;
        b = x;
    }
    else if (h < 240) {
        r = 0;
        g = x;
        b = c;
    }
    else if (h < 300) {
        r = x;
        g = 0;
        b = c;
    }
    else {
        r = c;
        g = 0;
        b = x;
    }

    r = normalize_rgb_value(r, m);
    g = normalize_rgb_value(g, m);
    b = normalize_rgb_value(b, m);

    return rgbToHex(r, g, b);
}

function normalize_rgb_value(color, m) {
    color = Math.floor((color + m) * 255);
    if (color < 0) {
        color = 0;
    }
    return color;
}

function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function sortFunction(a, b) {
    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] < b[0]) ? -1 : 1;
    }
}

module.exports = roomPlanner