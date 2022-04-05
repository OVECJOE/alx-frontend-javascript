import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const output = [];

  Promise.all([uploadPhoto, createUser])
    .then((values) => {
      values[0]().then((result) => {
        output.push(result.body);
      });
      values[1]().then((result) => {
        for (const a of Object.keys(result)) {
          output.push(result[a]);
        }
        console.log(output.join(' '));
      });
    }).catch('Signup system offline');
}
