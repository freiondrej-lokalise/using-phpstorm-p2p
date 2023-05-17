class ContextActions {
    constructor() {
        console.log('It seems that testMethod() could benefit from some early return. Navigate to the if and invoke `Show context actions`. Select "Flip if-else" and hit Enter.');
        console.log('Now navigate to the else, invoke `Show context actions`, select "Unwrap else" and hit Enter.');

        console.log('If you are not sure whether there will be any context actions available, see if a lightbulb symbol appears at the beginning of the currently focused line. Click right here, invoke `Show context actions` and select "Replace single-quoted string with double-quoted string".');
    }

    testMethod(param) {
        if (param) {
            // some comment
            const x = 15;
        } else {
            throw new Error('Invalid param!');
        }
    }
}
