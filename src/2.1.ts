{
   
    // type assertion
    let anything : any;
    anything = 'Md Hasibul Hossain';
    anything = 333;
    (anything as number)

    const kgTOGm = (value : string | number) : string | number | undefined => {
        if(typeof value === 'string') {
            const convertedValue = parseFloat(value) * 1000;
            return `The converted Value is ${convertedValue}`;
        }
        if(typeof value === 'number') {
            return value * 1000;
        }
    }

    const result1 = kgTOGm(1000) as number;
    const result2 = kgTOGm('1000') as string;

    type CustomError = {
        message: string;
    }

    try{

    }catch(error){
        console.log((error as CustomError)?.message);
    }

}