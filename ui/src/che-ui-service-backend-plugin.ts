/**
 * Generated using theia-plugin-generator
 */

import * as theia from '@theia/plugin';
import * as request from 'request-promise-native';

export function start() {

    const URL_SERVER = 'http://hello-ls:8080/users';

    const listUsersCommand = {
        id: 'che-ui-service-list-users',
        label: "Che UI Service:List users"
    };
    theia.commands.registerCommand(listUsersCommand, async (...args: any[]) => {
        const options = {
            method: 'GET',
            uri: URL_SERVER
        }
        try {
            const data = JSON.parse(await request(options));
            const users: any[] = data.map((item: any) => { return item.first_name + ' ' + item.last_name });
            theia.window.showInformationMessage(`There are ${users.length} users and the names are ${users}`);
        } catch (error) {
            theia.window.showErrorMessage(`Unable to get list of users: ${error}`);
            console.error(error);
        }
    });

    const createUserCommand = {
        id: 'che-ui-service-create-user',
        label: "Che UI Service:Create user"
    };
    theia.commands.registerCommand(createUserCommand, async (...args: any[]) => {

        // ask user first name
        let inputBoxOptions: theia.InputBoxOptions = {
            prompt: "First Name of the user to create: ",
            placeHolder: "John"
        }
        const firstName = await theia.window.showInputBox(inputBoxOptions);
        if (!firstName) {
            theia.window.showErrorMessage(`Invalid name ${firstName}`);
            return;
        }

        // ask user last name
        inputBoxOptions.prompt = 'Last Name of the user to create ?';
        inputBoxOptions.placeHolder = 'Doe';
        const lastName = await theia.window.showInputBox(inputBoxOptions);
        if (!lastName) {
            theia.window.showErrorMessage(`Invalid name ${lastName}`)
            return;
        }

        // call remote server
        const json = { 'first_name': firstName, 'last_name': lastName };
        const options = {
            method: 'POST',
            uri: URL_SERVER,
            body: json,
            json: true
        }
        try {
            const data: any = await request(options);
            theia.window.showInformationMessage(`Created user with First Name '${data.first_name}' and Last Name '${data.last_name}'`);
        } catch (error) {
            theia.window.showErrorMessage(`Unable to create a user: ${error}`);
            console.error(error);
        }

    });



}
