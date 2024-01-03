import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  try {
    const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);

    return {
      photo: photo.body ? photo : null,
      user: user.firstName ? user : null,
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}

export default asyncUploadUser;
