// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2


// phone number
test("checks that '(321)543-2109' is a valid phone number", () => {
    expect(functions.isPhoneNumber('(321)543-2109')).toBe(true);
});

test("checks that '(009)883-1487' is a valid phone number", () => {
    expect(functions.isPhoneNumber('(009)883-1487')).toBe(true);
});

test("checks that '(888)8888-888' is a not valid phone number", () => {
    expect(functions.isPhoneNumber('(888)8888-888')).toBe(false);
});

test("checks that '41-387' is not a valid phone number", () => {
    expect(functions.isPhoneNumber('41-387')).toBe(false);
});


// email
test("checks that 'jeremy@google.com' is a valid email", () => {
    expect(functions.isEmail('jeremy@google.com')).toBe(true);
});

test("checks that 'java@java.java' is a valid email", () => {
    expect(functions.isEmail('java@java.org')).toBe(true);
});

test("checks that 'hello@google' is not a valid email", () => {
    expect(functions.isEmail('hello@google')).toBe(false);
});

test("checks that 'google.com' is not a valid email", () => {
    expect(functions.isEmail('google.com')).toBe(false);
});


//strong password
test("checks that 'h3lp23' is a strong password", () => {
    expect(functions.isStrongPassword('h3lp23')).toBe(true);
});

test("checks that 'fudsde1fi31' is a strong password", () => {
    expect(functions.isStrongPassword('fudsde1fi31')).toBe(true);
});

test("checks that '3dhud13' is not a strong password", () => {
    expect(functions.isStrongPassword('3dhud13')).toBe(false);
});

test("checks that 'h' is not a strong password", () => {
    expect(functions.isStrongPassword('h')).toBe(false);
});


// isDate
test("checks that '11/20/2022' is a valid date", () => {
    expect(functions.isDate('11/20/2022')).toBe(true);
});

test("checks that '1/1/2022' is a valid date", () => {
    expect(functions.isDate('1/1/2022')).toBe(true);
});

test("checks that '2022/1/1' is not a valid date", () => {
    expect(functions.isDate('2022/1/1')).toBe(false);
});

test("checks that '4-3-2022' is not a valid date", () => {
    expect(functions.isDate('4-3-2022')).toBe(false);
});


// isHexColor
test("checks that '#4f5432' is a valid hex color", () => {
    expect(functions.isHexColor('#4f5432')).toBe(true);
});

test("checks that '#bcd' is a valid hex color", () => {
    expect(functions.isHexColor('#bcd')).toBe(true);
});

test("checks that '#g32132' is not a valid hex color", () => {
    expect(functions.isHexColor('#g32132')).toBe(false);
});

test("checks that '#cd' is not a valid hex color", () => {
    expect(functions.isHexColor('#cd')).toBe(false);
});