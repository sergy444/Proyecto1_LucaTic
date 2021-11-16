import {fetch} from "./pokeFetch";

test('the data is peanut butter', () => {
    return fetch().then(data => {
      expect(data).toBe('peanut butter');
    });
  });