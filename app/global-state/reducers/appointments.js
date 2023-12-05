import { ADD_APPOINTMENT, REMOVE_APPOINTMENT } from "../actions";

const appointmentsReducer = (state, action) => {
  switch (action.type) {
    case ADD_APPOINTMENT:
      console.log('Reducer: ADD_APPOINTMENT', state, action);
      return [...state, action.payload];

    case REMOVE_APPOINTMENT:
      const updatedAppointments = state.filter(
        (appointment) => appointment.id !== action.payload
      );
      return {
        ...state,
        appointments: updatedAppointments,
      };

    default:
      return state;
  }
};

export default appointmentsReducer;
