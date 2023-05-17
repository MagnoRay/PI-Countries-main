const { Activity, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Actvity model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Activity.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Activity.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Activity.create({ name: 'Treking' });
      });
    }); 
    // Teste agreagado
    describe('difficulty', () => {
        it('should throw an error if difficulty is null', (done) => {
          Activity.create({})
            .then(() => done(new Error('It requires a valid difficulty')))
            .catch(() => done());
        });
        it('should work when its a valid difficulty', () => {
          Activity.create({ difficulty: '1' });
        });
      });

      describe('duration', () => {
        it('should throw an error if duration is null', (done) => {
          Activity.create({})
            .then(() => done(new Error('It requires a valid duration')))
            .catch(() => done());
        });
        it('should work when its a valid duration', () => {
          Activity.create({ duration: '06:00' });
        });
      });
      
      describe('season', () => {
        it('should throw an error if season is null', (done) => {
          Activity.create({})
            .then(() => done(new Error('It requires a valid season')))
            .catch(() => done());
        });
        it('should work when its a valid season', () => {
          Activity.create({ season: 'Primavera' });
        });
      });
      
  });
});
