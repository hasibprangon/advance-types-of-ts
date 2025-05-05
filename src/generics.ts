{
    // generic type

    type GenericsArray<T> = Array<T>

    // const rollNumber: number[] = [1, 2, 3, 4];
    const rollNumber: GenericsArray<number> = [1, 2, 3, 4];

    // const name: string[] = ['Hasibul', 'Hossain'];
    const name: GenericsArray<string> = ['Hasibul', 'Hossain'];

    // const boolArray: boolean[] = [true, false, true]
    // const boolArray: Array<boolean> = [true, false, true]
    const boolArray: GenericsArray<boolean> = [true, false, true]

    // array of obj using generics

    interface User {
        name: string;
        age:number
    }

    const user: GenericsArray<User> = [
        {
            name: 'Hasib',
            age: 25
        },
        {
            name:'Prangon',
            age: 26,
        }
    ]

    // generics tuple

    type GenericsTuple<x, y> = [x, y]

    const person: GenericsTuple<string, string> = ['Mr.x', 'Mrs. X'];

    const UserWithID: 
    GenericsTuple<number, {name:string, email: string}> 
    = 
    [1234, {name:'Prangon', email:'a@b.com'}]
}