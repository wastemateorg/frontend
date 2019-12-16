export function updatePhoto(photo){
    console.log('yay')
    return {
      type: 'INCOMING_PHOTO',
      payload: photo
    };
  }