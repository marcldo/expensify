import { createStore, combineReducers } from 'redux';

const demoState = {
  expenses: [{
    id: 'asdfasdfaf',
    description: 'Jan Rent',
    note: 'This was the final payment before move',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', //date or amount
    startDate: undefined,
    endDate: undefined
  }
};