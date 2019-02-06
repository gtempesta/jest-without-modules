const fs = require("fs")
const loadExternalScripts = require('./loadExternalScripts');

// files to test
const jQueryFile = fs.readFileSync("jquery.js", { encoding: "utf-8" });
const srcFile = fs.readFileSync("lib.js", { encoding: "utf-8" });

describe('lib.js functions', () => {
    beforeAll(() => {
        loadExternalScripts([jQueryFile, srcFile]);
    });

    describe('function count', () => {
        test('counts arrays correctly', async () => {
            const testArray = ["one", 2, "five"];
            await expect(count(testArray)).toBe(3)
        })
    });

    describe('jQuery nval', () => {
        test('returns a number when its value is numeric', () => {
            const testinput = -34;
            const $input = $('<input class="form-control input-sm" id="50542" maxlength="8" type="number"></input>');
            expect($input.length).toBeGreaterThanOrEqual(1);
            $input.val(testinput);
            expect($input.nval()).toBeTruthy(); // controllo che non sia false, '', 0, null, undefined nè NaN
            expect($input.nval()).toBe(testinput);
        });

        test('returns a zero when its value is not numeric', () => {
            const testinputString = '170 gr';
            const testinputNaN = NaN;
            const $input = $('<input class="form-control input-sm" id="50542" maxlength="8" type="number"></input>');
            expect($input.length).toBeGreaterThanOrEqual(1);
            $input.val(testinputString);
            expect($input.nval()).toBe(0);
            $input.val(testinputNaN);
            expect($input.nval()).toBe(0);
        });
    });

});
