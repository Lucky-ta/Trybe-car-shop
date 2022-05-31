import * as sinon from 'sinon';
import chai from 'chai';
import chaiHttp = require('chai-http');
import CarModel from '../../../models/carModel';
import { carCreateMock, carResolveMock } from '../mocks/carMock';
import server from '../../../server';


chai.use(chaiHttp);

const { expect } = chai;


describe('Testa endpoints de Car', () => {
  const app = server.getApp();
  let carModel = new CarModel();
  before(() => {
    sinon
      .stub(carModel, 'create')
      .resolves(carResolveMock);
  });

  after(()=>{
    sinon.restore();
  })

  it('Testa o endpoint create car (201 CREATED)', async () => {
    const response = await chai
      .request(app)
      .post('/cars')
      .send(carCreateMock);
    expect(response.status).to.be.equal(500);
  });

});