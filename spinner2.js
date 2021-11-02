const spinner = () => {
  let time = 100; //establish a time variable
  let el = ['\r|    ', '\r/    ', '\r-    ', '\r\\    ', '\r|    ', '\r-    ', '\r\\   ', '\r|  ']; //array of slash strings
  for (let i of el) { //loop through array of slash strings
    setTimeout(() => {
      process.stdout.write(i);//print out slash string
    },time); time += 100; //increase time with each slash string printed
  }
};
spinner();