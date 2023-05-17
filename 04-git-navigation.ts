class GitNavigation {
    constructor() {
        console.log('For this exercise, I will need your help.');
        console.log('First, we need to set up some shortcuts, because these actions cannot be used with double Shift.');
        console.log('Go to Settings > Keymap and assign a shortcut to `Next change`, `Previous change` and `Rollback`');

        console.log('Then please change method() to return 16, anotherMethod() to return \'no\' and in thirdMethod() correct the typo in the error message');
        console.log('Once that\'s done, click here and then invoke `Next change` and `Previous change` to navigate between them');
        console.log('Once you get to anotherMethod(), invoke `Rollback` - it will rollback the focused line only');
        console.log('Then, invoke `Rollback` again - since there is no change on your line anymore, the Rollback dialog will pop up. Confirm the rollback, now the whole file will be rolled back to the version saved in Git.');

        // Fun fact - I have the shortcuts to be "Cmd+Shift+H", "Cmd+Shift+J" and "Cmd+Shift+K". This is similar to what film editors use for "Rev", "Cut", "Fwd".
    }

    method() {
        return 15;
    }

    anotherMethod() {
        return 'yes';
    }

    thirdMethod() {
        throw new Error('error messgae');
    }
}
