import { ADD_APPOINTMENT, REMOVE_APPOINTMENT } from "../actions";

const appointmentsReducer = (state, action) => {
  switch (action.type) {
    case ADD_APPOINTMENT:
      return {
        ...state,
        appointments: [...state.appointments, action.payload],
      };

    case REMOVE_APPOINTMENT:
      const updatedAppointments = state.appointments.filter(
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
