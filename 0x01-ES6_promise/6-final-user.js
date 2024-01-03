import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

async function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  try {
    const results = await Promise.allSettled([userPromise, photoPromise]);

    return results.map((result) => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : result.reason,
    }));
  } catch (error) {
    return [{ status: 'rejected', value: error.message }];
  }
}

export default handleProfileSignup;
