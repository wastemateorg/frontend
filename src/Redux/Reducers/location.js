var center = {
  lat: 0,
  lng: 0
};

export default function location(state = center, action) {
  switch (action.type) {
    case "INCOMING_PHOTO":
      return (state = action.payload);
    default:
      return state;
  }
}
