import { counterReducer } from 'app/entities/Counter/model/slice/CounterSlice';
import type { CounterSchema } from '../Counter/model/types/counterSchema';
import { Counter } from './ui/Counter';

export {
    CounterSchema,
    Counter,
    counterReducer,
};
