# async
An utility library for async tasks; man add-on to  async.js

## To execute async tasks as sequentially
```
import * as async from '@dreamworld/async';

async.sequentialExec(key, () => asyncFn());
```