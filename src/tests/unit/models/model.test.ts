import { expect } from "chai";
import Sinon from "sinon";
import CarModel from "../../../models/carModel";
import { carCreateMock, carResolveMock } from "../mocks/carMock";

describe('1 - Car model test', () => {
    let carModel = new CarModel();

    describe('1.1 - POST /cars -- Create car', () => {
        before(() => {
            Sinon.stub(carModel, 'create').resolves(carResolveMock);
        })
        after(() => {
            Sinon.restore();
        })

        it('a) - Should return a car', async () => {
            const car = await carModel.create(carCreateMock);
            expect(car).to.be.an('object');
        });
    })
});