const schools = {
  Indiana: 10947,
  Michigan: 15558,
  Wisconsin: 10725
};

const schoolArray = Object.keys(schools).map(key => ({
  name: key,
  tuition: schools[key]
}));

console.log(schoolArray);
