import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PersonalInfoCardData } from '../components/organisms/CardPersonalInfo/PersonalInfoCard';

interface PersonalInfoCardState {
  data: PersonalInfoCardData;
}

const initialState: PersonalInfoCardState = {
  data: {
    title: '',
    firstName: '',
    lastName: '',
    codePostal: '',
    adress: '',
    mail: '',
    phone: 0,
  },
};

const personalInfoCardSlice = createSlice({
  name: 'personalInfoCard',
  initialState,
  reducers: {
    setPersonalInfoCardData: (state, action: PayloadAction<PersonalInfoCardData>) => {
      state.data = action.payload;
    },
  },
});

export const { setPersonalInfoCardData } = personalInfoCardSlice.actions;
export default personalInfoCardSlice.reducer;
