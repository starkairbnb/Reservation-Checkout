const db = require('./index.js');
const data = require('./data.json');

const seed = (data) => {
  for (let blurb of data) {
    const { description1, description2, imgUrl } = blurb
    db.create({ description1, description2, imgUrl })
    .catch((err) => console.error(err));
  }
}

seed(data);
