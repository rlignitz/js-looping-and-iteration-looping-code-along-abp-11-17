function printBadges(names) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Welcome ${names[i]}! You are employee #${i+1}.`);
  }
  return names;
}

function isItTails() {
  return Math.random() >= 0.5;
}

function tailsNeverFails() {
  let tailsCount = 0;
  while(isItTails()) {
    tailsCount++;
  }
  return `You got ${tailsCount} tails in a row!`;
}
