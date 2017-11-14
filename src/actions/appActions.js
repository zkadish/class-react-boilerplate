const Increment = 'INCREMENT';
const Decrement = 'DECREMENT';

export function increment() {
    return {
        type: Increment
    }
}

export function decrement() {
    return {
        type: Decrement
    }
}

