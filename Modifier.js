function arrayModifier(input) {
let arrayOfnumbers=input.shift().split(` `).map(Number)
for(let index = 0; index<input.length; index++){
    let [command, indexOne, indexTwo]=input[index].split(` `)
    switch (command){
        case `swap`:
            let temp = arrayOfnumbers[indexOne];
            arrayOfnumbers[indexOne]=arrayOfnumbers[indexTwo]
            arrayOfnumbers[indexTwo]=temp;
            break;
        case `multiply`:
            let result = arrayOfnumbers[indexOne]*arrayOfnumbers[indexTwo]
            arrayOfnumbers[indexOne]=result;
            break;
        case `decrease`:
            arrayOfnumbers = arrayOfnumbers.map(n=> n - 1);
            break;
            }

}
    console.log(arrayOfnumbers.join(`, `))

}
arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]);
// arrayModifier([
//     '1 2 3 4',
//     'swap 0 1',
//     'swap 1 2',
//     'swap 2 3',
//     'multiply 1 2',
//     'decrease',
//     'end'
// ]);
