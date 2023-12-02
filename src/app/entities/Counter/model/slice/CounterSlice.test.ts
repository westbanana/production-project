import { counterReducer, CounterSchema } from 'app/entities/Counter';
import { counterActions } from 'app/entities/Counter/model/slice/CounterSlice';

describe('CounterSlice.test', () => {
    test('decrement', () => {
        const state: CounterSchema = { value: 10 };
        expect(
            counterReducer(state, counterActions.decrement()),
        )
            .toEqual({ value: 9 });
    });
    test('increment', () => {
        const state: CounterSchema = { value: 10 };
        expect(
            counterReducer(state, counterActions.increment()),
        )
            .toEqual({ value: 11 });
    });
    test('incrementByAmount', () => {
        const state: CounterSchema = { value: 10 };
        expect(
            counterReducer(state, counterActions.incrementByAmount(10)),
        )
            .toEqual({ value: 20 });
    });
    test('empty state', () => {
        const state: CounterSchema = { value: 10 };
        expect(
            counterReducer(undefined, counterActions.increment()),
        )
            .toEqual({ value: 1 });
    });
});
