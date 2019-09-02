'use strict';

const languages = [
  {
    name: 'html',
    frontEnd: true
  },
  {
    name: 'css',
    frontEnd: true
  },
  {
    name: 'node',
    frontEnd: false
  },
  {
    name: 'js',
    frontEnd: true
  }
];

// map

const frontEndLanguagesWithTitles = languages.map(language => {
  if (language.frontEnd === true) {
    return `${language.name} is a front end language.`;
  } else {
    return `${language.name} is not a front end language.`;
  }
});

console.log(frontEndLanguagesWithTitles);

// filter

const frontEndLanguages = languages.filter(language => {
  if (language.frontEnd === true) {
    return true;
  } else {
    return false;
  }
});

console.log(frontEndLanguages);

// reduce

const frontEndLanguagesNames = languages.reduce((acc, language) => {
  acc.push(language.name);
  return acc;
}, []);

console.log(frontEndLanguagesNames);