let farmer = [MOVE, WORK, WORK, WORK, WORK, WORK, WORK, WORK, MOVE]

let carrier = [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY]

let builder = [MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, WORK, WORK, WORK, WORK]

let upgrader = [MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, WORK, WORK, WORK, WORK, WORK]

let defenderHi = [MOVE, MOVE, MOVE, MOVE, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH]
let defenderLo = [MOVE, ATTACK, ATTACK, ATTACK, TOUGH]

let wall = 10000

module.exports.loop = function () {
    if (Game.cpu.bucket == 10000) {
        Game.cpu.generatePixel();
    }
    jobs()
    defendRoom('W51S37')
}

function jobs() {
    let farmersCount = 0;
    let carriersCount = 0;
    let buildersCount = 0;
    let upgradersCount = 0;
    let spawn = Game.spawns['Spawn1'];
    for (let creepname in Game.creeps) {
        if (creepname.includes('farmer')) {
            let creep = Game.creeps[creepname]
            if (creep) {
                let target = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
                if (target) {
                    if (creep.harvest(target) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(target);
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
                    if (target) {
                        if (creep.pickup(target) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(target);
                        }
                    } else {
                        let ruin = creep.pos.findClosestByPath(FIND_RUINS, { filter: (s) => { return s.store[RESOURCE_ENERGY] > 0 } })
                        if (ruin) {
                            if (creep.withdraw(ruin, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(ruin)
                            }
                        }
                    }

                } else {
                    if (spawn.store.getFreeCapacity(RESOURCE_ENERGY) > 0) {
                        if (creep.transfer(spawn, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(spawn)
                        }
                    } else if (FIND_STRUCTURES, { filter: (s) => (s.structureType == STRUCTURE_EXTENSION && s.store.getFreeCapacity(RESOURCE_ENERGY) > 0) }) {
                        let exTarget = creep.pos.findClosestByPath(FIND_STRUCTURES, { filter: (s) => (s.structureType == STRUCTURE_EXTENSION && s.store.getFreeCapacity(RESOURCE_ENERGY) > 0) })
                        if (exTarget) {
                            if (creep.transfer(exTarget, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(exTarget)
                            }
                        } else {
                            let towers = creep.pos.findClosestByPath(FIND_STRUCTURES, { filter: (s) => { return (s.structureType == STRUCTURE_TOWER && s.store.getFreeCapacity(RESOURCE_ENERGY) > 0) } });

                            if (towers) {
                                if (creep.transfer(towers, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                    creep.moveTo(towers)
                                }
                            } else {
                                let conainterTarget = creep.pos.findClosestByPath(FIND_STRUCTURES,
                                    {
                                        filter: (s) => {
                                            return (s.structureType == STRUCTURE_CONTAINER)
                                        }
                                    });
                                if (conainterTarget) {
                                    if (creep.transfer(conainterTarget, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                        creep.moveTo(conainterTarget)
                                    }
                                }
                            }
                        }
                    } else {
                        let towers = creep.pos.findClosestByPath(FIND_STRUCTURES, { filter: (s) => { return s.structureType == STRUCTURE_TOWER && s.store.getFreeCapacity(RESOURCE_ENERGY) > 0 } });
                        if (towers) {
                            if (creep.transfer(structure, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(towers)
                            }
                        } else {
                            let conainterTarget = creep.pos.findClosestByPath(FIND_STRUCTURES,
                                {
                                    filter: (s) => {
                                        return (s.structureType == STRUCTURE_CONTAINER)
                                    }
                                });
                            if (conainterTarget) {
                                if (creep.transfer(conainterTarget, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                    creep.moveTo(conainterTarget)
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
                            filter: (s) => (s.structureType == STRUCTURE_RAMPART && s.hits < wall)
                        })
                    if (rampTarget) {
                        if (creep.repair(rampTarget) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(rampTarget)
                        }
                    } else {
                        let target = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
                        if (target) {
                            if (creep.build(target) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(target);
                            }
                        } else {
                            if (creep.store.getUsedCapacity(RESOURCE_ENERGY) > 0) {
                                let repairRoad = creep.pos.findClosestByPath(FIND_STRUCTURES,
                                    {
                                        filter: (s) => (s.structureType == STRUCTURE_ROAD && s.hits < 1000)
                                    });
                                let repairWall = creep.pos.findClosestByPath(FIND_STRUCTURES,
                                    {
                                        filter: (s) => (s.structureType == STRUCTURE_WALL && s.hits < wall)

                                    });
                                let closestDamagedStructure = creep.pos.findClosestByRange(FIND_STRUCTURES, { filter: (s) => { return (s.hits < s.hitsMax && s.structureType != STRUCTURE_WALL && s.structureType != STRUCTURE_RAMPART) } })
                                if (repairRoad) {
                                    if (creep.repair(repairRoad) == ERR_NOT_IN_RANGE) {
                                        creep.moveTo(repairRoad)
                                    }
                                } else if (repairWall) {
                                    if (creep.repair(repairWall) == ERR_NOT_IN_RANGE) {
                                        creep.moveTo(repairWall)
                                    }
                                } else if (closestDamagedStructure) {
                                    if (creep.repair(closestDamagedStructure) == ERR_NOT_IN_RANGE) {
                                        creep.moveTo(closestDamagedStructure)
                                    }
                                }
                            } else {
                                if (creep.pos.getRangeTo(FIND_DROPPED_RESOURCES) < creep.pos.getRangeTo(FIND_STRUCTURES, { filter: (s) => (s.structureType == STRUCTURE_CONTAINER && s.store[RESOURCE_ENERGY] > 0) }) && FIND_STRUCTURES, { filter: (s) => (s.structureType == STRUCTURE_CONTAINER && s.store[RESOURCE_ENERGY] > 0) } != null) {
                                    let targetEnergy = creep.pos.findClosestByPath(FIND_DROPPED_RESOURCES);
                                    if (targetEnergy) {
                                        if (creep.pickup(targetEnergy) == ERR_NOT_IN_RANGE) {
                                            creep.moveTo(targetEnergy);
                                        }
                                    }
                                } else {
                                    let targetEnergy = creep.pos.findClosestByPath(FIND_STRUCTURES,
                                        {
                                            filter: (s) => (s.structureType == STRUCTURE_CONTAINER && s.store[RESOURCE_ENERGY] > 0)

                                        });
                                    if (targetEnergy) {
                                        if (creep.withdraw(targetEnergy, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                            creep.moveTo(targetEnergy);
                                        }
                                    }
                                }
                            }
                        }
                    }
                } else {
                    if (creep.pos.getRangeTo(FIND_DROPPED_RESOURCES) < creep.pos.getRangeTo(FIND_STRUCTURES, { filter: (s) => (s.structureType == STRUCTURE_CONTAINER && s.store[RESOURCE_ENERGY] > 0) }) && FIND_STRUCTURES, { filter: (s) => (s.structureType == STRUCTURE_CONTAINER && s.store[RESOURCE_ENERGY] > 0) } != null) {
                        let targetEnergy = creep.pos.findClosestByPath(FIND_DROPPED_RESOURCES);
                        if (targetEnergy) {
                            if (creep.pickup(targetEnergy) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(targetEnergy);
                            }
                        }
                    } else {
                        let targetEnergy = creep.pos.findClosestByPath(FIND_STRUCTURES,
                            {
                                filter: (s) => (s.structureType == STRUCTURE_CONTAINER && s.store[RESOURCE_ENERGY] > 0)

                            });
                        if (targetEnergy) {
                            if (creep.withdraw(targetEnergy, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(targetEnergy);
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
                            creep.moveTo(creep.room.controller);
                        }
                    }
                } else {
                    let targetEnergy = creep.pos.findClosestByPath(FIND_STRUCTURES,
                        {
                            filter: (s) => (s.structureType == STRUCTURE_CONTAINER && s.store[RESOURCE_ENERGY] > 0)

                        });
                    if (targetEnergy) {
                        if (creep.withdraw(targetEnergy, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(targetEnergy);
                        }
                    } else {
                        let targetEnergy2 = creep.pos.findClosestByPath(FIND_DROPPED_RESOURCES);
                        if (targetEnergy2) {
                            if (creep.pickup(targetEnergy2) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(targetEnergy2);
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
                        creep.moveTo(target);
                    }
                }
            }
        }
    }
    let id = Math.floor(1000 + Math.random() * 9000);
    if (farmersCount < 3) {
        spawn.spawnCreep(farmer, 'farmer' + id)
    } else if (carriersCount < 2) {
        spawn.spawnCreep(carrier, 'carrier' + id)
    } else if (buildersCount < 3) {
        spawn.spawnCreep(builder, 'builder' + id)
    } else if (upgradersCount < 3) {
        spawn.spawnCreep(upgrader, 'upgrader' + id)
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
            if (Game.spawns['Spawn1'].canCreateCreep(defenderHi, 'defender' + id) == OK) {
                Game.spawns['Spawn1'].createCreep(defenderHi, 'defender' + id);
            } else {
                Game.spawns['Spawn1'].createCreep(defenderLo, 'defender' + id);
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