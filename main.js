let Traveler = require('Traveler');

const data = {
    "E46N42": {
        worker: [MOVE, MOVE, CARRY, WORK, WORK],
        farmer: [MOVE, CARRY, WORK, WORK, WORK, WORK, WORK, WORK, WORK],
        carrier: [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY],
        builder: [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY],
        upgrader: [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY],
        defenderHi: [TOUGH, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK],
        defenderLo: [MOVE, ATTACK, ATTACK, ATTACK, TOUGH],
        claimer: [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
            CARRY, CARRY, CARRY, CARRY,
            WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK],
        remoteBuilder: [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY],
        reserver: [MOVE, MOVE, CLAIM, CLAIM],
        hauler: [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY],
        prospector: [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, WORK, WORK, WORK, WORK, WORK, WORK, CARRY],
        tester: [MOVE],
        wall: 250000,
        spawns: ['Spawn1'],
        oldPoints: 0,
        TTU: 0,
        oldLevel: 1,
        population: {
            worker: 0,
            farmer: 3,
            carrier: 2,
            builder: 2,
            upgrader: 1,
            claimer: 0,
            remoteBuilder: 2,
            reserver: 2,
            hauler: 2,
            prospector: 2
        },
        linkFrom: [
            [43, 13],
            [28, 10]
        ],
        linkTo: {
            x: 35,
            y: 13
        },
        remoteMining: {
            "Flag1": "E46N41",
            "Flag2": "E47N42"
        },
        mineralType: RESOURCE_HYDROGEN
    }
}

let tickCount = 0
let avgTickCount = 12

module.exports.loop = function () {
    if (Game.cpu.bucket == 10000) {
        Game.cpu.generatePixel();
    }
    jobs('E46N42')
    defendRoom('E46N42', 'Spawn1')
    link('E46N42')
}

function jobs(roomName) {
    let farmersCount = 0;
    let carriersCount = 0;
    let buildersCount = 0;
    let upgradersCount = 0;
    let claimerCount = 0;
    let remoteBuilderCount = 0;
    let workerCount = 0;
    let reserverCount = 0;
    let haulerCount = 0;
    let prospectorCount = 0;
    let spawn = Game.spawns[data[roomName].spawns[0]];
    let sources = Game.rooms[roomName].find(FIND_SOURCES);
    if (Game.rooms[roomName].find(FIND_STRUCTURES, { filter: (s) => (s.structureType == STRUCTURE_EXTRACTOR) })) {
        let mineral = Game.rooms[roomName].find(FIND_MINERALS)[0]
        if (mineral.mineralAmount > 0) {
            sources.push(mineral)
        }
    }
    data[roomName].population.farmer = sources.length
    let isLevel5 = Game.rooms[roomName].energyCapacityAvailable >= 1800
    for (s in sources) {
        let checkCreep = Memory[sources[s].id + "s:c"]
        if (!Game.getObjectById(checkCreep)) {
            delete Memory[sources[s].id + "s:c"];
        }
    }
    if (Game.flags) {
        for (f in Game.flags) {
            let checkCreep = Game.flags[f].memory.creep
            let checkHauler = Game.flags[f].memory.creepHauler
            let checkHauler2 = Game.flags[f].memory.creepHauler2
            let checkProspector = Game.flags[f].memory.creepProspector
            let checkRemoteBuilder = Game.flags[f].memory.creepBuilder
            if (!Game.getObjectById(checkCreep)) {
                delete Game.flags[f].memory.creep
            }
            if (!Game.getObjectById(checkHauler)) {
                delete Game.flags[f].memory.creepHauler
            }
            if (!Game.getObjectById(checkProspector)) {
                delete Game.flags[f].memory.creepProspector
            }
            if (!Game.getObjectById(checkRemoteBuilder)) {
                delete Game.flags[f].memory.creepBuilder
            }
            if (!Game.getObjectById(checkHauler2) || isLevel5) {
                delete Game.flags[f].memory.creepHauler2
            }
        }
    }
    for (let creepname in Game.creeps) {
        if (creepname.includes('farmer') && Game.creeps[creepname].room == "[room " + roomName + "]") {
            let creep = Game.creeps[creepname]
            if (creep) {
                let source;
                if (creep.memory.sourceId) {
                    source = Game.getObjectById(creep.memory.sourceId);
                } else {
                    for (source = sources.pop(); source && Memory[source.id + "s:c"]; source = sources.pop()) { }
                    if (source) {
                        creep.memory.sourceId = source.id;
                        Memory[source.id + "s:c"] = creep.id;
                    }
                }
                if (!source) {
                    continue;
                }

                if (creep.store.getFreeCapacity()) {
                    if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(source, { visualizePathStyle: { stroke: '#ffff00', opacity: 0.9 } });
                    }
                } else {
                    let containerTarget = creep.pos.findClosestByPath(FIND_STRUCTURES, { filter: (s) => (s.structureType == STRUCTURE_CONTAINER && s.store.getFreeCapacity() > 0) })
                    if (creep.store.getUsedCapacity(data[roomName].mineralType) > 0 && containerTarget) {
                        if (creep.transfer(containerTarget, data[roomName].mineralType) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(containerTarget);
                        }
                    }
                    let targetLink = Game.rooms[roomName].lookForAt('structure', data[roomName].linkFrom[0][0], data[roomName].linkFrom[0][1])[0];
                    if (targetLink) {
                        if (creep.transfer(targetLink, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE && data[roomName].linkFrom[1]) {
                            targetLink = Game.rooms[roomName].lookForAt('structure', data[roomName].linkFrom[1][0], data[roomName].linkFrom[1][1])[0];
                        }
                    }
                    if (targetLink) {
                        if (creep.transfer(targetLink, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            if (containerTarget) {
                                if (creep.transfer(containerTarget, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                    creep.drop(RESOURCE_ENERGY);
                                }
                            } else {
                                creep.drop(RESOURCE_ENERGY);
                            }
                        }
                    } else {
                        if (containerTarget) {
                            if (creep.transfer(containerTarget, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                creep.drop(RESOURCE_ENERGY);
                            }
                        } else {
                            creep.drop(RESOURCE_ENERGY);
                        }
                    }
                }

                farmersCount++
            }
        } else if (creepname.includes('carrier') && Game.creeps[creepname].room == "[room " + roomName + "]") {
            let creep = Game.creeps[creepname]
            if (creep) {
                if (!creep.store.getUsedCapacity()) {
                    let target1 = Game.rooms[roomName].lookForAt('structure', data[roomName].linkTo.x, data[roomName].linkTo.y)[0];
                    let target = creep.pos.findClosestByPath(FIND_DROPPED_RESOURCES, {
                        filter: (r) => r.amount > 50
                    });
                    let targetStorage = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                        filter: (s) => (s.structureType == STRUCTURE_STORAGE && s.store.getUsedCapacity() > 50)
                    })
                    let containerTarget1 = creep.pos.findClosestByPath(FIND_STRUCTURES, { filter: (s) => (s.structureType == STRUCTURE_CONTAINER && s.store.getUsedCapacity() > 50) })
                    if (target1 && target1.store[RESOURCE_ENERGY] > 0) {
                        if (target1.store[RESOURCE_ENERGY] > 0) {
                            if (creep.withdraw(target1, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(target1, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } })
                            }
                        }
                    } else if (target) {
                        if (creep.pickup(target) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(target, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } });
                        }
                    } else if (containerTarget1) {
                        if (creep.withdraw(containerTarget1, data[roomName].mineralType) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(containerTarget1, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } });
                        } else if (creep.withdraw(containerTarget1, data[roomName].mineralType) == ERR_NOT_ENOUGH_RESOURCES) {
                            if (creep.withdraw(containerTarget1, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(containerTarget1, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } });
                            }
                        }
                    } else if (targetStorage && (FIND_STRUCTURES, { filter: (s) => (s.structureType == STRUCTURE_EXTENSION && s.store.getFreeCapacity(RESOURCE_ENERGY) > 0) }) && (FIND_STRUCTURES, { filter: (s) => { return (s.structureType == STRUCTURE_TOWER && s.store.getFreeCapacity(RESOURCE_ENERGY) > 0) } })) {
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
                    let terminal = creep.pos.findClosestByPath(FIND_STRUCTURES, { filter: (s) => { return (s.structureType == STRUCTURE_TERMINAL && s.store.getFreeCapacity() > 0) } })
                    if (creep.store.getUsedCapacity(data[roomName].mineralType) > 0 && terminal) {
                        if (creep.transfer(terminal, data[roomName].mineralType) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(terminal, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } })
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
                                    if (creep.store.getUsedCapacity(data[roomName].mineralType) > 0) {
                                        if (creep.transfer(conainterTarget, data[roomName].mineralType) == ERR_NOT_IN_RANGE) {
                                            creep.moveTo(conainterTarget, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } })
                                        }
                                    } else {
                                        if (creep.transfer(conainterTarget, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                            creep.moveTo(conainterTarget, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } })
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                carriersCount++
            }
        } else if (creepname.includes('builder') && Game.creeps[creepname].room == "[room " + roomName + "]") {
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
                        let targetEnergy = creep.pos.findClosestByPath(FIND_DROPPED_RESOURCES, {
                            filter: (r) => r.resourceType == RESOURCE_ENERGY && r.amount > 100
                        });
                        let targetEnergyC = creep.pos.findClosestByPath(FIND_STRUCTURES,
                            {
                                filter: (s) => (s.structureType == STRUCTURE_CONTAINER && s.store[RESOURCE_ENERGY] > 300)

                            });
                        if (targetEnergy) {
                            if (creep.pickup(targetEnergy) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(targetEnergy, { visualizePathStyle: { stroke: '#0055ff', opacity: 0.9 } });
                            }
                        } else if (targetEnergyC) {
                            if (creep.withdraw(targetEnergyC, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(targetEnergyC, { visualizePathStyle: { stroke: '#aa00ff', opacity: 0.9 } });
                            }
                        } else {
                            let targetEnergyS = creep.pos.findClosestByPath(FIND_STRUCTURES,
                                {
                                    filter: (s) => (s.structureType == STRUCTURE_STORAGE && s.store[RESOURCE_ENERGY] > 0)

                                });
                            if (targetEnergyS) {
                                if (creep.withdraw(targetEnergyS, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                    creep.moveTo(targetEnergyS, { visualizePathStyle: { stroke: '#0055ff', opacity: 0.9 } });
                                }
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
        } else if (creepname.includes('upgrader') && Game.creeps[creepname].room == "[room " + roomName + "]") {
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
                            filter: (s) => (s.structureType == STRUCTURE_CONTAINER && s.store[RESOURCE_ENERGY] > 400)

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
        } else if (creepname.includes('defender') && Game.creeps[creepname].room == "[room " + roomName + "]") {
            let creep = Game.creeps[creepname]
            if (creep) {
                let target = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS);
                if (target) {
                    if (creep.attack(target) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(target, { visualizePathStyle: { stroke: '#ff00ae', opacity: 0.9 } });
                    }
                }
            }
        } else if (creepname.includes('claimer') && Game.creeps[creepname].room == "[room " + roomName + "]") {
            creep = Game.creeps[creepname]
            if (creep) {
                if (Game.flags.claim) {
                    if (creep.room != Game.flags.claim.room) {
                        creep.moveTo(Game.flags.claim, { visualizePathStyle: { stroke: '#ff00ae', opacity: 0.9 } })
                    } else {
                        if (creep.claimController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(creep.room.controller, { visualizePathStyle: { stroke: '#aa00ff', opacity: 0.9 } });
                        }
                    }
                }
                claimerCount++
            }
        } else if (creepname.includes('remote-b') && (Game.creeps[creepname].room == "[room " + roomName + "]" || (() => { for (flag in data[roomName].remoteMining) { if (Game.creeps[creepname].room.name == data[roomName].remoteMining[flag]) { return true } } })())) {
            creep = Game.creeps[creepname]
            if (creep) {
                let reserverFlags = []
                for (flag in Game.flags) {
                    if (Game.flags[flag].secondaryColor == COLOR_GREEN && !Game.flags[flag].memory.creepBuilder) {
                        reserverFlags.push(flag)
                    }
                }
                if (reserverFlags.length > 0 && !creep.memory.reserveFlagId) {
                    let flag
                    if (!creep.memory.reserveFlagId) {
                        Game.flags[reserverFlags[0]].memory.creepBuilder = creep.id
                        creep.memory.reserveFlagId = reserverFlags[0]
                        flag = Game.flags[creep.memory.reserveFlagId]
                    }
                } else {
                    flag = Game.flags[creep.memory.reserveFlagId]
                    if (flag) {
                        if (flag.room) {
                            if (flag.room.name == creep.room.name) {
                                if (creep.store.getFreeCapacity() == 0) {
                                    creep.memory.working = true
                                } else {
                                    creep.memory.harvesting = true
                                }
                                if (creep.store.getUsedCapacity() == 0) {
                                    creep.memory.harvest = true
                                    creep.memory.working = false
                                }
                                if (creep.memory.working) {
                                    let target = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
                                    let closestDamagedStructure = creep.pos.findClosestByPath(FIND_STRUCTURES, { filter: (s) => { return (s.hits < s.hitsMax && s.structureType != STRUCTURE_WALL && s.structureType != STRUCTURE_RAMPART) } })
                                    if (target) {
                                        if (creep.build(target) == ERR_NOT_IN_RANGE) {
                                            creep.moveTo(target, { maxRooms: 1, visualizePathStyle: { stroke: '#0055ff', opacity: 0.9 } });
                                        }
                                    } else if (closestDamagedStructure) {
                                        if (creep.repair(closestDamagedStructure) == ERR_NOT_IN_RANGE) {
                                            creep.moveTo(closestDamagedStructure, { maxRooms: 1, visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } })
                                        }
                                    }
                                } else if (creep.memory.harvesting) {
                                    let target = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
                                    if (target) {
                                        if (creep.harvest(target) == ERR_NOT_IN_RANGE) {
                                            creep.moveTo(target, { maxRooms: 1, visualizePathStyle: { stroke: '#aa00ff', opacity: 0.9 } });
                                        }
                                    }
                                }
                            } else {
                                creep.moveTo(flag, { visualizePathStyle: { stroke: '#ff00ae', opacity: 0.9 } })
                            }
                        } else {
                            creep.moveTo(flag, { visualizePathStyle: { stroke: '#ff00ae', opacity: 0.9 } })
                        }
                    }
                }
                remoteBuilderCount++
            }
        } else if (creepname.includes('worker') && Game.creeps[creepname].room == "[room " + roomName + "]") {
            creep = Game.creeps[creepname]
            if (creep) {
                if (creep.store.getFreeCapacity() == 0) {
                    creep.memory.working = true
                } else {
                    creep.memory.harvesting = true
                }
                if (creep.store.getUsedCapacity() == 0) {
                    creep.memory.harvest = true
                    creep.memory.working = false
                }

                if (creep.memory.working) {
                    if (spawn.store.getFreeCapacity(RESOURCE_ENERGY) > 0) {
                        if (creep.transfer(spawn, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(spawn, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } })
                        }
                    } else if (creep.room.controller) {
                        if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(creep.room.controller, { visualizePathStyle: { stroke: '#0055ff', opacity: 0.9 } });
                        }
                    }
                } else if (creep.memory.harvesting) {
                    const target = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
                    if (target) {
                        if (creep.harvest(target) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(target, { visualizePathStyle: { stroke: '#aa00ff', opacity: 0.9 } });
                        }
                    }
                }
                workerCount++
            }
        } else if (creepname.includes('reserver') && (Game.creeps[creepname].room == "[room " + roomName + "]" || (() => { for (flag in data[roomName].remoteMining) { if (Game.creeps[creepname].room.name == data[roomName].remoteMining[flag]) { return true } } })())) {
            creep = Game.creeps[creepname]
            if (creep) {
                let reserverFlags = []
                for (flag in Game.flags) {
                    if (Game.flags[flag].secondaryColor == COLOR_GREEN && !Game.flags[flag].memory.creep) {
                        reserverFlags.push(flag)
                    }
                }
                if (reserverFlags.length > 0 && !creep.memory.reserveFlagId) {
                    let flag
                    if (!creep.memory.reserveFlagId) {
                        Game.flags[reserverFlags[0]].memory.creep = creep.id
                        creep.memory.reserveFlagId = reserverFlags[0]
                        flag = Game.flags[creep.memory.reserveFlagId]
                    }
                } else {
                    flag = Game.flags[creep.memory.reserveFlagId]
                    if (flag) {
                        if (flag.room) {
                            if (flag.room.name == creep.room.name) {
                                if (creep.reserveController(Game.rooms[data[roomName].remoteMining[flag.name]].controller) == ERR_NOT_IN_RANGE) {
                                    creep.moveTo(Game.rooms[data[roomName].remoteMining[flag.name]].controller, { visualizePathStyle: { stroke: '#ff00ae', opacity: 0.9 } })
                                }
                            } else {
                                creep.moveTo(flag, { visualizePathStyle: { stroke: '#ff00ae', opacity: 0.9 } })
                            }
                        } else {
                            creep.moveTo(flag, { visualizePathStyle: { stroke: '#ff00ae', opacity: 0.9 } })
                        }
                    }
                }
                reserverCount++
            }
        } else if (creepname.includes('remote-h') && (Game.creeps[creepname].room == "[room " + roomName + "]" || (() => { for (flag in data[roomName].remoteMining) { if (Game.creeps[creepname].room.name == data[roomName].remoteMining[flag]) { return true } } })())) {
            creep = Game.creeps[creepname]
            if (creep) {
                let reserverFlags = []
                for (flag in Game.flags) {
                    if (Game.flags[flag].secondaryColor == COLOR_GREEN && (!Game.flags[flag].memory.creepHauler || (!Game.flags[flag].memory.creepHauler2 && !isLevel5))) {
                        reserverFlags.push(flag)
                    }
                }
                if (reserverFlags.length > 0 && !creep.memory.reserveFlagId) {
                    let flag
                    if (!creep.memory.reserveFlagId) {
                        if (!Game.flags[reserverFlags[0]].memory.creepHauler) {
                            Game.flags[reserverFlags[0]].memory.creepHauler = creep.id
                        } else if (!Game.flags[reserverFlags[0]].memory.creepHauler2 && !isLevel5) {
                            Game.flags[reserverFlags[0]].memory.creepHauler2 = creep.id
                        }
                        creep.memory.reserveFlagId = reserverFlags[0]
                        flag = Game.flags[creep.memory.reserveFlagId]
                    }
                } else {
                    flag = Game.flags[creep.memory.reserveFlagId]
                    if (flag) {
                        if (flag.room) {
                            if (!creep.store.getFreeCapacity()) {
                                creep.memory.returning = true
                            }
                            if (!creep.store.getUsedCapacity()) {
                                creep.memory.returning = false
                            }
                            if (flag.room.name == creep.room.name) {
                                if (!creep.memory.returning) {
                                    let target = creep.pos.findClosestByPath(FIND_DROPPED_RESOURCES, {
                                        filter: (r) => r.resourceType == RESOURCE_ENERGY && r.amount > 50
                                    });
                                    let containerTarget1 = creep.pos.findClosestByPath(FIND_STRUCTURES, { filter: (s) => (s.structureType == STRUCTURE_CONTAINER && s.store[RESOURCE_ENERGY] > 50) })
                                    if (target) {
                                        if (creep.pickup(target) == ERR_NOT_IN_RANGE) {
                                            creep.moveTo(target, { maxRooms: 1, visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } });
                                        }
                                    } else if (containerTarget1) {
                                        if (creep.withdraw(containerTarget1, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                            creep.moveTo(containerTarget1, { maxRooms: 1, visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } });
                                        }
                                    }
                                } else if (creep.memory.returning) {
                                    let storageRoom = Game.rooms[roomName].find(FIND_STRUCTURES, {
                                        filter: (s) => (s.structureType == STRUCTURE_STORAGE)
                                    })
                                    if (storageRoom) {
                                        if (roomName != creep.room.name) {
                                            let roomHome = new RoomPosition(spawn.pos.x, spawn.pos.y, roomName)
                                            creep.moveTo(roomHome, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } });
                                        } else if (creep.transfer(storageRoom, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                            creep.moveTo(storageRoom, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } });
                                        } else {
                                            creep.moveTo(storageRoom, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } });
                                        }
                                    }
                                }
                            } else if (creep.memory.returning) {
                                let storageRoom = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                                    filter: (s) => (s.structureType == STRUCTURE_STORAGE)
                                })
                                if (storageRoom) {
                                    if (creep.transfer(storageRoom, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                        creep.moveTo(storageRoom, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } });
                                    }
                                }
                            } else {
                                creep.moveTo(flag, { visualizePathStyle: { stroke: '#ff00ae', opacity: 0.9 } })
                            }
                        } else if (creep.memory.returning) {
                            let storageRoom = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                                filter: (s) => (s.structureType == STRUCTURE_STORAGE)
                            })
                            if (storageRoom) {
                                if (creep.transfer(storageRoom, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                    creep.moveTo(storageRoom, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } });
                                }
                            }
                        } else {
                            creep.moveTo(flag, { visualizePathStyle: { stroke: '#ff00ae', opacity: 0.9 } })
                        }
                    }
                }
                haulerCount++
            }
        } else if (creepname.includes('remote-m') && (Game.creeps[creepname].room == "[room " + roomName + "]" || (() => { for (flag in data[roomName].remoteMining) { if (Game.creeps[creepname].room.name == data[roomName].remoteMining[flag]) { return true } } })())) {
            creep = Game.creeps[creepname]
            if (creep) {
                let reserverFlags = []
                for (flag in Game.flags) {
                    if (Game.flags[flag].secondaryColor == COLOR_GREEN && !Game.flags[flag].memory.creepProspector) {
                        reserverFlags.push(flag)
                    }
                }
                if (reserverFlags.length > 0 && !creep.memory.reserveFlagId) {
                    let flag
                    if (!creep.memory.reserveFlagId) {
                        Game.flags[reserverFlags[0]].memory.creepProspector = creep.id
                        creep.memory.reserveFlagId = reserverFlags[0]
                        flag = Game.flags[creep.memory.reserveFlagId]
                    }
                } else {
                    flag = Game.flags[creep.memory.reserveFlagId]
                    if (flag) {
                        if (flag.room) {
                            if (flag.room.name == creep.room.name) {
                                let remoteSource = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE)
                                if (creep.store.getFreeCapacity()) {
                                    if (creep.harvest(remoteSource) == ERR_NOT_IN_RANGE) {
                                        creep.moveTo(remoteSource, { maxRooms: 1, visualizePathStyle: { stroke: '#ffff00', opacity: 0.9 } });
                                    }
                                } else {
                                    let containerTarget = creep.pos.findClosestByPath(FIND_STRUCTURES, { filter: (s) => (s.structureType == STRUCTURE_CONTAINER && s.store.getFreeCapacity() > 0) })
                                    if (containerTarget) {
                                        if (creep.transfer(containerTarget, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                            creep.drop(RESOURCE_ENERGY);
                                        }
                                    } else {
                                        creep.drop(RESOURCE_ENERGY);
                                    }
                                }
                            } else {
                                creep.moveTo(flag, { visualizePathStyle: { stroke: '#ff00ae', opacity: 0.9 } })
                            }
                        } else {
                            creep.moveTo(flag, { visualizePathStyle: { stroke: '#ff00ae', opacity: 0.9 } })
                        }
                    }
                }
                prospectorCount++
            }
        }
    }
    let list = []
    let id = Math.floor(1000 + Math.random() * 9000);
    if (workerCount < data[roomName].population.worker) {
        spawn.spawnCreep(data[roomName].worker, 'worker' + id)
    } else if (farmersCount < data[roomName].population.farmer) {
        spawn.spawnCreep(data[roomName].farmer, 'farmer' + id)
    } else if (carriersCount < data[roomName].population.carrier) {
        spawn.spawnCreep(data[roomName].carrier, 'carrier' + id)
    } else if (buildersCount < data[roomName].population.builder) {
        spawn.spawnCreep(data[roomName].builder, 'builder' + id)
    } else if (upgradersCount < data[roomName].population.upgrader) {
        spawn.spawnCreep(data[roomName].upgrader, 'upgrader' + id)
    } else if (claimerCount < data[roomName].population.claimer) {
        spawn.spawnCreep(data[roomName].claimer, 'claimer' + id)
    } else if (reserverCount < data[roomName].population.reserver) {
        spawn.spawnCreep(data[roomName].reserver, 'reserver' + id)
    } else if (haulerCount < data[roomName].population.hauler) {
        spawn.spawnCreep(data[roomName].hauler, 'remote-h' + id)
    } else if (prospectorCount < data[roomName].population.prospector) {
        spawn.spawnCreep(data[roomName].prospector, 'remote-m' + id)
    } else if (remoteBuilderCount < data[roomName].population.remoteBuilder) {
        spawn.spawnCreep(data[roomName].remoteBuilder, 'remote-b' + id)
    }
    if (workerCount < data[roomName].population.worker) {
        list.push("Worker")
    }
    if (farmersCount < data[roomName].population.farmer) {
        list.push("Farmer")
    }
    if (carriersCount < data[roomName].population.carrier) {
        list.push("Carrier")
    }
    if (buildersCount < data[roomName].population.builder) {
        list.push("Builder")
    }
    if (upgradersCount < data[roomName].population.upgrader) {
        list.push("Upgrader")
    }
    if (claimerCount < data[roomName].population.claimer) {
        list.push("Claimer")
    }
    if (reserverCount < data[roomName].population.reserver) {
        list.push("Reserver")
    }
    if (haulerCount < data[roomName].population.hauler) {
        list.push("Hauler")
    }
    if (prospectorCount < data[roomName].population.prospector) {
        list.push("Remote Miner")
    }
    if (remoteBuilderCount < data[roomName].population.remoteBuilder) {
        list.push("Remote Builder")
    }
    visuals(roomName, list, spawn)
}

function visuals(roomName, list, spawn) {
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
    new RoomVisual(roomName).text(nFormatter(Game.rooms[roomName].controller.progress, 1) + "/" + nFormatter(Game.rooms[roomName].controller.progressTotal, 1), Game.rooms[roomName].controller.pos.x + 1, Game.rooms[roomName].controller.pos.y, {
        font: 0.4,
        align: 'left',
        color: 'white'
    })
    new RoomVisual(roomName).text(getTTU(roomName, false), Game.rooms[roomName].controller.pos.x + 1, Game.rooms[roomName].controller.pos.y + 0.5, {
        font: 0.4,
        align: 'left',
        color: 'white'
    })
    new RoomVisual(roomName).text(addHours(data[roomName].TTU), Game.rooms[roomName].controller.pos.x + 1, Game.rooms[roomName].controller.pos.y + 1, {
        font: 0.4,
        align: 'left',
        color: 'white'
    })
    let y = 1
    for (let i in list) {
        let count = parseInt(i) + 1
        new RoomVisual(roomName).text(count + ": " + list[i], 0, y, {
            font: 0.5,
            align: 'left',
            color: 'white',
            backgroundColor: 'black',
            backgroundPadding: 0.05
        })
        y += 1
    }
    new RoomVisual(roomName).text("Spawn queue for " + spawn.name, 0, 0, {
        font: 0.6,
        align: 'left',
        color: 'white',
        backgroundColor: 'black',
        backgroundPadding: 0.05
    })
}

function getTTU(roomName, raw) {
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
        let secLeft = ticksLeft * 5.11
        data[roomName].TTU = secLeft / 60 / 60
        tickCount = 0
        if (tickCount == 0) {
            data[roomName].oldPoints = Game.rooms[roomName].controller.progress
        } else avgTickCount += 12
        if (!raw) return Math.round(secLeft / 60 / 60 * 10) / 10 + " Hrs Est."
        else return secLeft / 60 / 60
    } else {
        tickCount++
        if (!raw) return Math.round(data[roomName].TTU * 10) / 10 + " Hrs Est."
        else data[roomName].TTU
    }
}

function defendRoom(myRoomName) {
    let hostiles = Game.rooms[myRoomName].find(FIND_HOSTILE_CREEPS);
    let towers = Game.rooms[myRoomName].find(FIND_MY_STRUCTURES, { filter: { structureType: STRUCTURE_TOWER } });

    // for (rooms in data[myRoomName].remoteMining) {
    //     console.log(rooms)
    // }

    if (towers) {
        //if there are hostiles - attakc them    
        if (hostiles.length > 0) {
            let walls = Game.rooms[myRoomName].find(FIND_STRUCTURES, { filter: (s) => s.structureType == STRUCTURE_WALL || s.structureType == STRUCTURE_RAMPART });
            for (let wall of walls) {
                if (wall.hits <= 5) {
                    Game.rooms[myRoomName].controller.activateSafeMode();
                }
            }
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
                    let ramparts = towers[i].pos.findClosestByRange(FIND_STRUCTURES, { filter: (s) => { return (s.structureType == STRUCTURE_RAMPART && s.hits < data[myRoomName].wall) } })
                    let closestDamagedStructure = towers[i].pos.findClosestByRange(FIND_STRUCTURES, { filter: (s) => { return (s.hits < s.hitsMax && s.structureType != STRUCTURE_WALL && s.structureType != STRUCTURE_RAMPART) } })
                    if (closestDamagedStructure) {
                        towers[i].repair(closestDamagedStructure);
                    } else if (ramparts) {
                        towers[i].repair(ramparts);
                    }
                }
            }

        }
    }
}

function link(roomName) {
    let linkFrom = Game.rooms[roomName].lookForAt('structure', data[roomName].linkFrom[0][0], data[roomName].linkFrom[0][1])[0];
    let linkFrom2 = Game.rooms[roomName].lookForAt('structure', data[roomName].linkFrom[1][0], data[roomName].linkFrom[1][1])[0];

    let linkTo = Game.rooms[roomName].lookForAt('structure', data[roomName].linkTo.x, data[roomName].linkTo.y)[0];

    if (linkFrom.store.getFreeCapacity(RESOURCE_ENERGY) == 0) {
        linkFrom.transferEnergy(linkTo);
    }
    if (linkFrom2) {
        if (linkFrom2.store.getFreeCapacity() == 0) {
            linkFrom2.transferEnergy(linkTo);
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

function addHours(numOfHours) {
    date = new Date()
    date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);

    return date.toLocaleString("en-US", { year: 'numeric', month: '2-digit', day: '2-digit', timeZone: "America/Los_Angeles", hour: '2-digit', minute: '2-digit' });
}
