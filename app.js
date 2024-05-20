const state1 = { username: "john", point: 100, loading: true };
let state2 = {...state1};
console.log(state2)

state2.loading = false;
state2.point = 75;
state2.success = true;
console.log(state2)

//or

// let state2 = {};
// for (let key in state1) {
//     state2[key] = state1[key];
// }
// console.log(state2);

// state2.loading = false;
// state2.point = 75;
// state2.success = true;
// console.log(state2)
