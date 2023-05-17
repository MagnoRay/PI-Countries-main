const { expect } = require('chai');
const request = require('supertest');
const session = require('supertest-session');
const app = require('../../src/app.js');

const agent = session(app);

describe('Test de rutas activity', ()=>{
    describe('POST /newact', ()=>{
        it('debe devolver el estado 400 y el texto correspondiente si alguno de los parámetros obligatorios no se envía', async()=>{
          const res = await request(app).post('/newact');
          expect(res.statusCode).to.equals(400);
          expect(res.text).to.equals('Completar todo los campos');
        });
        it('debe devolver 200 si guarda correctamento el dog', ()=>{
         agent.post('/newdog').expect(200);
        });
      });
});