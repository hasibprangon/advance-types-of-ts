{
    // Constraints 

    const addCourseToStudent = <T extends {
        id: number;
        name: string;
        email: string
    }>(students: T) => {
        const course = 'Next Level Development'

        return {
            ...students,
            course
        }
    }

    const result1 = addCourseToStudent({ name: 'Hasib', id: 1234, email: 'prangon@gmail.com ' });
    const result2 = addCourseToStudent({ name: 'Prangon', id: 1235, email: 'hasib@gmail.com' });



    // 
}