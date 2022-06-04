const data = {
    "W51S37": {
        farmer: [MOVE, MOVE, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK],
        carrier: [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY],
        builder: [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, WORK, WORK, WORK, WORK, WORK, WORK, WORK],
        upgrader: [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, WORK, WORK, WORK, WORK, WORK, WORK, WORK],
        defenderHi: [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH],
        defenderLo: [MOVE, ATTACK, ATTACK, ATTACK, TOUGH],
        wall: 50000,
        spawns: ['Spawn1'],
        oldPoints: 0,
        TTU: 0,
        oldLevel: 4,
        population: {
            farmer: 2,
            carrier: 2,
            builder: 3,
            upgrader: 2
        }
    }
}

let tickCount = 0
let avgTickCount = 12

module.exports.loop = function () {
    if (Game.cpu.bucket == 10000) {
        Game.cpu.generatePixel();
    }
    jobs('W51S37')
    defendRoom('W51S37', 'Spawn1')
    //exportStats()
}

function jobs(roomName) {
    let farmersCount = 0;
    let carriersCount = 0;
    let buildersCount = 0;
    let upgradersCount = 0;
    let spawn = Game.spawns[data[roomName].spawns[0]];
    for (let creepname in Game.creeps) {
        if (creepname.includes('farmer')) {
            let creep = Game.creeps[creepname]
            if (creep) {
                let target = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
                if (target) {
                    if (creep.harvest(target) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(target, { visualizePathStyle: { stroke: '#ffff00', opacity: 0.9 } });
                    }
                }
                farmersCount++
            }
        } else if (creepname.includes('carrier')) {
            let creep = Game.creeps[creepname]
            if (creep) {
                if (!creep.store.getUsedCapacity(RESOURCE_ENERGY)) {
                    let target = creep.pos.findClosestByPath(FIND_DROPPED_RESOURCES, {
                        filter: (r) => r.resourceType == RESOURCE_ENERGY && r.amount > 50
                    });
                    let targetStorage = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                        filter: (s) => (s.structureType == STRUCTURE_STORAGE && s.store[RESOURCE_ENERGY] > 0)
                    })
                    if (target) {
                        if (creep.pickup(target) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(target, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } });
                        }
                    } else if (targetStorage && spawn.store.getFreeCapacity(RESOURCE_ENERGY) > 0 && (FIND_STRUCTURES, { filter: (s) => (s.structureType == STRUCTURE_EXTENSION && s.store.getFreeCapacity(RESOURCE_ENERGY) > 0) }) && (FIND_STRUCTURES, { filter: (s) => { return (s.structureType == STRUCTURE_TOWER && s.store.getFreeCapacity(RESOURCE_ENERGY) > 0) } })) {
                        if (creep.withdraw(targetStorage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(targetStorage, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } });
                        }
                    } else {
                        let ruin = creep.pos.findClosestByPath(FIND_RUINS, { filter: (s) => { return s.store[RESOURCE_ENERGY] > 0 } })
                        if (ruin) {
                            if (creep.withdraw(ruin, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(ruin, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } })
                            }
                        } else {
                            let tomb = creep.pos.findClosestByPath(FIND_TOMBSTONES, { filter: (s) => { return s.store[RESOURCE_ENERGY] > 100 } })
                            if (tomb) {
                                if (creep.withdraw(tomb, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                    creep.moveTo(tomb, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } })
                                }
                            }
                        }
                    }

                } else {
                    if (spawn.store.getFreeCapacity(RESOURCE_ENERGY) > 0) {
                        if (creep.transfer(spawn, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(spawn, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } })
                        }
                    } else if (FIND_STRUCTURES, { filter: (s) => (s.structureType == STRUCTURE_EXTENSION && s.store.getFreeCapacity(RESOURCE_ENERGY) > 0) }) {
                        let exTarget = creep.pos.findClosestByPath(FIND_STRUCTURES, { filter: (s) => (s.structureType == STRUCTURE_EXTENSION && s.store.getFreeCapacity(RESOURCE_ENERGY) > 0) })
                        if (exTarget) {
                            if (creep.transfer(exTarget, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(exTarget, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } })
                            }
                        } else {
                            let towers = creep.pos.findClosestByPath(FIND_STRUCTURES, { filter: (s) => { return (s.structureType == STRUCTURE_TOWER && s.store.getFreeCapacity(RESOURCE_ENERGY) > 0) } });

                            if (towers) {
                                if (creep.transfer(towers, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                    creep.moveTo(towers, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } })
                                }
                            } else {
                                let conainterTarget = creep.pos.findClosestByPath(FIND_STRUCTURES,
                                    {
                                        filter: (s) => {
                                            return (s.structureType == STRUCTURE_STORAGE)
                                        }
                                    });
                                if (conainterTarget) {
                                    if (creep.transfer(conainterTarget, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                        creep.moveTo(conainterTarget, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } })
                                    }
                                }
                            }
                        }
                    } else {
                        let towers = creep.pos.findClosestByPath(FIND_STRUCTURES, { filter: (s) => { return s.structureType == STRUCTURE_TOWER && s.store.getFreeCapacity(RESOURCE_ENERGY) > 0 } });
                        if (towers) {
                            if (creep.transfer(structure, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(towers, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } })
                            }
                        } else {
                            let conainterTarget = creep.pos.findClosestByPath(FIND_STRUCTURES,
                                {
                                    filter: (s) => {
                                        return (s.structureType == STRUCTURE_STORAGE)
                                    }
                                });
                            if (conainterTarget) {
                                if (creep.transfer(conainterTarget, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                    creep.moveTo(conainterTarget, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } })
                                }
                            }
                        }
                    }
                }
                carriersCount++
            }
        } else if (creepname.includes('builder')) {
            let creep = Game.creeps[creepname]
            if (creep) {
                if (creep.store.getUsedCapacity(RESOURCE_ENERGY) > 0) {
                    let rampTarget = creep.pos.findClosestByPath(FIND_STRUCTURES,
                        {
                            filter: (s) => (s.structureType == STRUCTURE_RAMPART && s.hits < data[roomName].wall)
                        })
                    if (rampTarget) {
                        if (creep.repair(rampTarget) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(rampTarget, { visualizePathStyle: { stroke: '#0055ff', opacity: 0.9 } })
                        }
                    } else {
                        let target = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
                        if (target) {
                            if (creep.build(target) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(target, { visualizePathStyle: { stroke: '#0055ff', opacity: 0.9 } });
                            }
                        } else {
                            if (creep.store.getUsedCapacity(RESOURCE_ENERGY) > 0) {
                                let repairRoad = creep.pos.findClosestByPath(FIND_STRUCTURES,
                                    {
                                        filter: (s) => (s.structureType == STRUCTURE_ROAD && s.hits < 1000)
                                    });
                                let repairWall = creep.pos.findClosestByPath(FIND_STRUCTURES,
                                    {
                                        filter: (s) => (s.structureType == STRUCTURE_WALL && s.hits < data[roomName].wall)

                                    });
                                let closestDamagedStructure = creep.pos.findClosestByPath(FIND_STRUCTURES, { filter: (s) => { return (s.hits < s.hitsMax && s.structureType != STRUCTURE_WALL && s.structureType != STRUCTURE_RAMPART) } })
                                if (repairRoad) {
                                    if (creep.repair(repairRoad) == ERR_NOT_IN_RANGE) {
                                        creep.moveTo(repairRoad, { visualizePathStyle: { stroke: '#0055ff', opacity: 0.9 } })
                                    }
                                } else if (repairWall) {
                                    if (creep.repair(repairWall) == ERR_NOT_IN_RANGE) {
                                        creep.moveTo(repairWall, { visualizePathStyle: { stroke: '#0055ff', opacity: 0.9 } })
                                    }
                                } else if (closestDamagedStructure) {
                                    if (creep.repair(closestDamagedStructure) == ERR_NOT_IN_RANGE) {
                                        creep.moveTo(closestDamagedStructure, { visualizePathStyle: { stroke: '#0055ff', opacity: 0.9 } })
                                    }
                                } else if (creep.room.controller) {
                                    if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                                        creep.moveTo(creep.room.controller, { visualizePathStyle: { stroke: '#0055ff', opacity: 0.9 } });
                                    }
                                }
                            } else {
                                if (creep.pos.getRangeTo(FIND_DROPPED_RESOURCES) < creep.pos.getRangeTo(FIND_STRUCTURES, { filter: (s) => (s.structureType == STRUCTURE_CONTAINER && s.store[RESOURCE_ENERGY] > 0) }) && FIND_STRUCTURES, { filter: (s) => (s.structureType == STRUCTURE_CONTAINER && s.store[RESOURCE_ENERGY] > 0) } != null) {
                                    let targetEnergy = creep.pos.findClosestByPath(FIND_DROPPED_RESOURCES);
                                    if (targetEnergy) {
                                        if (creep.pickup(targetEnergy) == ERR_NOT_IN_RANGE) {
                                            creep.moveTo(targetEnergy, { visualizePathStyle: { stroke: '#0055ff', opacity: 0.9 } });
                                        }
                                    }
                                } else {
                                    let targetEnergy = creep.pos.findClosestByPath(FIND_STRUCTURES,
                                        {
                                            filter: (s) => (s.structureType == STRUCTURE_STORAGE && s.store[RESOURCE_ENERGY] > 0)

                                        });
                                    if (targetEnergy) {
                                        if (creep.withdraw(targetEnergy, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                            creep.moveTo(targetEnergy, { visualizePathStyle: { stroke: '#0055ff', opacity: 0.9 } });
                                        }
                                    }
                                }
                            }
                        }
                    }
                } else {
                    if (creep.pos.getRangeTo(FIND_DROPPED_RESOURCES) < creep.pos.getRangeTo(FIND_STRUCTURES, { filter: (s) => (s.structureType == STRUCTURE_STORAGE && s.store[RESOURCE_ENERGY] > 0) }) && FIND_STRUCTURES, { filter: (s) => (s.structureType == STRUCTURE_CONTAINER && s.store[RESOURCE_ENERGY] > 0) } != null) {
                        let targetEnergy = creep.pos.findClosestByPath(FIND_DROPPED_RESOURCES);
                        if (targetEnergy) {
                            if (creep.pickup(targetEnergy) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(targetEnergy, { visualizePathStyle: { stroke: '#0055ff', opacity: 0.9 } });
                            }
                        }
                    } else {
                        let targetEnergy = creep.pos.findClosestByPath(FIND_STRUCTURES,
                            {
                                filter: (s) => (s.structureType == STRUCTURE_STORAGE && s.store[RESOURCE_ENERGY] > 0)

                            });
                        if (targetEnergy) {
                            if (creep.withdraw(targetEnergy, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(targetEnergy, { visualizePathStyle: { stroke: '#0055ff', opacity: 0.9 } });
                            }
                        }
                    }
                }
                buildersCount++
            }
        } else if (creepname.includes('upgrader')) {
            let creep = Game.creeps[creepname]
            if (creep) {
                if (creep.store.getUsedCapacity(RESOURCE_ENERGY) > 0) {
                    if (creep.room.controller) {
                        if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(creep.room.controller, { visualizePathStyle: { stroke: '#aa00ff', opacity: 0.9 } });
                        }
                    }
                } else {
                    let targetEnergy = creep.pos.findClosestByPath(FIND_STRUCTURES,
                        {
                            filter: (s) => (s.structureType == STRUCTURE_CONTAINER && s.store[RESOURCE_ENERGY] > 0)

                        });
                    let targetStorage = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                        filter: (s) => (s.structureType == STRUCTURE_STORAGE && s.store[RESOURCE_ENERGY] > 0)
                    })
                    if (targetEnergy) {
                        if (creep.withdraw(targetEnergy, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(targetEnergy, { visualizePathStyle: { stroke: '#aa00ff', opacity: 0.9 } });
                        }
                    } else if (targetStorage) {
                        if (creep.withdraw(targetStorage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(targetStorage, { visualizePathStyle: { stroke: '#aa00ff', opacity: 0.9 } });
                        }
                    } else {
                        let targetEnergy2 = creep.pos.findClosestByPath(FIND_DROPPED_RESOURCES);
                        if (targetEnergy2) {
                            if (creep.pickup(targetEnergy2) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(targetEnergy2, { visualizePathStyle: { stroke: '#aa00ff', opacity: 0.9 } });
                            }
                        }
                    }
                }
                upgradersCount++
            }
        } else if (creepname.includes('defender')) {
            let creep = Game.creeps[creepname]
            if (creep) {
                let target = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS)
                if (target) {
                    if (creep.attack(target) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(target, { visualizePathStyle: { stroke: '#ff00ae', opacity: 0.9 } });
                    }
                }
            }
        }
    }
    let id = Math.floor(1000 + Math.random() * 9000);
    if (farmersCount < data[roomName].population.farmer) {
        spawn.spawnCreep(data[roomName].farmer, 'farmer' + id)
    } else if (carriersCount < data[roomName].population.carrier) {
        spawn.spawnCreep(data[roomName].carrier, 'carrier' + id)
    } else if (buildersCount < data[roomName].population.builder) {
        spawn.spawnCreep(data[roomName].builder, 'builder' + id)
    } else if (upgradersCount < data[roomName].population.upgrader) {
        spawn.spawnCreep(data[roomName].upgrader, 'upgrader' + id)
    }
    visuals(roomName)
}

function visuals(roomName) {
    for (let i in data[roomName].spawns) {
        if (Game.spawns[data[roomName].spawns[i]].spawning) {
            new RoomVisual(roomName).text("Spawning: " + Game.spawns[data[roomName].spawns[i]].spawning.name, Game.spawns[data[roomName].spawns[i]].pos.x + 4, Game.spawns[data[roomName].spawns[i]].pos.y + 1, {
                font: 0.4,
                align: 'right',
                color: 'white',
                backgroundColor: 'black',
                backgroundPadding: 0.05
            })
            new RoomVisual(roomName).text("Time Remaning: " + Game.spawns[data[roomName].spawns[i]].spawning.remainingTime, Game.spawns[data[roomName].spawns[i]].pos.x + 4, Game.spawns[data[roomName].spawns[i]].pos.y + 1.5, {
                font: 0.4,
                align: 'right',
                color: 'white',
                backgroundColor: 'black',
                backgroundPadding: 0.05
            })
        }
    }
    new RoomVisual(roomName).text(nFormatter(Game.rooms[roomName].controller.progress, 1) + "/" + nFormatter(Game.rooms[roomName].controller.progressTotal, 1), Game.rooms[roomName].controller.pos.x + 3, Game.rooms[roomName].controller.pos.y, {
        font: 0.4,
        align: 'right',
        color: 'white'
    })
    new RoomVisual(roomName).text(getTTU(roomName) + " Hrs Est.", Game.rooms[roomName].controller.pos.x + 3, Game.rooms[roomName].controller.pos.y + 0.5, {
        font: 0.4,
        align: 'right',
        color: 'white'
    })
}

function getTTU(roomName) {
    if (tickCount >= 12) {
        let old
        if (data[roomName].oldLevel == Game.rooms[roomName].controller.level) old = data[roomName].oldPoints
        else { 
            old = 0
            data[roomName].oldLevel = Game.rooms[roomName].controller.level
        }
        let diff = Game.rooms[roomName].controller.progress - old
        let avgPerTick = diff / avgTickCount
        let ticksLeft = (Game.rooms[roomName].controller.progressTotal - Game.rooms[roomName].controller.progress) / avgPerTick
        let secLeft = ticksLeft * 5.06
        data[roomName].TTU = Math.round(secLeft / 60 / 60 * 10) / 10
        tickCount = 0
        if (tickCount == 0) {
            data[roomName].oldPoints = Game.rooms[roomName].controller.progress
        } else avgTickCount += 12
        return Math.round(secLeft / 60 / 60 * 10) / 10
    } else {
        tickCount++
        return data[roomName].TTU
    }
}

function defendRoom(myRoomName) {
    let hostiles = Game.rooms[myRoomName].find(FIND_HOSTILE_CREEPS);
    let towers = Game.rooms[myRoomName].find(FIND_MY_STRUCTURES, { filter: { structureType: STRUCTURE_TOWER } });

    if (towers) {
        //if there are hostiles - attakc them    
        if (hostiles.length > 0) {
            Game.rooms[myRoomName].controller.activateSafeMode();
            let id = Math.floor(1000 + Math.random() * 9000);
            if (Game.spawns[data[myRoomName].spawns[0]].canCreateCreep(data[myRoomName].defenderHi, 'defender' + id) == OK) {
                Game.spawns[data[myRoomName].spawns[0]].createCreep(data[myRoomName].defenderHi, 'defender' + id);
            } else {
                Game.spawns[data[myRoomName].spawns[0]].createCreep(data[myRoomName].defenderLo, 'defender' + id);
            }
            let username = hostiles[0].owner.username;
            Game.notify(`User ${username} spotted in room ${myRoomName}`);
            towers.forEach(tower => tower.attack(hostiles[0]));
        }

        //if there are no hostiles....
        if (hostiles.length === 0) {

            //....first heal any damaged creeps
            for (let name in Game.creeps) {
                // get the creep object
                let creep = Game.creeps[name];
                if (creep.hits < creep.hitsMax) {
                    towers.forEach(tower => tower.heal(creep));
                }
            }

            for (let i in towers) {
                //...repair Buildings! :) But ONLY until HALF the energy of the tower is gone.
                //Because we don't want to be exposed if something shows up at our door :
                if (towers[i].store[RESOURCE_ENERGY] > towers[i].store.getCapacity(RESOURCE_ENERGY) / 2) {

                    //Find the closest damaged Structure
                    let closestDamagedStructure = towers[i].pos.findClosestByRange(FIND_STRUCTURES, { filter: (s) => { return (s.hits < s.hitsMax && s.structureType != STRUCTURE_WALL && s.structureType != STRUCTURE_RAMPART) } })
                    if (closestDamagedStructure) {
                        towers[i].repair(closestDamagedStructure);
                    }
                }
            }

        }
    }
}

function nFormatter(num, digits) {
    const lookup = [
        { value: 1, symbol: "" },
        { value: 1e3, symbol: "k" },
        { value: 1e6, symbol: "M" },
        { value: 1e9, symbol: "G" },
        { value: 1e12, symbol: "T" },
        { value: 1e15, symbol: "P" },
        { value: 1e18, symbol: "E" }
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup.slice().reverse().find(function (item) {
        return num >= item.value;
    });
    return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
}