// import TermekModel from "../models/termekModel";
import { expect, jest, test } from "@jest/globals";

const termekModelMock = {
    getAll: jest.fn(),
    getById: jest.fn(),
    create: jest.fn()
};
jest.unstable_mockModule('../models/termekModel.js', () => ({ default: termekModelMock }));

const { default: TermekController } = await import('./termekController.js');

test("Sample test case", async () => {
    expect(true).toBe(true);
    const resultMock = {
        json: jest.fn(),
        status: jest.fn().mockReturnThis(),
    };
    const termekek = [{ id: 1, nev: "Termék 1", ar: 1000, keszlet: 10 }];
    termekModelMock.getAll.mockResolvedValue(termekek);

    await TermekController.getAll({ params: {} }, resultMock);

    expect(termekModelMock.getAll).toHaveBeenCalled();
    expect(resultMock.json).toHaveBeenCalledWith(termekek);
});
