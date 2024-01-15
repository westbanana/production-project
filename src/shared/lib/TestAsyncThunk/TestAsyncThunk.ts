import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

export class TestAsyncThunk {
    dispatch: Dispatch;

    getState: () => StateSchema;
}
