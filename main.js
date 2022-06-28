let Traveler = require('Traveler');

const data = {
    "E46N42": {
        worker: [MOVE, MOVE, MOVE, CARRY, CARRY, WORK],
        farmer: [MOVE, CARRY, WORK, WORK, WORK, WORK, WORK, WORK, WORK],
        carrier: [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY],
        builder: [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY],
        upgrader: [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY],
        defenderHi: [TOUGH, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK],
        defenderLo: [MOVE, ATTACK, ATTACK, ATTACK, TOUGH],
        claimer: [MOVE, CLAIM],
        remoteBuilder: [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY],
        reserver: [MOVE, MOVE, CLAIM, CLAIM],
        hauler: [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY],
        prospector: [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, WORK, WORK, WORK, WORK, WORK, WORK, CARRY],
        tester: [MOVE],
        mineralFarmer: [MOVE, MOVE, MOVE, MOVE, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY],
        wall: 300000,
        spawns: ['Spawn1'],
        oldPoints: 0,
        TTU: 0,
        oldLevel: 1,
        population: {
            worker: 0,
            farmer: 2,
            carrier: 2,
            builder: 1,
            upgrader: 1,
            claimer: 0,
            remoteBuilder: 2,
            reserver: 2,
            hauler: 2,
            prospector: 2,
            mineralFarmer: 1,
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
            "Flag2": "E47N42",
        },
        mineralType: RESOURCE_HYDROGEN,
        isSelling: false,
        energyToTerminal: 0,
        terminalWithdraw: RESOURCE_LEMERGIUM,
        labs: {
            isReacting: true,
            empty: false,
            reactant1: ["62af67b28f1878e71f4fd78a", RESOURCE_HYDROGEN],
            reactant2: ["62afd2d666c4ca2c987437f8", RESOURCE_OXYGEN],
            product: ["62afc2c460b92e1f44a3e909", RESOURCE_HYDROXIDE]
        }
    },
    "E49N43": {
        worker: [MOVE, CARRY, WORK, WORK],
        farmer: [MOVE, WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY],
        carrier: [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY],
        builder: [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY],
        upgrader: [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY],
        defenderHi: [TOUGH, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK],
        defenderLo: [MOVE, ATTACK, ATTACK, ATTACK, TOUGH],
        claimer: [MOVE, CLAIM],
        remoteBuilder: [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY],
        reserver: [MOVE, MOVE, CLAIM, CLAIM],
        hauler: [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY],
        prospector: [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY],
        tester: [MOVE],
        mineralFarmer: [MOVE, MOVE, MOVE, MOVE, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY],
        wall: 25000,
        spawns: ['Spawn2'],
        oldPoints: 0,
        TTU: 0,
        oldLevel: 1,
        population: {
            worker: 0,
            farmer: 2,
            carrier: 2,
            builder: 2,
            upgrader: 1,
            claimer: 0,
            remoteBuilder: 2,
            reserver: 2,
            hauler: 2,
            prospector: 2,
            mineralFarmer: 0,
        },
        linkFrom: [
            [39, 41],
            [28, 10]
        ],
        linkTo: {
            x: 25,
            y: 31
        },
        remoteMining: {
            "Flag3": "E49N44",
            "Flag4": "E49N42"
        },
        mineralType: RESOURCE_GHODIUM_OXIDE,
        isSelling: false,
        energyToTerminal: 2200,
        terminalWithdraw: RESOURCE_GHODIUM_OXIDE,
        labs: {
            isReacting: false,
            empty: false,
            reactant1: ["",],
            reactant2: ["",],
            product: ["",]
        }
    },
    "E54N39": {
        worker: [MOVE, CARRY, WORK, WORK],
        farmer: [MOVE, WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY],
        carrier: [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY],
        builder: [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY],
        upgrader: [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY],
        defenderHi: [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK],
        claimer: [MOVE, CLAIM],
        remoteBuilder: [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY],
        reserver: [MOVE, MOVE, CLAIM, CLAIM],
        hauler: [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY],
        prospector: [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, WORK, WORK, WORK, WORK, WORK, WORK, CARRY],
        tester: [MOVE],
        mineralFarmer: [MOVE, MOVE, MOVE, MOVE, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY],
        wall: 25000,
        spawns: ['Spawn3'],
        oldPoints: 0,
        TTU: 0,
        oldLevel: 1,
        population: {
            worker: 3,
            farmer: 2,
            carrier: 2,
            builder: 2,
            upgrader: 1,
            claimer: 0,
            remoteBuilder: 0,
            reserver: 0,
            hauler: 0,
            prospector: 0,
            mineralFarmer: 0,
        },
        linkFrom: [
            [43, 13],
            [28, 10]
        ],
        linkTo: {
            x: 35,
            y: 13
        },
        remoteMining: {},
        mineralType: RESOURCE_GHODIUM_OXIDE,
        isSelling: false,
        energyToTerminal: 2200,
        terminalWithdraw: RESOURCE_GHODIUM_OXIDE,
        labs: {
            isReacting: false,
            empty: false,
            reactant1: ["",],
            reactant2: ["",],
            product: ["",]
        }
    }
}
let tickCount = 0
let avgTickCount = 12
let workersCPU = 0
//TODO:
//boost creeps

module.exports.loop = function () {
    jobs('E46N42')
    defendRoom('E46N42', 'Spawn1')
    link('E46N42')

    jobs('E49N43')
    defendRoom('E49N43', 'Spawn2')
    link('E49N43')

    jobs('E54N39')

    exportStats()
}

function jobs(roomName) {
    if (Game.cpu.bucket == 10000) {
        Game.cpu.generatePixel();
    }
    if (Game.resources[PIXEL]) {
        let orders = Game.market.getAllOrders({ type: ORDER_BUY, resourceType: PIXEL });
        let ordersRanked = []

        for (order in orders) {
            let netCreditProfit = orders[order].price * Game.resources[PIXEL]
            ordersRanked.push([netCreditProfit, orders[order].id])
        }
        ordersRanked.sort(sortFunction);

        Game.market.deal(ordersRanked[0][1], Game.resources[PIXEL])
    }
    for (let i in Memory.creeps) {
        if (!Game.creeps[i]) {
            delete Memory.creeps[i];
        }
    }
    for (let i in Memory.flags) {
        if (!Game.flags[i]) {
            delete Memory.flags
        }
    }
    if (data[roomName].labs.reactant1[0] && data[roomName].labs.reactant2[0] && data[roomName].labs.product[0]) {
        let reactant1 = Game.getObjectById(data[roomName].labs.reactant1[0])
        let reactant2 = Game.getObjectById(data[roomName].labs.reactant2[0])
        let product = Game.getObjectById(data[roomName].labs.product[0])

        if (reactant1.store && reactant2.store) {
            if (reactant1.store[data[roomName].labs.reactant1[1]] && reactant2.store[data[roomName].labs.reactant2[1]]) {
                product.runReaction(reactant1, reactant2)
            }
        }
    }
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
    let mineralFarmerCount = 0;
    let spawn = Game.spawns[data[roomName].spawns[0]];
    let sources = Game.rooms[roomName].find(FIND_SOURCES);
    let minerals = []
    if (Game.rooms[roomName].find(FIND_STRUCTURES, { filter: (s) => (s.structureType == STRUCTURE_EXTRACTOR) })) {
        let mineral = Game.rooms[roomName].find(FIND_MINERALS)[0]
        if (mineral.mineralAmount > 0) {
            minerals.push(mineral)
            if (data[roomName].population.mineralFarmer > 0) data[roomName].population.mineralFarmer = 1
        } else {
            data[roomName].population.mineralFarmer = 0
        }
    }
    let isLevel5 = Game.rooms[roomName].energyCapacityAvailable >= 1800
    for (s in sources) {
        if (!Game.getObjectById(Memory[sources[s].id + "s:c"])) {
            delete Memory[sources[s].id + "s:c"];
        }
    }

    if (minerals.length) {
        let checkCreep = Memory[minerals[0].id + "s:c"]
        if (!Game.getObjectById(checkCreep)) {
            delete Memory[minerals[0].id + "s:c"];
        }
    }

    if (Game.flags) {
        for (f in Game.flags) {
            for (flag in data[roomName].remoteMining) {
                if (flag == f) {
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
                    if (creepname.includes("mineral")) {
                        creep.memory.sourceId = minerals[0].id
                        Memory[minerals[0].id + "s:c"] = creep.id;
                    } else {
                        for (source = sources.pop(); source && Memory[source.id + "s:c"]; source = sources.pop()) { }
                        if (source) {
                            creep.memory.sourceId = source.id;
                            Memory[source.id + "s:c"] = creep.id;
                        }
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
                if (creepname.includes("mineral")) {
                    mineralFarmerCount++
                } else {
                    farmersCount++
                }
            }
        } else if (creepname.includes('carrier') && Game.creeps[creepname].room == "[room " + roomName + "]") {
            let creep = Game.creeps[creepname]
            if (creep) {
                let testTower = creep.pos.findClosestByPath(FIND_STRUCTURES, { filter: (s) => { return (s.structureType == STRUCTURE_TOWER && s.store.getFreeCapacity(RESOURCE_ENERGY) > 0) } })
                if (!creep.store.getUsedCapacity() || ((data[roomName].labs.isReacting && Game.rooms[roomName].energyAvailable == Game.rooms[roomName].energyCapacityAvailable && !testTower) && (!creep.store[data[roomName].labs.reactant1[1]] && creep.store[data[roomName].labs.reactant2[1]] && creep.store[data[roomName].labs.product[1]]))) {
                    let terminal = creep.pos.findClosestByPath(FIND_STRUCTURES, { filter: (s) => { return (s.structureType == STRUCTURE_TERMINAL) } })
                    let target1 = Game.rooms[roomName].lookForAt('structure', data[roomName].linkTo.x, data[roomName].linkTo.y)[0];
                    let target = creep.pos.findClosestByPath(FIND_DROPPED_RESOURCES, {
                        filter: (r) => r.amount > 50
                    });
                    let targetStorage = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                        filter: (s) => (s.structureType == STRUCTURE_STORAGE && s.store.getUsedCapacity() > 50)
                    })
                    let containerTarget1 = creep.pos.findClosestByPath(FIND_STRUCTURES, { filter: (s) => (s.structureType == STRUCTURE_CONTAINER && s.store.getUsedCapacity() > 50) })
                    let labProduct
                    if (data[roomName].labs.product[1]) {
                        if (Game.getObjectById(data[roomName].labs.product[0]).store[data[roomName].labs.product[1]] > 500) {
                            labProduct = Game.getObjectById(data[roomName].labs.product[0])
                        }
                    }
                    if (Game.getObjectById(data[roomName].labs.reactant1[0]) && Game.getObjectById(data[roomName].labs.reactant2[0])) {
                        if ((Game.rooms[roomName].energyAvailable == Game.rooms[roomName].energyCapacityAvailable && !testTower) && (Game.getObjectById(data[roomName].labs.reactant1[0]).store[data[roomName].labs.reactant1[1]] < 5 || Game.getObjectById(data[roomName].labs.reactant2[0]).store[data[roomName].labs.reactant2[1]] < 5) && (Game.getObjectById(data[roomName].labs.reactant1[0]).store[data[roomName].labs.reactant1[1]] > 0 && Game.getObjectById(data[roomName].labs.reactant2[0]).store[data[roomName].labs.reactant2[1]] > 0)) {
                            let lab1 = Game.getObjectById(data[roomName].labs.reactant1[0])
                            let lab2 = Game.getObjectById(data[roomName].labs.reactant2[0])
                            if (lab1.store[data[roomName].labs.reactant1[1]] < 5) {
                                if (creep.withdraw(lab1, data[roomName].labs.reactant1[1]) == ERR_NOT_IN_RANGE) {
                                    creep.moveTo(lab1, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } });
                                }
                            } else if (lab2.store[data[roomName].labs.reactant2[1]] < 5) {
                                if (creep.withdraw(lab2, data[roomName].labs.reactant2[1]) == ERR_NOT_IN_RANGE) {
                                    creep.moveTo(lab2, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } });
                                }
                            }
                        } else if (labProduct && Game.rooms[roomName].energyAvailable == Game.rooms[roomName].energyCapacityAvailable && !testTower) {
                            if (creep.withdraw(labProduct, data[roomName].labs.product[1]) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(labProduct, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } });
                            }
                        } else if (data[roomName].labs.isReacting && Game.rooms[roomName].energyAvailable == Game.rooms[roomName].energyCapacityAvailable && !testTower && Game.getObjectById(data[roomName].labs.reactant1[0]) && Game.getObjectById(data[roomName].labs.reactant2[0])) {
                            if (terminal) {
                                if (terminal.store[RESOURCE_ENERGY] < data[roomName].energyToTerminal) {
                                    if (targetStorage) {
                                        if (creep.withdraw(targetStorage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                            creep.moveTo(targetStorage, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } })
                                        }
                                    }
                                }
                            }
                            let lab1 = Game.getObjectById(data[roomName].labs.reactant1[0])
                            let lab2 = Game.getObjectById(data[roomName].labs.reactant2[0])
                            let supplyLab1 = false
                            if (lab1.store[data[roomName].labs.reactant1[1]] < lab2.store[data[roomName].labs.reactant2[1]] && targetStorage.store[data[roomName].labs.reactant1[1]]) {
                                supplyLab1 = true
                            }
                            if (supplyLab1) {
                                if (targetStorage) {
                                    if (creep.withdraw(targetStorage, data[roomName].labs.reactant1[1]) == ERR_NOT_IN_RANGE) {
                                        creep.moveTo(targetStorage, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } });
                                    }
                                }
                            } else if (!supplyLab1 && targetStorage.store[data[roomName].labs.reactant2[1]]) {
                                if (targetStorage) {
                                    if (creep.withdraw(targetStorage, data[roomName].labs.reactant2[1]) == ERR_NOT_IN_RANGE) {
                                        creep.moveTo(targetStorage, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } });
                                    }
                                }
                            }
                        } else {
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
                            } else if (data[roomName].isSelling && (terminal && terminal.store.getUsedCapacity() > 0)) {
                                if (creep.withdraw(terminal, data[roomName].terminalWithdraw) == ERR_NOT_IN_RANGE) {
                                    creep.moveTo(terminal, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } });
                                } else if (creep.withdraw(terminal, data[roomName].terminalWithdraw) == ERR_NOT_ENOUGH_RESOURCES) {
                                    if (creep.withdraw(terminal, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                        creep.moveTo(terminal, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } });
                                    }
                                }
                            } else if (containerTarget1) {
                                if (creep.withdraw(containerTarget1, data[roomName].mineralType) == ERR_NOT_IN_RANGE) {
                                    creep.moveTo(containerTarget1, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } });
                                } else if (creep.withdraw(containerTarget1, data[roomName].mineralType) == ERR_NOT_ENOUGH_RESOURCES) {
                                    if (creep.withdraw(containerTarget1, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                        creep.moveTo(containerTarget1, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } });
                                    }
                                }
                            } else if (terminal) {
                                if (terminal.store) {
                                    if (terminal.store[data[roomName].terminalWithdraw]) {
                                        if (creep.withdraw(terminal, data[roomName].terminalWithdraw) == ERR_NOT_IN_RANGE) {
                                            creep.moveTo(terminal, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } });
                                        }
                                    } else if (targetStorage) {
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
                                } else if (targetStorage && Game.rooms[roomName].energyAvailable < Game.rooms[roomName].energyCapacityAvailable && !testTower) {
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
                            } else if (targetStorage && Game.rooms[roomName].energyAvailable < Game.rooms[roomName].energyCapacityAvailable && testTower) {
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
                        }
                    } else if (labProduct && Game.rooms[roomName].energyAvailable == Game.rooms[roomName].energyCapacityAvailable && !testTower) {
                        if (creep.withdraw(labProduct, data[roomName].labs.product[1]) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(labProduct, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } });
                        }
                    } else if (data[roomName].labs.isReacting && Game.rooms[roomName].energyAvailable == Game.rooms[roomName].energyCapacityAvailable && !testTower) {
                        if (terminal) {
                            if (terminal.store[RESOURCE_ENERGY] < data[roomName].energyToTerminal) {
                                if (targetStorage) {
                                    if (creep.withdraw(targetStorage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                        creep.moveTo(targetStorage, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } })
                                    }
                                }
                            }
                        }
                        let lab1 = Game.getObjectById(data[roomName].labs.reactant1[0])
                        let lab2 = Game.getObjectById(data[roomName].labs.reactant2[0])
                        let supplyLab1 = false
                        if (lab1.store[data[roomName].labs.reactant1[1]] < lab2.store[data[roomName].labs.reactant2[1]] && targetStorage.store[data[roomName].labs.reactant1[1]]) {
                            supplyLab1 = true
                        }
                        if (supplyLab1) {
                            if (targetStorage) {
                                if (creep.withdraw(targetStorage, data[roomName].labs.reactant1[1]) == ERR_NOT_IN_RANGE) {
                                    creep.moveTo(targetStorage, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } });
                                }
                            }
                        } else if (!supplyLab1 && targetStorage.store[data[roomName].labs.reactant2[1]]) {
                            if (targetStorage) {
                                if (creep.withdraw(targetStorage, data[roomName].labs.reactant2[1]) == ERR_NOT_IN_RANGE) {
                                    creep.moveTo(targetStorage, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } });
                                }
                            }
                        }
                    } else {
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
                        } else if (data[roomName].isSelling && (terminal && terminal.store.getUsedCapacity() > 0)) {
                            if (creep.withdraw(terminal, data[roomName].terminalWithdraw) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(terminal, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } });
                            } else if (creep.withdraw(terminal, data[roomName].terminalWithdraw) == ERR_NOT_ENOUGH_RESOURCES) {
                                if (creep.withdraw(terminal, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                    creep.moveTo(terminal, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } });
                                }
                            }
                        } else if (containerTarget1) {
                            if (creep.withdraw(containerTarget1, data[roomName].mineralType) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(containerTarget1, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } });
                            } else if (creep.withdraw(containerTarget1, data[roomName].mineralType) == ERR_NOT_ENOUGH_RESOURCES) {
                                if (creep.withdraw(containerTarget1, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                    creep.moveTo(containerTarget1, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } });
                                }
                            }
                        } else if (terminal) {
                            if (terminal.store) {
                                if (terminal.store[data[roomName].terminalWithdraw]) {
                                    if (creep.withdraw(terminal, data[roomName].terminalWithdraw) == ERR_NOT_IN_RANGE) {
                                        creep.moveTo(terminal, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } });
                                    }
                                } else if (targetStorage) {
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
                            } else if (targetStorage && Game.rooms[roomName].energyAvailable < Game.rooms[roomName].energyCapacityAvailable && !testTower) {
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
                        } else if (targetStorage && Game.rooms[roomName].energyAvailable < Game.rooms[roomName].energyCapacityAvailable && testTower) {
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
                    }
                } else {
                    let conainterStorage = creep.pos.findClosestByPath(FIND_STRUCTURES, { filter: (s) => { return (s.structureType == STRUCTURE_STORAGE) } });
                    let terminal = creep.pos.findClosestByPath(FIND_STRUCTURES, { filter: (s) => { return (s.structureType == STRUCTURE_TERMINAL && s.store.getFreeCapacity() > 0) } })
                    let labs = [Game.getObjectById(data[roomName].labs.reactant1[0]), Game.getObjectById(data[roomName].labs.reactant2[0]), Game.getObjectById(data[roomName].labs.product[0])]
                    if (conainterStorage && creep.store[data[roomName].labs.product[1]]) {
                        if (creep.transfer(conainterStorage, data[roomName].labs.product[1]) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(conainterStorage, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } })
                        }
                    } else if ((!creep.store[data[roomName].labs.product[1]] || !creep.store[data[roomName].labs.reactant1[1]] || !creep.store[data[roomName].labs.reactant2[1]]) && creep.store[data[roomName].terminalWithdraw]) {
                        if (conainterStorage) {
                            if (creep.transfer(conainterStorage, data[roomName].terminalWithdraw) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(conainterStorage, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } })
                            }
                        }
                    } else if ((creep.store.getUsedCapacity(data[roomName].mineralType) > 0 || creep.store.getUsedCapacity(data[roomName].terminalWithdraw) > 0) && !data[roomName].labs.isReacting) {
                        let conainterTarget = creep.pos.findClosestByPath(FIND_STRUCTURES, { filter: (s) => { return (s.structureType == STRUCTURE_STORAGE) } })
                        if (!data[roomName].isSelling) {
                            if (terminal) {
                                if (creep.transfer(terminal, data[roomName].mineralType) == ERR_NOT_IN_RANGE) {
                                    creep.moveTo(terminal, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } })
                                }
                            } else if (conainterTarget) {
                                if (creep.transfer(conainterTarget, data[roomName].mineralType) == ERR_NOT_IN_RANGE) {
                                    creep.moveTo(conainterTarget, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } })
                                }
                            }
                        } else if (data[roomName].isSelling) {
                            let conainterTarget = creep.pos.findClosestByPath(FIND_STRUCTURES, { filter: (s) => { return (s.structureType == STRUCTURE_STORAGE) } })
                            if (conainterTarget) {
                                if (creep.transfer(conainterTarget, data[roomName].terminalWithdraw) == ERR_NOT_IN_RANGE) {
                                    creep.moveTo(conainterTarget, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } })
                                }
                            }
                        }
                    } else if (data[roomName].labs.isReacting && (data[roomName].labs.isReacting && Game.rooms[roomName].energyAvailable == Game.rooms[roomName].energyCapacityAvailable && !testTower) && (creep.store[data[roomName].labs.reactant1[1]] || creep.store[data[roomName].labs.reactant2[1]])) {
                        let lab1 = Game.getObjectById(data[roomName].labs.reactant1[0])
                        let lab2 = Game.getObjectById(data[roomName].labs.reactant2[0])
                        let supplyLab1
                        if (lab1 && lab2) {
                            if (creep.store[data[roomName].labs.reactant1[1]] >= creep.store[data[roomName].labs.reactant2[1]] && (creep.store[data[roomName].labs.reactant1[1]] + creep.store[data[roomName].labs.reactant2[1]]) != 0) {
                                supplyLab1 = true
                            } else if (creep.store[data[roomName].labs.reactant1[1]] <= creep.store[data[roomName].labs.reactant2[1]] && (creep.store[data[roomName].labs.reactant1[1]] + creep.store[data[roomName].labs.reactant2[1]]) != 0) {
                                supplyLab1 = false
                            }
                        }
                        let target = (supplyLab1) ? lab1 : lab2
                        let resource = (supplyLab1) ? data[roomName].labs.reactant1[1] : data[roomName].labs.reactant2[1]
                        if (target) {
                            if (creep.transfer(target, resource) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(target, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } })
                            }
                        }
                    } else {
                        if (spawn.store.getFreeCapacity(RESOURCE_ENERGY) > 0) {
                            if (creep.store[RESOURCE_ENERGY]) {
                                if (creep.transfer(spawn, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                    creep.moveTo(spawn, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } })
                                }
                            } else {
                                let conainterTarget = creep.pos.findClosestByPath(FIND_STRUCTURES, { filter: (s) => { return (s.structureType == STRUCTURE_STORAGE) } });
                                if (conainterTarget) {
                                    if (creep.store[data[roomName].labs.reactant1[1]]) {
                                        if (creep.transfer(conainterTarget, data[roomName].labs.reactant1[1]) == ERR_NOT_IN_RANGE) {
                                            creep.moveTo(conainterTarget, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } })
                                        }
                                    } else if (creep.store[data[roomName].labs.reactant2[1]]) {
                                        if (creep.transfer(conainterTarget, data[roomName].labs.reactant2[1]) == ERR_NOT_IN_RANGE) {
                                            creep.moveTo(conainterTarget, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } })
                                        }
                                    } else if (creep.store[data[roomName].labs.product[1]]) {
                                        if (creep.transfer(conainterTarget, data[roomName].labs.product[1]) == ERR_NOT_IN_RANGE) {
                                            creep.moveTo(conainterTarget, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } })
                                        }
                                    }
                                }
                            }
                        } else if (Game.rooms[roomName].energyAvailable < Game.rooms[roomName].energyCapacityAvailable) {
                            let exTarget = creep.pos.findClosestByPath(FIND_STRUCTURES, { filter: (s) => (s.structureType == STRUCTURE_EXTENSION && s.store.getFreeCapacity(RESOURCE_ENERGY) > 0) })
                            if (exTarget) {
                                if (creep.store[RESOURCE_ENERGY]) {
                                    if (creep.transfer(exTarget, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                        creep.moveTo(exTarget, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } })
                                    }
                                } else {
                                    let conainterTarget = creep.pos.findClosestByPath(FIND_STRUCTURES, { filter: (s) => { return (s.structureType == STRUCTURE_STORAGE) } });
                                    if (conainterTarget) {
                                        if (creep.store[data[roomName].labs.reactant1[1]]) {
                                            if (creep.transfer(conainterTarget, data[roomName].labs.reactant1[1]) == ERR_NOT_IN_RANGE) {
                                                creep.moveTo(conainterTarget, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } })
                                            }
                                        } else if (creep.store[data[roomName].labs.reactant2[1]]) {
                                            if (creep.transfer(conainterTarget, data[roomName].labs.reactant2[1]) == ERR_NOT_IN_RANGE) {
                                                creep.moveTo(conainterTarget, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } })
                                            }
                                        } else if (creep.store[data[roomName].labs.product[1]]) {
                                            if (creep.transfer(conainterTarget, data[roomName].labs.product[1]) == ERR_NOT_IN_RANGE) {
                                                creep.moveTo(conainterTarget, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } })
                                            }
                                        }
                                    }
                                }
                            } else {
                                let towers = creep.pos.findClosestByPath(FIND_STRUCTURES, { filter: (s) => { return (s.structureType == STRUCTURE_TOWER && s.store.getFreeCapacity(RESOURCE_ENERGY) > 0) } });
                                let terminal = creep.pos.findClosestByPath(FIND_STRUCTURES, { filter: (s) => { return (s.structureType == STRUCTURE_TERMINAL && s.store.getUsedCapacity(RESOURCE_ENERGY) < data[roomName].energyToTerminal) } })

                                if (towers) {
                                    if (creep.store[RESOURCE_ENERGY]) {
                                        if (creep.transfer(towers, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                            creep.moveTo(towers, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } })
                                        }
                                    } else {
                                        let conainterTarget = creep.pos.findClosestByPath(FIND_STRUCTURES, { filter: (s) => { return (s.structureType == STRUCTURE_STORAGE) } });
                                        if (conainterTarget) {
                                            if (creep.store[data[roomName].labs.reactant1[1]]) {
                                                if (creep.transfer(conainterTarget, data[roomName].labs.reactant1[1]) == ERR_NOT_IN_RANGE) {
                                                    creep.moveTo(conainterTarget, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } })
                                                }
                                            } else if (creep.store[data[roomName].labs.reactant2[1]]) {
                                                if (creep.transfer(conainterTarget, data[roomName].labs.reactant2[1]) == ERR_NOT_IN_RANGE) {
                                                    creep.moveTo(conainterTarget, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } })
                                                }
                                            } else if (creep.store[data[roomName].labs.product[1]]) {
                                                if (creep.transfer(conainterTarget, data[roomName].labs.product[1]) == ERR_NOT_IN_RANGE) {
                                                    creep.moveTo(conainterTarget, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } })
                                                }
                                            }
                                        }
                                    }
                                } else if (terminal) {
                                    if (creep.transfer(terminal, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                        creep.moveTo(terminal, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } })
                                    }
                                } else if (labs) {
                                    for (i in labs) {
                                        if (labs[i]) {
                                            if (labs[i].store) {
                                                if (labs[i].store[RESOURCE_ENERGY] < 1500) {
                                                    if (creep.transfer(labs[i], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                                        creep.moveTo(labs[i], { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } })
                                                    }
                                                }
                                            }
                                        }
                                    }
                                } else {
                                    let conainterTarget = creep.pos.findClosestByPath(FIND_STRUCTURES, { filter: (s) => { return (s.structureType == STRUCTURE_STORAGE) } });
                                    if (conainterTarget) {
                                        if (creep.transfer(conainterTarget, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                            creep.moveTo(conainterTarget, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } })
                                        }
                                    }
                                }
                            }
                        } else if ((isStoringMineral(creep) || creep.store[data[roomName].terminalWithdraw]) && !data[roomName].labs.isReacting) {
                            let stored_resources = _.filter(Object.keys(creep.store), resource => creep.store[resource] > 0)
                            let conainterTarget = creep.pos.findClosestByPath(FIND_STRUCTURES,
                                {
                                    filter: (s) => {
                                        return (s.structureType == STRUCTURE_STORAGE)
                                    }
                                });
                            if (conainterTarget) {
                                if (creep.transfer(conainterTarget, stored_resources[0]) == ERR_NOT_IN_RANGE) {
                                    creep.moveTo(conainterTarget, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } })
                                }
                            }
                        } else {
                            let towers = creep.pos.findClosestByPath(FIND_STRUCTURES, { filter: (s) => { return s.structureType == STRUCTURE_TOWER && s.store.getFreeCapacity(RESOURCE_ENERGY) > 0 } });
                            if (towers) {
                                if (creep.store[RESOURCE_ENERGY]) {
                                    if (creep.transfer(towers, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                        creep.moveTo(towers, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } })
                                    }
                                } else {
                                    let conainterTarget = creep.pos.findClosestByPath(FIND_STRUCTURES, { filter: (s) => { return (s.structureType == STRUCTURE_STORAGE) } });
                                    if (conainterTarget) {
                                        if (creep.store[data[roomName].labs.reactant1[1]]) {
                                            if (creep.transfer(conainterTarget, data[roomName].labs.reactant1[1]) == ERR_NOT_IN_RANGE) {
                                                creep.moveTo(conainterTarget, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } })
                                            }
                                        } else if (creep.store[data[roomName].labs.reactant2[1]]) {
                                            if (creep.transfer(conainterTarget, data[roomName].labs.reactant2[1]) == ERR_NOT_IN_RANGE) {
                                                creep.moveTo(conainterTarget, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } })
                                            }
                                        } else if (creep.store[data[roomName].labs.product[1]]) {
                                            if (creep.transfer(conainterTarget, data[roomName].labs.product[1]) == ERR_NOT_IN_RANGE) {
                                                creep.moveTo(conainterTarget, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } })
                                            }
                                        }
                                    }
                                }
                            } else if (terminal) {
                                if (terminal.store[RESOURCE_ENERGY] < data[roomName].energyToTerminal) {
                                    if (creep.transfer(terminal, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                        creep.moveTo(terminal, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } })
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
        } else if (creepname.includes('claimer') && (Game.creeps[creepname].room == "[room " + roomName + "]" || (() => { for (flag in data[roomName].remoteMining) { if (Game.creeps[creepname].room.name == data[roomName].remoteMining[flag]) { return true } } })())) {
            creep = Game.creeps[creepname]
            if (creep) {
                if (Game.flags.claim) {
                    if (Game.flags.claim.name in data[roomName].remoteMining) {
                        if (Game.flags.claim.room) {
                            if (Game.flags.claim.room.name == creep.room.name) {
                                if (creep.claimController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                                    creep.travelTo(creep.room.controller, { visualizePathStyle: { stroke: '#aa00ff', opacity: 0.9 } });
                                }
                            } else {
                                creep.travelTo(Game.flags.claim, { visualizePathStyle: { stroke: '#ff00ae', opacity: 0.9 } })
                            }
                        } else {
                            creep.travelTo(Game.flags.claim, { visualizePathStyle: { stroke: '#ff00ae', opacity: 0.9 } })
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
                    if ((Game.flags[flag].secondaryColor == COLOR_GREEN || Game.flags[flag].secondaryColor == COLOR_PURPLE) && !Game.flags[flag].memory.creepBuilder && Game.flags[flag].name in data[roomName].remoteMining) {
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
                                    let spawn = Game.spawns['Spawn3']
                                    let closestDamagedStructure = creep.pos.findClosestByPath(FIND_STRUCTURES, { filter: (s) => { return (s.hits < s.hitsMax && s.structureType != STRUCTURE_WALL && s.structureType != STRUCTURE_RAMPART) } })
                                    if (target) {
                                        if (creep.build(target) == ERR_NOT_IN_RANGE) {
                                            creep.travelTo(target, { maxRooms: 1, visualizePathStyle: { stroke: '#0055ff', opacity: 0.9 } });
                                        }
                                    } else if (closestDamagedStructure) {
                                        if (creep.repair(closestDamagedStructure) == ERR_NOT_IN_RANGE) {
                                            creep.travelTo(closestDamagedStructure, { maxRooms: 1, visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } })
                                        }
                                    } else if (spawn) {
                                        if (creep.transfer(spawn, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                            creep.travelTo(spawn, { maxRooms: 1, visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } })
                                        }
                                    }
                                } else if (creep.memory.harvesting) {
                                    let target = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
                                    if (target) {
                                        if (creep.harvest(target) == ERR_NOT_IN_RANGE) {
                                            creep.travelTo(target, { maxRooms: 1, visualizePathStyle: { stroke: '#aa00ff', opacity: 0.9 } });
                                        }
                                    }
                                }
                            } else {
                                creep.travelTo(flag, { visualizePathStyle: { stroke: '#ff00ae', opacity: 0.9 } })
                            }
                        } else {
                            creep.travelTo(flag, { visualizePathStyle: { stroke: '#ff00ae', opacity: 0.9 } })
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
                    let target = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
                    let exTarget = creep.pos.findClosestByPath(FIND_STRUCTURES, { filter: (s) => (s.structureType == STRUCTURE_EXTENSION && s.store.getFreeCapacity(RESOURCE_ENERGY)) })
                    if (spawn.store.getFreeCapacity(RESOURCE_ENERGY) > 0) {
                        if (creep.transfer(spawn, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(spawn, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } })
                        }
                    } else if (exTarget) {
                        if (creep.transfer(exTarget, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(exTarget, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } })
                        }
                    } else if (target) {
                        if (creep.build(target) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(target, { maxRooms: 1, visualizePathStyle: { stroke: '#0055ff', opacity: 0.9 } });
                        }
                    } else if (creep.room.controller) {
                        if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(creep.room.controller, { visualizePathStyle: { stroke: '#0055ff', opacity: 0.9 } });
                        }
                    }
                } else if (creep.memory.harvesting) {
                    const target = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
                    let conainterTarget = creep.pos.findClosestByPath(FIND_STRUCTURES, { filter: (s) => (s.structureType == STRUCTURE_CONTAINER && s.store[RESOURCE_ENERGY] > 50) })
                    if (conainterTarget) {
                        if (creep.withdraw(conainterTarget, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(conainterTarget, { visualizePathStyle: { stroke: '#ff1100', opacity: 0.9 } })
                        }
                    }
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
                    if (Game.flags[flag].secondaryColor == COLOR_GREEN && !Game.flags[flag].memory.creep && Game.flags[flag].name in data[roomName].remoteMining) {
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
                    if (Game.flags[flag].secondaryColor == COLOR_GREEN && (!Game.flags[flag].memory.creepHauler || (!Game.flags[flag].memory.creepHauler2 && !isLevel5)) && Game.flags[flag].name in data[roomName].remoteMining) {
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
                    if (Game.flags[flag].secondaryColor == COLOR_GREEN && !Game.flags[flag].memory.creepProspector && Game.flags[flag].name in data[roomName].remoteMining) {
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

    let targetStorage = creep.pos.findClosestByPath(FIND_STRUCTURES, {
        filter: (s) => (s.structureType == STRUCTURE_STORAGE)
    })
    if (targetStorage) {
        if ((carriersCount == 0 || !targetStorage.store[RESOURCE_ENERGY]) && Game.rooms[roomName].energyAvailable < Game.rooms[roomName].energyCapacityAvailable) {
            data[roomName].population.worker = 6
            roomName
        }
    } else {
        if (carriersCount == 0 && Game.rooms[roomName].energyAvailable < Game.rooms[roomName].energyCapacityAvailable && Game.rooms[roomName].controller.level > 2) {
            console.log(roomName)
            data[roomName].population.worker = 6
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
    } else if (mineralFarmerCount < data[roomName].population.mineralFarmer) {
        spawn.spawnCreep(data[roomName].mineralFarmer, 'mineral-farmer' + id)
    } else if (upgradersCount < data[roomName].population.upgrader) {
        spawn.spawnCreep(data[roomName].upgrader, 'upgrader' + id)
    } else if (claimerCount < data[roomName].population.claimer) {
        spawn.spawnCreep(data[roomName].claimer, 'claimer' + id)
    } else if (remoteBuilderCount < data[roomName].population.remoteBuilder) {
        spawn.spawnCreep(data[roomName].remoteBuilder, 'remote-b' + id)
    } else if (reserverCount < data[roomName].population.reserver) {
        spawn.spawnCreep(data[roomName].reserver, 'reserver' + id)
    } else if (haulerCount < data[roomName].population.hauler) {
        spawn.spawnCreep(data[roomName].hauler, 'remote-h' + id)
    } else if (prospectorCount < data[roomName].population.prospector) {
        spawn.spawnCreep(data[roomName].prospector, 'remote-m' + id)
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
    if (mineralFarmerCount < data[roomName].population.mineralFarmer) {
        list.push("Mineral Farmer")
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
    //cpu bucket
    new RoomVisual(roomName).poly([[16, 0], [22, 0], [22, 0.7], [16, 0.7], [16, 0]], { stroke: "green" })
    new RoomVisual(roomName).rect(16, 0, 6 * (Game.cpu.bucket / 10000), 0.7, { fill: "green" })
    new RoomVisual(roomName).text("CPU Bucket: " + Game.cpu.bucket, 16.1, 0.54, { font: 0.5, align: 'left', color: "white" })
    //room energy
    new RoomVisual(roomName).poly([[22.5, 0], [28.5, 0], [28.5, 0.7], [22.5, 0.7], [22.5, 0]], { stroke: "#FFFF00" })
    new RoomVisual(roomName).rect(22.5, 0, 6 * (Game.rooms[roomName].energyAvailable / Game.rooms[roomName].energyCapacityAvailable), 0.7, { fill: "#FFFF00" })
    new RoomVisual(roomName).text("Spawn Energy: " + Game.rooms[roomName].energyAvailable + "/" + Game.rooms[roomName].energyCapacityAvailable, 22.6, 0.54, { font: 0.5, align: 'left', color: "white" })
    //level
    new RoomVisual(roomName).poly([[29, 0], [49, 0], [49, 0.7], [29, 0.7], [29, 0]], { stroke: "#ADD8E6" })
    new RoomVisual(roomName).rect(29, 0, 20 * (Game.rooms[roomName].controller.progress / Game.rooms[roomName].controller.progressTotal), 0.7, { fill: "#ADD8E6" })
    new RoomVisual(roomName).text("Controller Level: " + nFormatter(Game.rooms[roomName].controller.progress, 1) + "/" + nFormatter(Game.rooms[roomName].controller.progressTotal, 1), 29.1, 0.54, { font: 0.5, align: 'left', color: "white" })
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
                if (wall.hits <= 100) {
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
            Game.notify(`${Game.time}: User ${username} spotted in room ${myRoomName} | Replay: https://screeps.com/a/#!/history/${Game.shard.name}/${myRoomName}?t=${Game.time - 15}`);
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


module.exports.findBestOrder = function findBestOrder(resourceType, roomName, energyCost, buy) {
    if (!buy) {
        let orders = Game.market.getAllOrders({ type: ORDER_BUY, resourceType: resourceType });

        let ordersRanked = []

        for (order in orders) {
            let terminal = Game.rooms[roomName].find(FIND_STRUCTURES, { filter: (s) => { return (s.structureType == STRUCTURE_TERMINAL) } })
            //let terminalStore = terminal[0].store[resourceType]
            let terminalStore = 1100
            let amount = (orders[order].amount > terminalStore) ? terminalStore : orders[order].amount
            let netCreditProfit = (orders[order].price * amount) - (Game.market.calcTransactionCost(amount, roomName, orders[order].roomName) * energyCost)
            ordersRanked.push([netCreditProfit, orders[order].id, Game.market.calcTransactionCost(amount, roomName, orders[order].roomName)])
        }
        ordersRanked.sort(sortFunction);
        for (i in ordersRanked) {
            let order = Game.market.getOrderById(ordersRanked[i][1])
            console.log("Id:", order.id, "Price:", order.price, "Available:", order.amount, "Room:", order.roomName, "Net Credit Profit:", ordersRanked[i][0], "Transtaction Cost:", ordersRanked[i][2], "\n")
        }
    } else if (buy) {
        let orders = Game.market.getAllOrders({ type: ORDER_SELL, resourceType: resourceType });

        let ordersRanked = []

        for (order in orders) {
            let amount = 9473
            let netCreditCost = (orders[order].price * amount) + (Game.market.calcTransactionCost(amount, roomName, orders[order].roomName) * orders[order].price + 0.1)
            if (amount <= orders[order].amount) {
                ordersRanked.push([netCreditCost, orders[order].id, Game.market.calcTransactionCost(amount, roomName, orders[order].roomName)])
            }
        }
        ordersRanked.sort(sortFunction);
        ordersRanked = ordersRanked.reverse()
        for (i in ordersRanked) {
            let order = Game.market.getOrderById(ordersRanked[i][1])
            console.log("Id:", order.id, "Price:", order.price, "Available:", order.amount, "Room:", order.roomName, "Net Credit Cost:", ordersRanked[i][0], "Transtaction Cost:", ordersRanked[i][2], "\n")
        }
    }
}

function sortFunction(a, b) {
    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] > b[0]) ? -1 : 1;
    }
}

function isStoringMineral(that) {
    if (that.store[RESOURCE_HYDROGEN] || that.store[RESOURCE_OXYGEN] || that.store[RESOURCE_UTRIUM] || that.store[RESOURCE_LEMERGIUM] || that.store[RESOURCE_KEANIUM] || that.store[RESOURCE_ZYNTHIUM] || that.store[RESOURCE_CATALYST] || that.store[RESOURCE_GHODIUM]) {
        return true
    }
}

// Call this function at the end of your main loop

function exportStats() {
    // Reset stats object
    Memory.stats = {
        gcl: {},
        rooms: {},
        cpu: {},
        credits: {},
        market: {},
    };

    if (!Memory.stats.date) {
        Memory.stats.date = Date.now()
    }

    Memory.stats.time = Game.time;

    // Collect room stats
    for (let roomName in Game.rooms) {
        let room = Game.rooms[roomName];
        let isMyRoom = (room.controller ? room.controller.my : false);
        if (isMyRoom) {
            let roomStats = Memory.stats.rooms[roomName] = {};
            roomStats.storageEnergy = (room.storage ? room.storage.store.energy : 0);
            roomStats.terminalEnergy = (room.terminal ? room.terminal.store.energy : 0);
            roomStats.energyAvailable = room.energyAvailable;
            roomStats.energyCapacityAvailable = room.energyCapacityAvailable;
            roomStats.controllerProgress = room.controller.progress;
            roomStats.controllerProgressTotal = room.controller.progressTotal;
            roomStats.controllerLevel = room.controller.level;
        }
    }

    // Collect GCL stats
    Memory.stats.gcl.progress = Game.gcl.progress;
    Memory.stats.gcl.progressTotal = Game.gcl.progressTotal;
    Memory.stats.gcl.level = Game.gcl.level;

    // Collect CPU stats
    Memory.stats.cpu.bucket = Game.cpu.bucket;
    Memory.stats.cpu.limit = Game.cpu.limit;
    Memory.stats.cpu.used = Game.cpu.getUsed();

    //Credits
    Memory.stats.credits = Game.market.credits

    //Market
    const d1 = new Date().getDate();
    const d2 = new Date(Memory.stats.date).getDate();
    if (d2 !== d1) {
        let h = Game.market.getHistory(RESOURCE_HYDROGEN)
        Memory.stats.market.h = h[h.length - 1].avgPrice

        let l = Game.market.getHistory(RESOURCE_LEMERGIUM)
        Memory.stats.market.l = l[l.length - 1].avgPrice

        let lh = Game.market.getHistory(RESOURCE_LEMERGIUM_HYDRIDE)
        Memory.stats.market.lh = lh[lh.length - 1].avgPrice
        Memory.stats.market.lhUser = Memory.stats.market.h + Memory.stats.market.l

        let o = Game.market.getHistory(RESOURCE_OXYGEN)
        Memory.stats.market.o = o[o.length - 1].avgPrice

        let oh = Game.market.getHistory(RESOURCE_HYDROXIDE)
        Memory.stats.market.oh = oh[oh.length - 1].avgPrice
        Memory.stats.market.ohUser = Memory.stats.market.h + Memory.stats.market.o

        let lh2o = Game.market.getHistory(RESOURCE_LEMERGIUM_ACID)
        Memory.stats.market.lh2o = lh2o[lh2o.length - 1].avgPrice
        Memory.stats.market.lh2oUser = Memory.stats.market.l + Memory.stats.market.h * 2 + Memory.stats.market.o

        Memory.stats.date = Date.now()
    }
}