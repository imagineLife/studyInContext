export const FAKE_USER = {
  firstName: 'Jake',
  lastName: 'Laursen',
  username: 'Jake',
  avatar:
    'https://avatars2.githubusercontent.com/u/24195040?v=4'
};

export const FAKE_EMAILS = [
  {
    id: 0,
    subject: 'Hey Jake',
    body: 'Yo, just wanted to say hey.'
  },
  {
    id: 1,
    subject: 'React is great',
    body: 'I thought I should let you know.'
  },
  {
    id: 2,
    subject: 'REQUEST FOR ASSISTANCE',
    body:
      'If you send me your bank account number I will reward you with $10 million whole US dollars.'
  }
];

// Generate a preview
FAKE_EMAILS.forEach(
  email => (email.preview = email.body.substr(0, 46))
);

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

export function fetchEmails() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(FAKE_EMAILS);
    }, 300);
  });
}
