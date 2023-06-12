import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './slice/contactsSlice';
import { filtersReducer } from './slice/filterSlice';


export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },

  
});


