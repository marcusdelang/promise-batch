/*!
 * Executes Promises in chunks, limiting concurrency.
 *
 * @param tasks An array of functions returning Promises.
 * @param batchSize Maximum number of Promises to run concurrently.
 * @returns A Promise that resolves to an array of resolved values.
 */
export default async function promiseBatch<T>(
  tasks: (() => Promise<T>)[],
  batchSize: number
): Promise<T[]> {
  if (!Array.isArray(tasks)) {
    throw new TypeError("Expected an array of functions returning promises");
  }
  if (typeof batchSize !== "number" || batchSize <= 0) {
    throw new RangeError("batchSize must be a positive number");
  }

  const results: T[] = [];

  for (let i = 0; i < tasks.length; i += batchSize) {
    const batch = tasks.slice(i, i + batchSize);
    const resolved = await Promise.all(batch.map(task => task()));
    results.push(...resolved);
  }

  return results;
}
