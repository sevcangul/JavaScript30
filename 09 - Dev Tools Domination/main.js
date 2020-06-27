const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('hello');

// Interpolated
console.log('Hello I an a %s string', '💩')
const x = "sevcan";
console.log(`Hello I am ${x}`)

// Styled
console.log('%c I am some great text', 'font-size:50px; color: black; background: blue; text-shadow: 10px 10px red')

// warning!
console.warn('Oh NOOO!!!');

// Error :|
console.error('UPSS NOOO');

// Info
console.info('It is a JavaScript30 30 Day Challenge course');

// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('oach'), 'That is wrong!');

// clearing
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7 } years old`);
    console.groupEnd(`${dog.name}`);
});


// counting
console.count('Sevcan');
console.count('Sevcan');
console.count('Sevcan');
console.count('Gul');
console.count('Sevcan');
console.count('Sevcan');
console.count('Gul');
console.count('Gul');
console.count('Gul');
console.count('Sevcan');
console.count('Gul');

// timing
console.time('fetching data');
    fetch('https://api.github.com/users/wesbos')
      .then(data => data.json())
      .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
      })

//table
console.table(dogs);