console.clear();

const a: number = 5;
const b: string = 'abc';
const c: boolean= true;

/**
 * Dviejų skaičių skaičiavimas
 * 
 * @param a First number 
 * @param b Second number 
 * @returns Numbers a & b sum
 */
function sum(a: number, b:number) {
    return a + b;
    
}

const marks = [10, 2, 4, 8, 6];
marks.push(5);
console.log(marks);

//marks.push('asd');   // net jeigu ir meta klaida vis tiek leis hardkodint klaida i faila
//console.log(marks);

const words: string[] =[];// du vienodi variantai
//const words =[] as string[];
//words.push(2);
words.push('2');
//words.push(true);
//words.push ([]);

console.log(words);

const jonas = {
    name: "Jonas",
    age : 99,
    isMarried: false,
    favoriteColor: '',
}

console.log (jonas)

jonas.favoriteColor = 'Red';
console.log(jonas);

type User ={
    name: string;
     age: number;
     isMarried: boolean;
    houseInfo:{
        city: string;
        street: string;
        footage?:number;
        floors?:number;
        rooms?:number
    };
    favoriteFood:{
        name: string, 
        size: string
    }[];
}

const users: User[] =  [
    {name: "Jonas",
     age: 99,
      isMarried: true,
       houseInfo:{
        footage: 500,
        floors: 3,
        rooms: 7,
        city: "Baisiogala",
        street: "Gedimino str."
    },
    favoriteFood:[
        {name: 'Food-1', size:'Small'},
        {name: 'Food-2', size:'Medium'},
        {name: 'Food-3', size:'Large'}],
},
{   
    name: "Tomas",
    age: 88,
    isMarried: true, 
    houseInfo:{
    footage: 500,
    floors: 3,
    rooms: 7,
    city: "Baisiogala",
    street: "Gedimino str."
},
favoriteFood:[
    {name: 'Food-1', size:'Small'},
    {name: 'Food-2', size:'Medium'},
{name: 'Food-3', size:'Large'}],
},
{
    name: "Mantas",
     age: 77,
     isMarried: true,
     houseInfo:{
        footage: 500,
        floors: 3,
        rooms: 7,
        city: "Baisiogala",
        street: "Gedimino str."
    },
    favoriteFood:[
        {name: 'Food-1', size:'Small'},
        {name: 'Food-2', size:'Medium'},
        {name: 'Food-3', size:'Large'}]
}  
]
console.log(users);

