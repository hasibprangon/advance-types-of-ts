{
    // 
    type a1 = number;
    type b1 = string;

    type x = a1 extends null ? true : false
    
    type y = a1 extends null ? true : b1 extends undefined ? undefined : any ;

    interface Sheikh {
        bike: string;
        car: string;
        ship: string;
        plane: string
    } ;

    type checkVehicle<T> = T extends keyof Sheikh ? true : false;
    type HasPlane = checkVehicle<"plane">

    // 
}