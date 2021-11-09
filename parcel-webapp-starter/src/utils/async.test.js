import { promiseMe, random } from './async';

describe('Async', () => {
    it('Works', async () => {
        const obj = await promiseMe({ obj: 1 }, random(1000));
        expect(obj).toStrictEqual({ obj: 1 });
    });
});
