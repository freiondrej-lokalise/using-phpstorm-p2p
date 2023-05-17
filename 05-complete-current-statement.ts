class CompleteCurrentStatement {
    constructor() {
        console.log('I really like this one, although sometimes it does not quite work correctly');

        console.log('This line does not end with a semicolon. Click on this line (position does not matter) and invoke `Complete current statement` - the semicolon will be added')
        console.log('Now invoke `Complete current statement` again - a newline will be added, because the statement is already complete. Now the IDE makes sure you\'re ready to add a next one.');

        console.log('Navigate outside the constructor and start typing a new method. Type some name, e.g. `testMethod` and parentheses `()`. Then invoke `Complete current statement` - the curly brackets will be added');
    }
}
