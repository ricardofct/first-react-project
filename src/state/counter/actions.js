const LoadRequest = () => ({        // add
  type: '[COUNTER] LoadRequest'   // add
});                                 // add

const LoadSucceeded = () => ({      // add
  type: '[COUNTER] LoadSucceeded' // add
});                                 // add

const LoadFailed = () => ({         // add
  type: '[COUNTER] LoadFailed'    // add
});                                 // add

const Increment = () => ({
  type: '[COUNTER] Increment'
});

const Decrement = () => ({
  type: '[COUNTER] Decrement'
});

export default {
  Increment,
  Decrement,
  LoadRequest,                    // add
  LoadSucceeded,                  // add
  LoadFailed                      // add
}