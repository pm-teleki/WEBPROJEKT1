import TermekModel from "../models/termekModel";
import TermekController from "./termekController";
import { expect, jest, test } from "@jest/globals";
jest.mock("../models/termekModel", () => {});

const mockedModel = jest.fn < TermekModel > (() => ({}));

test("Sample test case", async () => {
    expect(true).toBe(true);
    const resultMock = {};
    // mockedModel.getAll = jest
    //   .fn()
    //   .mockResolvedValue([{ id: 1, nev: "Termék 1", ar: 1000, keszlet: 10 }]);

    mockedModel();

    await TermekController.getAll({ params: {} }, resultMock);
});
