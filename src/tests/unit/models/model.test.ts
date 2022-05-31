import { expect } from 'chai';
import {Model} from 'mongoose';
import { Car } from '../../../interfaces/CarInterface';
import CarModel from '../../../models/carModel';
import { carResolveMock, carResolveMockArray } from '../mocks/carMock';

describe('1 - Car model test', () => {
    let carModel: CarModel;
    let mongooseModelMock = {
        create: (car: any) => {
            return {
                ...car,
                _id: 'any_id'
            };
        },
    } as Model<Car>;

    before('', () => {
        carModel = new CarModel(mongooseModelMock);
    })

    describe('Test create function', () => {
        it('a) - Should return a car', async () => {
            const car = await carModel.create(carResolveMock);
            expect(car).to.be.an('object');
        })
    })
});

describe('2 - Car Model - GET /cars', () => {
    let carModel: CarModel;
    let mongooseModelMock = {
        find: () => {
            return [...carResolveMockArray];
        },
    } as any
    before('', () => {
        carModel = new CarModel(mongooseModelMock);
    })
    describe('Test getAll function', () => {
        it('a) - Should return an array of cars', async () => {
            const cars = await carModel.getAll();
            expect(cars).to.be.an('array');
        })
        it('b) - Should return an array of cars with length = 3', async () => {
            const cars = await carModel.getAll();
            expect(cars).to.have.lengthOf(3);
        })
    })
})