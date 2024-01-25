import { Countries, Currency } from 'shared/consts/common';

export interface Profile {
  firstname: string,
  lastname: string,
  age: number,
  currency: Currency,
  country: Countries,
  city: string,
  username: string,
  avatar: string
}

export interface ProfileSchema {
  data?: Profile
  isLoading: boolean
  error?: string
  readonly: boolean
}