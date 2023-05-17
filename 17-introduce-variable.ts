class IntroduceVariable {
    constructor() {
        console.log('Often you encounter a possibility to extract a variable for something common in the codebase.');
        console.log('Navigate below to the invocation of this.getEmptyObject() and invoke `Introduce variable...`');
        console.log('Notice how Phpstorm inferred the variable name.');

        this.getEmptyObject();

        console.log('Now navigate to the string "something" below and invoke `Introduce variable...` again.');
        console.log('Notice how it asks you whether to replace just this occurrence, or all of them. Choose "all 2 occurrences". Choose the name of the variable and confirm with Enter.');

        const t = 'something';
        const u = 'something';

        console.log('Sometimes however, you notice that the same variable is used in unrelated contexts which might be undesired. In that case, navigate to the variable (in this example, it is variable "one"), invoke `Inline...` and confirm with Enter.');

        const one = 1;

        const numberOne = one;
        const isActive = one;
    }

    getEmptyObject() {
        return {};
    }
}
