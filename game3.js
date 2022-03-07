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
                requiredState: (currentState) => currentState.Pads,
                setState: { School: true },
                nextText: 3.1
            },
            {
                text: 'Gym',
                requiredState: (currentState) => currentState.Pads,
                setState: { School: true },
                nextText: 3.1
            },
            {   text: 'Schools for fools',
                requiredState: (currentState) => currentState.Pads,
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
                setState: { Physics: true },
                nextText: 3.1
            },
            {
                text: 'Biology',
                requiredState: (currentState) => currentState.Crafts,
                setState: { Gym: true },
                nextText: 3.1
            },
            {   text: "I'm going to drop out and become a rockstar",
                requiredState: (currentState) => currentState.Crafts,
                setState: { dropOut: true },
                nextText: 3.2
        }
        ]
    }
]

startGame()