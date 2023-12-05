const ADD_APPOINTMENT = 'ADD_APPOINTMENT';
const REMOVE_APPOINTMENT = 'REMOVE_APPOINTMENT';
const ADD_USER = 'ADD_USER';
const REMOVE_USER = 'REMOVE_USER';

const addAppointment = (newAppointment) => (newAppointment);

const removeAppointment = (appointmentId) => ({
  type: REMOVE_APPOINTMENT,
  payload: appointmentId,
});

const addUser = (newUser) => ({
  type: ADD_USER,
  payload: newUser,
});

const removeUser = (userId) => ({
  type: REMOVE_USER,
  payload: userId,
});

export { addAppointment, removeAppointment, addUser, removeUser };

export { ADD_APPOINTMENT, REMOVE_APPOINTMENT, ADD_USER, REMOVE_USER };