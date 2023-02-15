// process.stdout.write("hello from spinner1.js... \rheyyy\n");
let spinners = [
  "\r| ",
  "\r/ ",
  "\r- ",
  "\r\\ ",
  "\r| ",
  "\r/ ",
  "\r- ",
  "\r\\ ",
  "\r| ",
];

const spinner = function (spinnerArray, whenToStop) {
  let time = 100;
  let counter = 0;
  while (time <= whenToStop) {
    //we need to do is to get the char we are looking for before the setTimeout
    // so it does not change when the value of counter changes.
    // because we are using counter in setTimeout which results in always checking
    // the last value for counter (counter =45), because we increase it in the loop.
    let char = spinnerArray[counter % spinnerArray.length];
    setTimeout(() => {
      process.stdout.write(char);
    }, time);
    time += 200;
    ++counter;
  }
};

spinner(spinners, 9000);

// const spinner = function (spinnerArray, whenToStop) {
//   let time = 100;
//   for (let i = 0; i < spinners.length; ++i) {
//   //infinit while loop. have a variable that checks if %
//     if (time <= whenToStop) {
//       if (i === 8) {
//         i = 0;
//       }
//       setTimeout(() => {
//         process.stdout.write(spinners[i]);
//       }, time);
//       time += 200;
//     }
//   }
// };

// spinner(spinners, 9000);

// setTimeout(() => {
//   process.stdout.write('\r| ')
// }, 100);
// setTimeout(() => {
//   process.stdout.write('\r/ ')
// }, 300);
// setTimeout(() => {
//   process.stdout.write('\r- ')
// }, 500);
// setTimeout(() => {
//   process.stdout.write('\r\\ ')
// }, 700);
// setTimeout(() => {
//   process.stdout.write('\r| ')
// }, 900);
// setTimeout(() => {
//   process.stdout.write('\r/ ')
// }, 1100);
// setTimeout(() => {
//   process.stdout.write('\r- ')
// }, 1300);
// setTimeout(() => {
//   process.stdout.write('\r\\ ')
// }, 1500);
// setTimeout(() => {
//   process.stdout.write('\r| ')
// }, 1700);
