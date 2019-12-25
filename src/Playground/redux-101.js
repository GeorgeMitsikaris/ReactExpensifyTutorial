import {createStore} from 'redux';

const incrementBy = ({increment = 1} = {}) => ({
    type: 'INCREMENT',
    increment
})

const decrementBy = ({decrement = 1} = {}) => ({
    type: 'DECREMENT',
    decrement
})

const reset = () => ({
    type: 'RESET'
})

const set = ({newCount}) => ({
    type: 'SET',
    newCount
})

const store = createStore((state = {count: 0}, action) => {
    switch(action.type){
        case 'INCREMENT':
            return {count: state.count + action.increment}
        case 'DECREMENT':
            return {count: state.count - action.decrement}
        case 'SET':
            return {count: action.newCount}
        case 'RESET':
            return {count: 0}
        default:
            return state;
    }
})


const unsubscribe = store.subscribe(()=>{
    console.log(store.getState().count);
})

store.dispatch(incrementBy({increment: 5}));

store.dispatch(incrementBy());

store.dispatch(reset());

store.dispatch(decrementBy({decrement: 10}));

store.dispatch(decrementBy());

store.dispatch(set({newCount: 101}));

