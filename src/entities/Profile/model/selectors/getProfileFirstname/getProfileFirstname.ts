import { Profile } from 'entities/Profile';
import { StateSchema } from 'app/providers/StoreProvider';

export const getProfileFirstname = (state: StateSchema) => state?.profile?.data?.firstname || '';
