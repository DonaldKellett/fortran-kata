'use strict';

const expect = require('chai').expect,
  child_process = require('child_process');

describe('GNU Fortran', function () {
  describe('Basic Run', function () {
    it('should handle basic code evaluation', function (done) {
      child_process.exec('gfortran examples/solutionOnly/helloWorld.f95; ./a.out', function (error, stdout, stderr) {
        expect(stdout).to.equal("Hello World!\n");
        done();
      });
    });
    it('should support free-form programs and allow for line continuation', function (done) {
      child_process.exec('gfortran examples/solutionOnly/freeForm.f95; ./a.out', function (error, stdout, stderr) {
        expect(stdout).to.equal("Free-form\n");
        done();
      });
    });
  });
  describe('Test Integration (CW-2)', function () {
    it('should have working spec methods', function (done) {
      child_process.exec('gfortran -c frameworks/fortran/cw-2.f95; gfortran examples/testIntegration/snippets/specMethods.f95 cw-2.o; ./a.out', function (error, stdout, stderr) {
        expect(stdout).to.equal("<DESCRIBE::>The `describe` context of the CW-2 testing framework\n<IT::>should work properly for the first time\nHello World\n<COMPLETEDIN::>\n<IT::>should work properly again after `it` is called a second time\nTesting testing ... \n<COMPLETEDIN::>\n<COMPLETEDIN::>\n<DESCRIBE::>`describe` should work on its own\nAll OK!\n<COMPLETEDIN::>\n");
        done();
      });
    });
    it('should have a working assertEquals for signed 32-bit integers, both with and without a custom failure message', function (done) {
      child_process.exec('gfortran -c frameworks/fortran/cw-2.f95; gfortran examples/testIntegration/snippets/int32Equals.f95 cw-2.o; ./a.out', function (error, stdout, stderr) {
        expect(stdout).to.equal("<PASSED::>Test Passed - Value == 2147483647\n<FAILED::>Expected: 2147483647, instead got: 32767\n<PASSED::>Test Passed - Value == 2147483647\n<FAILED::>Try again - what is the largest possible value of a signed 32-bit integer? - Expected: 2147483647, instead got: 32767\n");
        done();
      });
    });
    it('should have a working assertEquals for signed 64-bit integers, both with and without a custom failure message', function (done) {
      child_process.exec('gfortran -c frameworks/fortran/cw-2.f95; gfortran examples/testIntegration/snippets/int64Equals.f95 cw-2.o; ./a.out', function (error, stdout, stderr) {
        expect(stdout).to.equal("<PASSED::>Test Passed - Value == 9223372036854775807\n<FAILED::>Expected: 9223372036854775807, instead got: 2147483647\n<PASSED::>Test Passed - Value == 9223372036854775807\n<FAILED::>Incorrect, try again ;) - Expected: 9223372036854775807, instead got: 2147483647\n");
        done();
      });
    });
    it('should have a working assertEquals for signed 128-bit integers, both with and without a custom failure message', function (done) {
      child_process.exec('gfortran -c frameworks/fortran/cw-2.f95; gfortran examples/testIntegration/snippets/int128Equals.f95 cw-2.o; ./a.out', function (error, stdout, stderr) {
        expect(stdout).to.equal("<PASSED::>Test Passed - Value == 170141183460469231731687303715884105727\n<FAILED::>Expected: 170141183460469231731687303715884105727, instead got: 9223372036854775807\n<PASSED::>Test Passed - Value == 170141183460469231731687303715884105727\n<FAILED::>Incorrect result - Expected: 170141183460469231731687303715884105727, instead got: 9223372036854775807\n");
        done();
      });
    });
    it('should have a working assertEquals for default logical values, both with and without a custom failure message', function (done) {
      child_process.exec('gfortran -c frameworks/fortran/cw-2.f95; gfortran examples/testIntegration/snippets/boolEquals.f95 cw-2.o; ./a.out', function (error, stdout, stderr) {
        expect(stdout).to.equal("<PASSED::>Test Passed - Value == T\n<FAILED::>Expected: T, instead got: F\n<FAILED::>Expected: F, instead got: T\n<PASSED::>Test Passed - Value == F\n<PASSED::>Test Passed - Value == T\n<FAILED::>Incorrect logical value returned - Expected: T, instead got: F\n<FAILED::>Incorrect logical value returned - Expected: F, instead got: T\n<PASSED::>Test Passed - Value == F\n");
        done();
      });
    });
    it('should have a working assertEquals for default character strings, both with and without a custom failure message', function (done) {
      child_process.exec('gfortran -c frameworks/fortran/cw-2.f95; gfortran examples/testIntegration/snippets/strEquals.f95 cw-2.o; ./a.out', function (error, stdout, stderr) {
        expect(stdout).to.equal("<PASSED::>Test Passed - Value == Hello World!\n<FAILED::>Expected: Hello World!, instead got: Goodbye World!\n<FAILED::>Expected: Hello World!, instead got: Hello       \n<FAILED::>Expected: Hello World!, instead got: Hello World!   \n<PASSED::>Test Passed - Value == Hello World!\n<FAILED::>Check your returned string ;) - Expected: Hello World!, instead got: Goodbye World!\n<FAILED::>Check your returned string ;) - Expected: Hello World!, instead got: Hello       \n<FAILED::>Check your returned string ;) - Expected: Hello World!, instead got: Hello World!   \n");
        done();
      });
    });
    it('should have a working assertNotEquals for default integers, both with and without a custom failure message', function (done) {
      child_process.exec('gfortran -c frameworks/fortran/cw-2.f95; gfortran examples/testIntegration/snippets/int32NotEquals.f95 cw-2.o; ./a.out', function (error, stdout, stderr) {
        expect(stdout).to.equal("<PASSED::>Test Passed - Value /= 2147483647\n<FAILED::>Expected result to not equal: 2147483647\n<PASSED::>Test Passed - Value /= 2147483647\n<FAILED::>You should return anything but this number - Expected result to not equal: 2147483647\n");
        done();
      });
    });
    it('should have a working assertNotEquals for 64-bit integers, both with and without a custom failure message', function (done) {
      child_process.exec('gfortran -c frameworks/fortran/cw-2.f95; gfortran examples/testIntegration/snippets/int64NotEquals.f95 cw-2.o; ./a.out', function (error, stdout, stderr) {
        expect(stdout).to.equal("<PASSED::>Test Passed - Value /= 9223372036854775807\n<FAILED::>Expected result to not equal: 9223372036854775807\n<PASSED::>Test Passed - Value /= 9223372036854775807\n<FAILED::>Return something else - Expected result to not equal: 9223372036854775807\n");
        done();
      });
    });
    it('should have a working assertNotEquals for 128-bit integers, both with and without a custom failure message', function (done) {
      child_process.exec('gfortran -c frameworks/fortran/cw-2.f95; gfortran examples/testIntegration/snippets/int128NotEquals.f95 cw-2.o; ./a.out', function (error, stdout, stderr) {
        expect(stdout).to.equal("<PASSED::>Test Passed - Value /= 170141183460469231731687303715884105727\n<FAILED::>Expected result to not equal: 170141183460469231731687303715884105727\n<PASSED::>Test Passed - Value /= 170141183460469231731687303715884105727\n<FAILED::>Nooo ... not this number ... - Expected result to not equal: 170141183460469231731687303715884105727\n");
        done();
      });
    });
    it('should have a working assertNotEquals for default logical values, both with and without a custom failure message', function (done) {
      child_process.exec('gfortran -c frameworks/fortran/cw-2.f95; gfortran examples/testIntegration/snippets/boolNotEquals.f95 cw-2.o; ./a.out', function (error, stdout, stderr) {
        expect(stdout).to.equal("<PASSED::>Test Passed - Value /= T\n<PASSED::>Test Passed - Value /= F\n<FAILED::>Expected result to not equal: T\n<FAILED::>Expected result to not equal: F\n<PASSED::>Test Passed - Value /= T\n<PASSED::>Test Passed - Value /= F\n<FAILED::>Wrong logical value - Expected result to not equal: T\n<FAILED::>Wrong logical value - Expected result to not equal: F\n");
        done();
      });
    });
    it('should have a working assertNotEquals for default character strings, both with and without a custom failure message', function (done) {
      child_process.exec('gfortran -c frameworks/fortran/cw-2.f95; gfortran examples/testIntegration/snippets/strNotEquals.f95 cw-2.o; ./a.out', function (error, stdout, stderr) {
        expect(stdout).to.equal("<FAILED::>Expected result to not equal: Hello World!\n<PASSED::>Test Passed - Value /= Hello World!\n<PASSED::>Test Passed - Value /= Hello World!\n<PASSED::>Test Passed - Value /= Hello World!\n<FAILED::>Not this character string! - Expected result to not equal: Hello World!\n<PASSED::>Test Passed - Value /= Hello World!\n<PASSED::>Test Passed - Value /= Hello World!\n<PASSED::>Test Passed - Value /= Hello World!\n");
        done();
      });
    });
    it('should have a working assertWithinTolerance for default real values, both with and without a custom failure message', function (done) {
      child_process.exec('gfortran -c frameworks/fortran/cw-2.f95; gfortran examples/testIntegration/snippets/floatAssert.f95 cw-2.o; ./a.out', function (error, stdout, stderr) {
        expect(stdout).to.equal("<PASSED::>Test Passed - Value == 379.399994 within range 0.001000\n<PASSED::>Test Passed - Value == 379.399994 within range 0.001000\n<FAILED::>Failed asserting that -379.399994 matches expected value 379.399994 within range 0.001000\n<FAILED::>Failed asserting that 380.100006 matches expected value 379.399994 within range 0.001000\n<PASSED::>Test Passed - Value == 379.399994 within range 0.001000\n<PASSED::>Test Passed - Value == 379.399994 within range 0.001000\n<FAILED::>Wrong float - Failed asserting that -379.399994 matches expected value 379.399994 within range 0.001000\n<FAILED::>Wrong float - Failed asserting that 380.100006 matches expected value 379.399994 within range 0.001000\n<PASSED::>Test Passed - Value == 0.000000 within range 0.100000\n<PASSED::>Test Passed - Value == 0.000000 within range 0.100000\n<FAILED::>Failed asserting that 0.150000 matches expected value 0.000000 within range 0.100000\n<FAILED::>Wrong float - try again - Failed asserting that 0.150000 matches expected value 0.000000 within range 0.100000\n");
        done();
      });
    });
    it('should have a working assertWithinTolerance for double-precision real values, both with and without a custom failure message', function (done) {
      child_process.exec('gfortran -c frameworks/fortran/cw-2.f95; gfortran examples/testIntegration/snippets/doubleAssert.f95 cw-2.o; ./a.out', function (error, stdout, stderr) {
        expect(stdout).to.equal("<PASSED::>Test Passed - Value == 379.399999999999977 within range 0.001000000000000\n<PASSED::>Test Passed - Value == 379.399999999999977 within range 0.001000000000000\n<FAILED::>Failed asserting that -379.399999999999977 matches expected value 379.399999999999977 within range 0.001000000000000\n<FAILED::>Failed asserting that 380.100000000000023 matches expected value 379.399999999999977 within range 0.001000000000000\n<PASSED::>Test Passed - Value == 379.399999999999977 within range 0.001000000000000\n<PASSED::>Test Passed - Value == 379.399999999999977 within range 0.001000000000000\n<FAILED::>Wrong double - Failed asserting that -379.399999999999977 matches expected value 379.399999999999977 within range 0.001000000000000\n<FAILED::>Wrong double - Failed asserting that 380.100000000000023 matches expected value 379.399999999999977 within range 0.001000000000000\n<PASSED::>Test Passed - Value == 0.000000000000000 within range 0.100000000000000\n<PASSED::>Test Passed - Value == 0.000000000000000 within range 0.100000000000000\n<FAILED::>Failed asserting that 0.150000000000000 matches expected value 0.000000000000000 within range 0.100000000000000\n<FAILED::>Wrong double - try again - Failed asserting that 0.150000000000000 matches expected value 0.000000000000000 within range 0.100000000000000\n");
        done();
      });
    });
    it('should have a working assertWithinTolerance for default complex values, both with and without a custom failure message', function (done) {
      child_process.exec('gfortran -c frameworks/fortran/cw-2.f95; gfortran examples/testIntegration/snippets/complexAssert.f95 cw-2.o; ./a.out', function (error, stdout, stderr) {
        expect(stdout).to.equal("<PASSED::>Test Passed - Value == (3.000000, -4.000000) within range 0.001000\n<PASSED::>Test Passed - Value == (3.000000, -4.000000) within range 0.001000\n<FAILED::>Failed asserting that (3.010000, -3.990000) matches expected value (3.000000, -4.000000) within range 0.001000\n<PASSED::>Test Passed - Value == (3.000000, -4.000000) within range 0.001000\n<PASSED::>Test Passed - Value == (3.000000, -4.000000) within range 0.001000\n<FAILED::>Wrong complex number, try again - Failed asserting that (3.010000, -3.990000) matches expected value (3.000000, -4.000000) within range 0.001000\n");
        done();
      });
    });
    it('should have a working assertNotWithinTolerance for default real values, both with and without a custom failure message', function (done) {
      child_process.exec('gfortran -c frameworks/fortran/cw-2.f95; gfortran examples/testIntegration/snippets/floatInvAssert.f95 cw-2.o; ./a.out', function (error, stdout, stderr) {
        expect(stdout).to.equal("<FAILED::>Result should not be equivalent to 379.399994 within range 0.001000\n<FAILED::>Result should not be equivalent to 379.399994 within range 0.001000\n<PASSED::>Test Passed - Value /= 379.399994 (rejected range: 0.001000)\n<PASSED::>Test Passed - Value /= 379.399994 (rejected range: 0.001000)\n<FAILED::>Wrong float - Result should not be equivalent to 379.399994 within range 0.001000\n<FAILED::>Wrong float - Result should not be equivalent to 379.399994 within range 0.001000\n<PASSED::>Test Passed - Value /= 379.399994 (rejected range: 0.001000)\n<PASSED::>Test Passed - Value /= 379.399994 (rejected range: 0.001000)\n<FAILED::>Result should not be equivalent to 0.000000 within range 0.100000\n<FAILED::>Wrong float - try again - Result should not be equivalent to 0.000000 within range 0.100000\n<PASSED::>Test Passed - Value /= 0.000000 (rejected range: 0.100000)\n<PASSED::>Test Passed - Value /= 0.000000 (rejected range: 0.100000)\n");
        done();
      });
    });
    it('should have a working assertNotWithinTolerance for double-precision real values, both with and without a custom failure message', function (done) {
      child_process.exec('gfortran -c frameworks/fortran/cw-2.f95; gfortran examples/testIntegration/snippets/doubleInvAssert.f95 cw-2.o; ./a.out', function (error, stdout, stderr) {
        expect(stdout).to.equal("<FAILED::>Result should not be equivalent to 379.399999999999977 within range 0.001000000000000\n<FAILED::>Result should not be equivalent to 379.399999999999977 within range 0.001000000000000\n<PASSED::>Test Passed - Value /= 379.399999999999977 (rejected range: 0.001000000000000)\n<PASSED::>Test Passed - Value /= 379.399999999999977 (rejected range: 0.001000000000000)\n<FAILED::>Wrong double - Result should not be equivalent to 379.399999999999977 within range 0.001000000000000\n<FAILED::>Wrong double - Result should not be equivalent to 379.399999999999977 within range 0.001000000000000\n<PASSED::>Test Passed - Value /= 379.399999999999977 (rejected range: 0.001000000000000)\n<PASSED::>Test Passed - Value /= 379.399999999999977 (rejected range: 0.001000000000000)\n<FAILED::>Result should not be equivalent to 0.000000000000000 within range 0.100000000000000\n<FAILED::>Wrong double - try again - Result should not be equivalent to 0.000000000000000 within range 0.100000000000000\n<PASSED::>Test Passed - Value /= 0.000000000000000 (rejected range: 0.100000000000000)\n<PASSED::>Test Passed - Value /= 0.000000000000000 (rejected range: 0.100000000000000)\n");
        done();
      });
    });
    it('should have a working assertNotWithinTolerance for default complex values, both with and without a custom failure message', function (done) {
      child_process.exec('gfortran -c frameworks/fortran/cw-2.f95; gfortran examples/testIntegration/snippets/complexInvAssert.f95 cw-2.o; ./a.out', function (error, stdout, stderr) {
        expect(stdout).to.equal("<FAILED::>Result should not be equivalent to (3.000000, -4.000000) within range 0.001000\n<FAILED::>Result should not be equivalent to (3.000000, -4.000000) within range 0.001000\n<PASSED::>Test Passed - Value /= (3.000000, -4.000000) (rejected range: 0.001000)\n<FAILED::>Wrong complex number, try again - Result should not be equivalent to (3.000000, -4.000000) within range 0.001000\n<FAILED::>Wrong complex number, try again - Result should not be equivalent to (3.000000, -4.000000) within range 0.001000\n<PASSED::>Test Passed - Value /= (3.000000, -4.000000) (rejected range: 0.001000)\n");
        done();
      });
    });
  });
});
