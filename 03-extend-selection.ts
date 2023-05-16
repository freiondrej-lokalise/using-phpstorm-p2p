class ExtendSelection {
    someMethod() {
        return () => {
            fetch('')
                .then(() => alert('now'))
                .then(() => {
                    console.log('Click here and invoke `Extend selection` repeatedly to see how it works. Continue until the whole callback function is selected.');
                    console.log('You can then for example cut the selection, delete the callback function in the first then() and paste this one instead (you can practice `Paste from history`).');
                });
        };
    }
}
