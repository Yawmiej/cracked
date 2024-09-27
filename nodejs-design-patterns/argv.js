function argv(args) {
  //function should listen for terminal inputs and log it to the console

  return args.slice(2);
}

//function should listen for terminal inputs and log it to the console

function listenForTerminalInputs() {
  process.stdin.on('data', (data) => {
    console.log(data.toString());
  });
}

listenForTerminalInputs();

console.log(argv(process.argv));
