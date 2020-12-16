const HashMap = require('./practice')


function main(){

    const lotr = new HashMap();
    lotr.MAX_LOAD_RATIO = .5;
    lotr.SIZE_RATIO = 3;

    lotr.set("Hobbit", "Bilbo");
    lotr.set("Hobbit", "Frodo");
    lotr.set("Wizard", "Gandalf");
    lotr.set("Human", "Aragorn");
    lotr.set("Elf", "Legolas");
    lotr.set("Maiar", "The Hobbit");
    lotr.set("Maiar", "Sauron");
    lotr.set("RingBearer", "Gollum");
    lotr.set("LadyOfLight", "Galadriel");
    lotr.set("HalfElven", "Arwen");
    lotr.set("Ent", "Treebeard");


    console.log(lotr)

}

//Length: 9 
//Total items: 8
//All items were not hashed. I think it is becuase the capacity 
//is set at 8 and there are repeated keys

//console.log(lotr.get('Maiar')) Output = 'Sauron'
//console.log(lotr.get('Hobbit')) Output = 'Frodo'
//There is a discrepancy for both of these. Only the second value that was
//stored for each key is matched for each key.

//The capacity of the hash table after hashing each item is 8
//It must be because the initial capacity is set to 8



main()