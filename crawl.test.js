const { normalizeURL } = require('./crawl.js');
const { test, expect } = require('@jest/globals');


test('normalizeURL', () => {
    const input = 'https://blog.boot.dev/path';
    const actual = normalizeURL(input);
    const expected = 'blog.boot.dev/path';
    expect(actual).toEqual(expected); // Expecting actual output to be eq to expected one
}) 


test('normalizeURL strip trailing slash', () => {
    const input = 'https://blog.boot.dev/path/';
    const actual = normalizeURL(input);
    const expected = 'blog.boot.dev/path';
    expect(actual).toEqual(expected); // Expecting actual output to be eq to expected one
}) 


test('normalizeURL capitals', () => {
    const input = 'https://BLOG.boot.dev/path/';
    const actual = normalizeURL(input);
    const expected = 'blog.boot.dev/path';
    expect(actual).toEqual(expected); // Expecting actual output to be eq to expected one
}) 
