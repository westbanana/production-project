import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileLoading,
    profileActions,
    ProfileCard,
    profileReducer,
} from 'entities/Profile';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ProfilePageHeader } from 'pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader';
import { getProfileReadOnly } from 'entities/Profile/model/selectors/getProfileReadOnly/getProfileReadOnly';
import { Currency } from 'entities/Currency';
import { Countries } from 'entities/Country/model/types/country';

interface ProfilePageProps {
  className?: string

}

const reducers: ReducerList = {
    profile: profileReducer,
};

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const formData = useSelector(getProfileForm);
    const erorr = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadOnly);
    const isLoading = useSelector(getProfileLoading);
    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    const onChangeFirstname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ firstname: value || '' }));
    }, [dispatch]);

    const onChangeLastname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ lastname: value || '' }));
    }, [dispatch]);

    const onChangeAge = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ age: Number(value) || 0 }));
    }, [dispatch]);

    const onChangeCountry = useCallback((country?: Countries) => {
        dispatch(profileActions.updateProfile({ country }));
    }, [dispatch]);

    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ city: value || '' }));
    }, [dispatch]);

    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ avatar: value || '' }));
    }, [dispatch]);

    const onChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ username: value || '' }));
    }, [dispatch]);

    const onChangeCurrency = useCallback((currency?: Currency) => {
        dispatch(profileActions.updateProfile({ currency }));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [])}>
                <ProfilePageHeader />
                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={erorr}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeAge={onChangeAge}
                    onChangeCountry={onChangeCountry}
                    onChangeCity={onChangeCity}
                    onChangeAvatar={onChangeAvatar}
                    onChangeUsername={onChangeUsername}
                    onChangeCurrency={onChangeCurrency}
                    readonly={readonly}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
