class Computer {
    constructor(ram, cpu, storage){
        this.ram = ram;
        this.cpu = cpu;
        this.storage = storage;
    }


    runProgramm(programm){
        console.log("running: " + programm)
    }
}

class Laptop extends Computer {
    constructor(ram, cpu, storage, battary){
        super(ram, cpu, storage)
        this.battary = battary;
    }

    carryArount(){
        console.log("carrying laptop: cpu" + this.cpu +" ram: " + this.ram + " storage: " + this.storage + " battery: " + this.battery);
    }
}


let laptop = new Laptop("16GB","M1", "512", "100wt")
laptop.carryArount()