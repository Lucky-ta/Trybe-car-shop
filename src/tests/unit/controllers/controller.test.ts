import Sinon from "sinon";
import CarController from "../../../controllers/carController";
import * as sinon from 'sinon';
import chai from 'chai';
import chaiHttp = require('chai-http');
import { Request, Response } from 'express';
import { carCreateMock, carResolveMock } from "../mocks/carMock";

chai.use(chaiHttp);

const { expect } = chai;

describe('Car Controller test', () => {
    const carController = new CarController();
    const request = {} as Request;
    const response = {} as Response;
  
    describe('1 - POST /cars -- Create car', () => {
        before(() => {
            request.body = carCreateMock;
            response.status = sinon.stub().returns(response);
            response.json = sinon.stub().returns(response);
            sinon.stub(carController, 'create').resolves(<any>carCreateMock);
        });
        after(() => {
            Sinon.restore();
        });
        it('a) - Should return a car', async () => {
            const car = await carController.create(request, response);
            expect(car).to.be.an('object');
        });
    });
})