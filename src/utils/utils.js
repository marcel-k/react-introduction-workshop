export function classNames(obj) {
  const classes = [];
  Object.keys(obj).forEach((key) => {
    const prop = obj[key];
    if(prop) classes.push(key);
  });

  return classes.join(' ');
}