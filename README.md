# @delang/promise-batch

**Run Promises in controlled batches instead of all at once.**  
Useful for throttling I/O, API calls, or any async operations where concurrency control is needed.

## Features

- Simple Promise batching interface
- Supports both ESM and CommonJS
- TypeScript-ready
- Lightweight and dependency-free

## Installation

```bash
npm install @delang/promise-batch
```

## Usage

```ts
import promiseBatch from '@delang/promise-batch';

const tasks = Array.from({ length: 10 }, (_, i) => () =>
  fetch(`https://api.example.com/item/${i}`).then(res => res.json())
);

const results = await promiseBatch(tasks, 3);
console.log(results);
```

### Parameters

| Name        | Type                    | Description                                      |
|-------------|-------------------------|--------------------------------------------------|
| `tasks`     | `(() => Promise<T>)[]`  | Array of functions that each return a Promise    |
| `batchSize` | `number`                | Number of tasks to run concurrently              |

## Example

```ts
const delays = [100, 200, 300, 400, 500];
const tasks = delays.map(delay => () =>
  new Promise(resolve => setTimeout(() => resolve(delay), delay))
);

const results = await promiseBatch(tasks, 2);
console.log(results); // [100, 200, 300, 400, 500]
```

## 📄 License

MIT © [delang](https://github.com/marcusdelang)
