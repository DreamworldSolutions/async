import * as async from '../index.js';

const promise = (task) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      console.log(`task resolved of task=`, task);
    }, 5000);
  });
};

const task = async (task) => {
  await promise(task);
  console.log(`task completed. task=`, task);
};

async.sequentialExec(1, () => task('task1'));
async.sequentialExec(1, () => task('task2'));
async.sequentialExec(1, () => task('task3'));

setTimeout(() => {
  async.sequentialExec(2, () => task('task1'));
  async.sequentialExec(2, () => task('task2'));
  async.sequentialExec(2, () => task('task3'));
}, 1500);

setTimeout(() => {
  async.sequentialExec(1, () => task('task1'));
  async.sequentialExec(1, () => task('task2'));
  async.sequentialExec(2, () => task('task3'));
}, 15000);