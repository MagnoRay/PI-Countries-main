const { Country, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Country model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Country.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Country.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Country.create({ name: 'Argentina' });
      });
    }); 
    // Teste agreagado
    describe('flag', () => {
      it('should throw an error if flag is null', (done) => {
        Country.create({})
          .then(() => done(new Error('It requires a valid flag')))
          .catch(() => done());
      });
      it('should work when its a valid flag', () => {
        Country.create({ flag: 'https://flagcdn.com/ge.svg' });
      });
    }); 

    describe('region', () => {
      it('should throw an error if region is null', (done) => {
        Country.create({})
          .then(() => done(new Error('It requires a valid region')))
          .catch(() => done());
      });
      it('should work when its a valid region', () => {
        Country.create({ region: 'Asia' });
      });
    }); 

    describe('capital', () => {
      it('should work when its a valid capital', () => {
        Country.create({ capital: 'Tbilisi' });
      });
    });

    describe('subregion', () => {
      it('should work when its a valid subregion', () => {
        Country.create({ subregion: 'Western Asia' });
      });
    });

    describe('area', () => {
      it('should work when its a valid area', () => {
        Country.create({ area: 69700 });
      });
    });

    describe('population', () => {
      it('should work when its a valid population', () => {
        Country.create({ population: 3714000 });
      });
    });
  });
});
