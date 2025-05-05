{
    // interface

    type User1 = {
        name: string;
        age: number;
    };

    interface User2 {
        name: string;
        age: number
    }

    interface UserWithRole2 extends User1 {
        role: string
    }

    type UserWithRole1 = User1 & { role: string };

    const user1: UserWithRole2 = {  //type alias
        name: 'Prangon',
        age: 25,
        role: 'Student'
    }


    const user2: User2 = { //interface
        name: 'Hasib',
        age: 25
    }


    // interface in array

    type Roll1 = number[];

    const rollNumber1: Roll1 = [1, 2, 3, 4];

    interface Roll2 {
        [index: number]: number;
    }

    const rollNumber2: Roll2 = [1, 2, 3, 4]

    // interface in function 

    type Add1 = (num1: number, num2: number) => number;

    const add: Add1 = (num1, num2) => num1 + num2

    interface Add2 {
        (num1: number, num2: number) : number
    }

    const add2: Add2 = (num1, num2) => num1 + num2


}