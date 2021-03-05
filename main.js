const msgData1 = ['Hi!', 'Hello!', 'Good day to You!', 'Welcome!', 'Hey!'];
const msgData2 = ['Did you know?', 'Have you heard?', 'You won\'t believe this!', 'Picture this!'];
const msgData3 = ['The loudest animal in the world is a mere 2cm long prawn.',
    'Otters “hold hands” while sleeping, so they don’t float away from each other.',
    'Dolphins use toxic pufferfish to "get high".',
    'The worlds deadliest animal isn’t a shark, bear or tiger, but something far smaller – the mosquito.',
    'The horned lizard is able to shoot blood from it’s own eyes, up to a distance of 3 feet away.'];

const getRandomItem = (arr) => {
    const index = Math.floor(Math.random() * arr.length);

    return arr[index];
};

const getRandomMessage = () => {
    return getRandomItem(msgData1) + ' ' + getRandomItem(msgData2) + ' ' + getRandomItem(msgData3);
};

console.log(getRandomMessage());
