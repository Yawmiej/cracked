# Reading Notes for Node.js Design Patterns

## Resources

- Node.js Design Patterns by Mario Casciaro & Luciano mammino (3rd Edition)
- [Libuv Book](https://nikhilm.github.io/uvbook/)

## Chapter 1: The Node.js Platform

- Node Js primarily uses the Reactor pattern (also known as Proactor pattern in the context of I/O operations)
- The Most basic pattern for dealing with non-blocking I/O is using a _busy-wait_ loop to check for events when data is ready or if there are connections ready to be accepted

```javascript
const resources = ['resource1', 'resource2', 'resource3'];

while (resources.length) {
  for (const resource of resources) {
    if (isReady(resource)) {
      const data = getData(resource);
      processData(data);
    } else if (isDone(resource)) {
      resources.splice(resources.indexOf(resource), 1);
    } else {
      console.log('Resource not ready yet');
      continue;
    }
  }
}
```

- The busy-wait loop is not efficient because it wastes CPU cycles while waiting for events
- Node.js uses an event-driven approach to handle I/O operations, where the main thread offloads the work to a worker pool and continues processing other tasks while waiting for the results
- Event demultiplexing (aka event notification mechanism) is used to monitor multiple events and notify the application when the desired event occurs
- The Reactor pattern is basically a standardized way to implement event demultiplexing
- Each operating system has its own interface for the event demultiplexer: epoll on Linux, kqueue on macOS, and the I/O completion port (IOCP) API on Windows.
- Libuv represents the low-level I/O engine of Node.js
- process.argv is an array containing the command-line arguments passed when the Node.js process was launched
- process.argv[0] is the path to the Node.js executable
- process.argv[1] is the path to the JavaScript file being executed
- process.argv[2] onwards are the command-line arguments passed to the script

```javascript
const argv = (args) => {
  return args.slice(2);
};

console.log(argv(process.argv));
```

- WebAssembly is a low-leel instruction format that allow us to compile languages other than JavaScript (C++/Rust) into a format that is "understandable" by JavaScript VMs.