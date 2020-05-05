import{handleSubmit}  from '../client/js/formHandler';

describe('Test "handleSubmit()" exists' , () => {
    it('It should return true',() => {
        expect(handleSubmit).toBeDefined();
    });
});
describe('Test if "handleSubmit()" should be a function' , () => {
    it('It should be a function', () => {
        expect(typeof handleSubmit).toBe("function");
    });
});