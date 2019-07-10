export const FAKE_USER = {
  firstName: 'water',
  lastName: 'melon',
  username: 'water',
  avatar:
    'https://avatars2.githubusercontent.com/u/24195040?v=4'
};

export function login(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'water' && password === 'melon') {
        resolve(FAKE_USER);
      } else {
        reject({ message: 'Invalid username or password' });
      }
    }, 300);
  });
}