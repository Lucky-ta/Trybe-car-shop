import { expect } from "chai";
import Sinon from "sinon";
import CarService from "../../../services/carService";
import { carCreateMock, carResolveMock, carResolveMockArray } from "../mocks/carMock";

describe('2 - Test Car Service', () => {
    let carService: CarService;

    describe('2.1 - POST /cars -- Create car', () => {
        before(() => {
            carService = new CarService();
            Sinon.stub(carService, 'create').resolves(<any>carResolveMock);
        });
        after(() => {
            Sinon.restore();
        });
        it('a) - Should return a car', async () => {
            const car = await carService.create(carCreateMock);
            expect(car).to.be.an('object');
        });
        it('b) - Should return have property _id', async () => {
            const car = await carService.create(carCreateMock);
            expect(car).to.have.property('_id');
        })
    });

    describe('2.2 - GET /cars -- getAll cars',() => {
        before(() => {
            carService = new CarService();
            Sinon.stub(carService, 'getAll').resolves(<any>carResolveMockArray);
        });
        after(() => {
            Sinon.restore();
        });
        it('a) - Should return an array of cars', async () => {
            const cars = await carService.getAll();            
            expect(cars).to.be.an('array');
        });
        it('b) - Should return an array of cars with length = 3', async () => {
            const cars = await carService.getAll();
            expect(cars).to.have.lengthOf(3);
        });
    })

    
});
describe('', () => {
    let carService: CarService;
    describe('2.3 - GET /cars/:id -- getById car', () => {
        before(() => {
            carService = new CarService();
            Sinon.stub(carService, 'getById').resolves(<any>carResolveMock);
        });
        after(() => {
            Sinon.restore();
        });
        it('a) - Should return a car', async () => {
            const car = await carService.getById('4edd40c86762e0fb12000003');
            expect(car).to.be.an('object');
        });
        it('b) - Should return have property _id', async () => {
            const car = await carService.getById('4edd40c86762e0fb12000003');
            expect(car).to.have.property('_id');
        })
    })
})