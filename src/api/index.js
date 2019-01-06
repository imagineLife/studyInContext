export const FAKE_USER = {
  firstName: 'Jake',
  lastName: 'Laursen',
  username: 'Jake',
  avatar:
    'https://avatars2.githubusercontent.com/u/24195040?v=4'
};

export function login(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'Jake' && password === 'secret') {
        resolve(FAKE_USER);
      } else {
        reject({ message: 'Invalid username or password' });
      }
    }, 300);
  });
}