import { checkForName } from '../client/js/nameChecker.js';

describe('testing submit', () => {
    it('Returns true on valid url', () => {
        expect(checkForName('https://www.netflix.com/')).toBe(true);
    })

    it('Returns false on invalid url', () => {
        expect(checkForName('NO')).toBe(false);
    })
})