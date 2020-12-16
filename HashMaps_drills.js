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

//2. WhatDoesThisDo:
//I think it will log 10 and then 20
//After running th code, I saw that it's 20 and then 10
//I think this is because the key corresponds to the latest value it was set to.

/* const WhatDoesThisDo = function(){
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new HashMap();
    map1.set(str1,10);
    map1.set(str2,20);
    let map2 = new HashMap();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3,20);
    map2.set(str4,10);

    console.log(map1.get(str2));
    console.log(map2.get(str3));
} */
//WhatDoesThisDo()
//main()

const removeDuplicates = (string) =>{
    let  nonDuplicateString = ''
    for(let char of string){
        if (!nonDuplicateString.includes(char)){
            nonDuplicateString += char
        }
    }
    return nonDuplicateString;
}
console.log(removeDuplicates('google'))

const groupAnagrams = (arr) =>{

    let result = {};
    for(let word of arr){
        let cleansed = word.split('').sort().join('');
        if(result[cleansed]){
            result[cleansed].push(word);
        }
        else{
            result[cleansed] = [word];
        }
    }
    return Object.values(result);

}

console.log(groupAnagrams(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']))