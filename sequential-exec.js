/**
 * Holds current execution queue by key.
 * Format: { key: [Tasks] }
 */
let tasksByKey = {};

const _start = async (key) => {
  let tasks = [...tasksByKey[key]];
  for (let task of tasks) {
    await task();
    tasksByKey[key].shift(task);
  }

  if(!tasksByKey[key].length) {
    delete tasksByKey[key];
    return;
  }

  _start(key);
};

/**
 * It executes async tasks sequentially by given key.
 * @param {String} key 
 * @param {Function} task 
 */
export default (key, task) => {
  if(tasksByKey[key]) {
    tasksByKey[key].push(task);
    return;
  }

  tasksByKey[key] = [task];
  _start(key);
};