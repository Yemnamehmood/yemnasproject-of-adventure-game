#!/usr/bin/env node 
import inquirer from "inquirer";


async function adventureGame() {
    console.log("Welcome to the Adventure Game!");

    let { playerName } = await inquirer.prompt({
        type: 'input',
        name: 'playerName',
        message: 'Enter your name:',
    });

    console.log(`Welcome, ${playerName}! Let's begin.`);

    let playerChoice = '';

    while (playerChoice !== 'exit') {
        let { action } = await inquirer.prompt({
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: ['Explore', 'Rest', 'Exit'],
        });

        switch (action) {
            case 'Explore':
                console.log('You embark on an adventure..');
                // Add more game logic for exploration
                break;
            case 'Rest':
                console.log('You take a break and rest.');
                // Add more game logic for resting
                break;
            case 'Exit':
                console.log('Exiting the game. Goodbye!!');
                return;
        }
    }
}

adventureGame();
