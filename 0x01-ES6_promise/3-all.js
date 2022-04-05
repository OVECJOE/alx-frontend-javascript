import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const output = [];

  Promise.all([uploadPhoto(), createUser()])
    .then((values) => {
      output.push(values[0].body);
      for (const key of Object.keys(values[1])) {
        output.push(values[1][key]);
      }
      console.log(output.join(' '));
    }).catch('Signup system offline');
}
