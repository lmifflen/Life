const   textElement = document.getElementById('text');
const   optionButtonsElement = document.getElementById('option-buttons');

let state = {}


function startGame() {
    state = {}
    showTextNode(1)
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }
      
    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)

        }
    })

}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}

const textNodes = [
    {
        id: 1,
        text: 'Welcome to the game of life, what is your childhood hobby?',
        options: [
            {
                text: 'Bike',
                setState: { Bike: true },
                nextText: 1.1
            },
            {
                text:  'Swim',
                setState: { Swim: true },
                nextText: 2.2
            },
            {
                text: 'Crafts',
                setState: { Crafts: true },
                nextText: 2.3
            }
        ]
    },
    {
        id: 1.1,
        text: 'Player loves to bike! Do you wear pads while biking?',
        options:  [
            {
                text: 'Wear pads',
                requiredState: (currentState) => currentState.Bike,
                setState: { Pads: true },
                nextText: 2.1
            },
            {
                text: 'I dont wear pads',
                requiredState: (currentState) => currentState.Bike,
                setState: { Pads: false },
                nextText: 2.11
            }
        ]
    },
    {
        id: 2.1,
        text: 'Player loves sports and safety! What is your favourite subject in school?',
        options:  [
            {
                text: 'Physics',
                requiredState: (currentState) => currentState.Bike,
                setState: { School: true },
                nextText: 3.1
            },
            {
                text: 'Gym',
                requiredState: (currentState) => currentState.Bike,
                setState: { School: true },
                nextText: 3.1
            },
            {   text: 'Schools for fools',
                requiredState: (currentState) => currentState.Bike,
                setState: { dropOut: true },
                nextText: 3.2
        }
        ]
    },
    {
        id: 2.11,
        text: "Player is a bad ass and doesn't wear protective equipment! What is your favourite subject in school?",
        options:  [
            {
                text: 'Physics',
                requiredState: (currentState) => currentState.Bike,
                setState: { School: true },
                nextText: 3.1
            },
            {
                text: 'Gym',
                requiredState: (currentState) => currentState.Bike,
                setState: { School: true },
                nextText: 3.1
            },
            {   text: 'Schools for fools',
                requiredState: (currentState) => currentState.Bike,
                setState: { dropOut: true },
                nextText: 3.2
        }
        ]
    },
    {
        id: 2.2,
        text: 'Player is captain of the swim team! What is your favourite subject in school?',
        options:  [
            {
                text: 'Math',
                requiredState: (currentState) => currentState.Swim,
                setState: { School: true },
                nextText: 3.1
            },
            {
                text: 'Gym',
                requiredState: (currentState) => currentState.Swim,
                setState: { School: true },
                nextText: 3.1
            },
            {   text: 'Law',
                requiredState: (currentState) => currentState.Swim,
                setState: { School: true },
                nextText: 3.1
        }
        ]
    },
    {
        id: 2.3,
        text: 'Player is a lameo and prefers crafts over sports! What is your favourite subject in school?',
        options:  [
            {
                text: 'English',
                requiredState: (currentState) => currentState.Crafts,
                setState: { School: true },
                nextText: 3.1
            },
            {
                text: 'Biology',
                requiredState: (currentState) => currentState.Crafts,
                setState: { School: true },
                nextText: 3.1
            },
            {   text: "I'm going to drop out and become a rockstar",
                requiredState: (currentState) => currentState.Crafts,
                setState: { dropOut: true },
                nextText: 3.2
        }
        ]
    },
    {
        id: 3.1,
        text: 'Congratulations! You have finished high school! What will you do now??',
        options:  [
            {
                text: 'Get at job',
                requiredState: (currentState) => currentState.School,
                setState: { Job: true },
                nextText: 4.2
            },
            {
                text: 'Go to college',
                requiredState: (currentState) => currentState.School,
                setState: { College: true },
                nextText: 4.1
            
            
        }
        ]
    },
    {
    id: 3.2,
        text: 'High school sucked. You dropped out. What are you going to do now?',
        options:  [
            {
                text: 'Get a job',
                requiredState: (currentState) => currentState.dropOut,
                setState: { Job: true },
                nextText: 4.2
            },
            {
                text: 'Have kids',
                requiredState: (currentState) => currentState.dropOut,
                setState: { Kids: true },
                nextText: 4.3
            },
            {
                text: 'Become a rockstar',
                requiredState: (currentState) => currentState.dropOut,
                setState: { Job: true, Rockstar: true },
                nextText: 4.2
            
            
        }
        ]
    },
    {
        id: 4.1,
            text: "You've finished college. Time to grow up.",
            options:  [
                {
                    text: 'Time to have kids',
                    requiredState: (currentState) => currentState.Job,
                    setState: { Kids: true },
                    nextText: 4.3
                },
                {
                    text: 'Get a job',
                    requiredState: (currentState) => currentState.Job,
                    setState: { Dink: true },
                    nextText: 4.2               
                
                
        }
        ]
    },
    {
        id: 4.2,
            text: "You've been making it rain at your job. Life's good. What now?",
            options:  [
                {
                    text: 'Time to have kids',
                    requiredState: (currentState) => currentState.Job,
                    setState: { Kids: true },
                    nextText: 4.3
                },
                {
                    text: 'Imma do me',
                    requiredState: (currentState) => currentState.Job,
                    setState: { Dink: true },
                    nextText: 5.1                   
                
        }
        ]
    },
    {
        id: 4.3,
            text: 'Congratulations! You have wonderful kiddos. They sure take up a lot of time though. You still keeping up with your childhood hobbies?',
            options:  [
                {
                    text: 'Yes',
                    requiredState: (currentState) => currentState.Kids,
                    setState: { Hobby: true },
                    nextText: 4.2
                },
                {
                    text: 'No',
                    requiredState: (currentState) => currentState.Kids,
                    setState: { Hobby: false },
                    nextText: 4.3
                },
                {
                    text: "Wine o'clock is my hobby",
                    requiredState: (currentState) => currentState.Kids,
                    setState: { Wine: true },
                    nextText: 4.2
                
                
            }
            ]
        }
]

startGame()