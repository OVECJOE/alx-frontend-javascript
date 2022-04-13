export default function cleanSet(set, startString) {
  let compoundString = '';
  set.forEach((s) => {
    if (s.startsWith(startString) && startString.length > 0) {
      compoundString += `-${s.slice(startString.length, s.length)}`;
    }
  });
  return (compoundString) ? compoundString.slice(1, compoundString.length) : compoundString;
}
