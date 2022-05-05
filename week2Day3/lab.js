const counter = (function(){
    let  count = 0;
    function add(){
        count += 1;
        return count
    }

    function reset(){
        count = 0;
        return count
    }

    return {
        increment: function(){
            add();
        },
        reset: function(){
           reset();
        },
        value: function(){
            return count;
        }
    }

})();


console.log(counter.value)
 counter.increment()
counter.increment()
counter.increment()
console.log(counter.value)
counter.reset()
console.log(counter.value)




const counter2 = (function(){
    let  count = 0;
    function add(){
        count += 1;
        return count
    }

    function reset(){
        count = 0;
        return count
    }

    function make_adder(number){
        count += number;
        return count;
    }

    return {
        increment: function(){
            add();
        },
        reset: function(){
           reset();
        },
        value: function(){
            return count;
        }
    }

})();


//4;
// Create module which contains private data and fucntion add them public function as clouse 

const Employe = (function(){
let name;
let age;
let salary;
function setName(name){
   name = name;
}

function setAge(age){
    age = age;
}

function setSalary(salary){
    salary = salary;
}

function getName(){
    return name;
}

function getAge(){
    return age;
}


function getSalary(){
    return salary;
}

return {
    getName: function(){
        getName();
    },

    getAge: function(){
        getAge();
    },
    getSalary:function(){
        getSalary();
    }
}

})();


//6:

Employe.extension = function(){
    let address;
    function setAddress(address){
        address = address;
    }

    function getAddress(){
        return address;
    }

    return {
        setAddress: function(name){
            setAddress(name);
        },
        getAddress: function(){
            getAddress();
        }
    }
}