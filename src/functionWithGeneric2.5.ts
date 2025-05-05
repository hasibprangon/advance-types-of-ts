{
    // function with generics

    const createArray = (param: string): string[] => {
        return [param]
    }
    const createArrayWithGeneric = <T>(param1: T): T[] => {
        return [param1]
    }

    const res1 = createArray('Bangladesh');
    const resWithGenerics = createArrayWithGeneric<number>(1)

    interface User {
        id: number;
        name: string
    }
    const resWithGenericsObj = createArrayWithGeneric<User>({ id: 1234, name: 'Hasib' })

    // generic tuple

    const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
        return [param1, param2]
    }

    const res1_1 = createArrayWithTuple<string, number>('Bangladesh', 1234);

    interface User {
        id: number;
        name: string
    }

    interface Bike {
        name: string,
        model: string,
        isValid: boolean
    }

    const resWithGenericsObjTuple = createArrayWithTuple<User, Bike>({ id: 1234, name: 'Hasib' }, {name:'Yamaha', model: 'R-15', isValid: false});

    const addCourseToStudent = <T>(students: T) => {
        const course = 'Next Level Development'

        return {
            ...students,
            course
        }
    }

    const result1 = addCourseToStudent({name: 'Hasib', id: 1234});


    // 
}