class Rename {
    constructor() {
        this.methodOne();

        console.log('Renaming something is very common. Navigate to the call to methodOne() and invoke `Rename...`');
        console.log('The method will be renamed. This works for methods, variables, classes... and it works across the whole project (tied with the `Find usages` feature).');
        console.log('It also prevents conflicts - try renaming the method to methodTwo() which already exists in this file.');
        console.log('Just be careful with this in legacy code - the IDE might not correctly identify all occurrences and thus not rename some of them.');
    }

    methodOne() {

    }

    methodTwo() {

    }
}
