/* eslint-disable */
const errorStyle = {
  color: 'red',
  background: 'lightgrey',
  fontSize: 20,
  borderStyle: 'solid',
  borderRadius: 5,
  padding: 10,
  marginBottom: 10,
};
const successStyle = {
  color: 'green',
  background: 'lightgrey',
  fontSize: 20,
  borderStyle: 'solid',
  borderRadius: 5,
  padding: 10,
  marginBottom: 10,
};

// eslint-disable-next-line react/prop-types
const Notification = ({ message }) => {
  if (message === null) {
    return null;
  }
  if (message.includes('successfully')) {
    return <div style={successStyle}>{message}</div>;
  }
  return <div style={errorStyle}>{message}</div>;
};

export default Notification;
