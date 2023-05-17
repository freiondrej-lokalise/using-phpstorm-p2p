class TabVsEnter {
    public static someValue = '2151';

    public static someOtherValue = '13192121';

    constructor() {
        const x = TabVsEnter.someValue;

        console.log('This tiny thing solves a very annoying problem. Go to the assignment of `x` above (line 7), place the caret right after `.some` and before `Value`. Then invoke `Code completion basic`, navigate to "Some other value" and hit Enter. Now we have "someOtherValueValue". Annoying, huh?');
        console.log('Now go to the assignment of `y` below (line 12), place the caret right after `.some` and before `Value`. Then invoke `Code completion basic`, navigate to "Some other value" and hit Tab. Better, eh? ;)');

        const y = TabVsEnter.someValue;
    }
}
