import { expect } from "chai";
import Sinon from "sinon";
import CarService from "../../../services/carService";
import { carCreateMock, carResolveMock } from "../mocks/carMock";

describe('2 - Test Car Service', () => {
    let carService = new CarService();

    describe('2.1 - POST /cars -- Create car', () => {
        before(() => {
            Sinon.stub(carService, 'create').resolves(<any>carResolveMock);
        });
        after(() => {
            Sinon.restore();
        });
        it('a) - Should return a car', async () => {
            const car = await carService.create(carCreateMock);
            expect(car).to.be.an('object');
        });
        it('b) - Should return a list of cars', async () => {
            const cars = await carService.getAll();
            expect(cars).to.be.an('array');
        });
    });
});