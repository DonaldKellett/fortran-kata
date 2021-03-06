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
    it('should correctly handle compile time errors', function (done) {
      child_process.exec('gfortran examples/solutionOnly/compileTimeError.f95; ./a.out', function (error, stdout, stderr) {
        expect(stderr).to.contain("Error: Entity with assumed character length at (1) must be a dummy argument or a PARAMETER");
        done();
      });
    });
    it('should correctly handle runtime errors', function (done) {
      child_process.exec('gfortran examples/solutionOnly/runtimeError.f95; ./a.out', function (error, stdout, stderr) {
        expect(stdout).to.not.equal("Free-form\n");
        expect(stdout).to.contain("1\n8\n");
        expect(stderr).to.contain("Warning: Array reference at (1) is out of bounds (0 < 1) in dimension 1");
        done();
      });
    });
  });
  describe('Test Integration (CW-2)', function () {
    it('should have working spec methods', function (done) {
      child_process.exec('gfortran -c frameworks/fortran/cw-2.f95; gfortran examples/testIntegration/snippets/specMethods.f95 cw-2.o; ./a.out', function (error, stdout, stderr) {
        expect(stdout).to.equal("\n<DESCRIBE::>The `describe` context of the CW-2 testing framework\n\n<IT::>should work properly for the first time\nHello World\n\n<COMPLETEDIN::>\n\n<IT::>should work properly again after `it` is called a second time\nTesting testing ... \n\n<COMPLETEDIN::>\n\n<COMPLETEDIN::>\n\n<DESCRIBE::>`describe` should work on its own\nAll OK!\n\n<COMPLETEDIN::>\n");
        done();
      });
    });
    it('should have a working assertEquals for signed 32-bit integers, both with and without a custom failure message', function (done) {
      child_process.exec('gfortran -c frameworks/fortran/cw-2.f95; gfortran examples/testIntegration/snippets/int32Equals.f95 cw-2.o; ./a.out', function (error, stdout, stderr) {
        expect(stdout).to.equal("\n<PASSED::>Test Passed - Value == 2147483647\n\n<FAILED::>Expected: 2147483647, instead got: 32767\n\n<PASSED::>Test Passed - Value == 2147483647\n\n<FAILED::>Try again - what is the largest possible value of a signed 32-bit integer? - Expected: 2147483647, instead got: 32767\n");
        done();
      });
    });
    it('should have a working assertEquals for signed 64-bit integers, both with and without a custom failure message', function (done) {
      child_process.exec('gfortran -c frameworks/fortran/cw-2.f95; gfortran examples/testIntegration/snippets/int64Equals.f95 cw-2.o; ./a.out', function (error, stdout, stderr) {
        expect(stdout).to.equal("\n<PASSED::>Test Passed - Value == 9223372036854775807\n\n<FAILED::>Expected: 9223372036854775807, instead got: 2147483647\n\n<PASSED::>Test Passed - Value == 9223372036854775807\n\n<FAILED::>Incorrect, try again ;) - Expected: 9223372036854775807, instead got: 2147483647\n");
        done();
      });
    });
    it('should have a working assertEquals for signed 128-bit integers, both with and without a custom failure message', function (done) {
      child_process.exec('gfortran -c frameworks/fortran/cw-2.f95; gfortran examples/testIntegration/snippets/int128Equals.f95 cw-2.o; ./a.out', function (error, stdout, stderr) {
        expect(stdout).to.equal("\n<PASSED::>Test Passed - Value == 170141183460469231731687303715884105727\n\n<FAILED::>Expected: 170141183460469231731687303715884105727, instead got: 9223372036854775807\n\n<PASSED::>Test Passed - Value == 170141183460469231731687303715884105727\n\n<FAILED::>Incorrect result - Expected: 170141183460469231731687303715884105727, instead got: 9223372036854775807\n");
        done();
      });
    });
    it('should have a working assertEquals for default logical values, both with and without a custom failure message', function (done) {
      child_process.exec('gfortran -c frameworks/fortran/cw-2.f95; gfortran examples/testIntegration/snippets/boolEquals.f95 cw-2.o; ./a.out', function (error, stdout, stderr) {
        expect(stdout).to.equal("\n<PASSED::>Test Passed - Value == T\n\n<FAILED::>Expected: T, instead got: F\n\n<FAILED::>Expected: F, instead got: T\n\n<PASSED::>Test Passed - Value == F\n\n<PASSED::>Test Passed - Value == T\n\n<FAILED::>Incorrect logical value returned - Expected: T, instead got: F\n\n<FAILED::>Incorrect logical value returned - Expected: F, instead got: T\n\n<PASSED::>Test Passed - Value == F\n");
        done();
      });
    });
    it('should have a working assertEquals for default character strings, both with and without a custom failure message', function (done) {
      child_process.exec('gfortran -c frameworks/fortran/cw-2.f95; gfortran examples/testIntegration/snippets/strEquals.f95 cw-2.o; ./a.out', function (error, stdout, stderr) {
        expect(stdout).to.equal("\n<PASSED::>Test Passed - Value == Hello World!\n\n<FAILED::>Expected: Hello World!, instead got: Goodbye World!\n\n<FAILED::>Expected: Hello World!, instead got: Hello       \n\n<FAILED::>Expected: Hello World!, instead got: Hello World!   \n\n<PASSED::>Test Passed - Value == Hello World!\n\n<FAILED::>Check your returned string ;) - Expected: Hello World!, instead got: Goodbye World!\n\n<FAILED::>Check your returned string ;) - Expected: Hello World!, instead got: Hello       \n\n<FAILED::>Check your returned string ;) - Expected: Hello World!, instead got: Hello World!   \n");
        done();
      });
    });
    it('should have a working assertNotEquals for default integers, both with and without a custom failure message', function (done) {
      child_process.exec('gfortran -c frameworks/fortran/cw-2.f95; gfortran examples/testIntegration/snippets/int32NotEquals.f95 cw-2.o; ./a.out', function (error, stdout, stderr) {
        expect(stdout).to.equal("\n<PASSED::>Test Passed - Value /= 2147483647\n\n<FAILED::>Expected result to not equal: 2147483647\n\n<PASSED::>Test Passed - Value /= 2147483647\n\n<FAILED::>You should return anything but this number - Expected result to not equal: 2147483647\n");
        done();
      });
    });
    it('should have a working assertNotEquals for 64-bit integers, both with and without a custom failure message', function (done) {
      child_process.exec('gfortran -c frameworks/fortran/cw-2.f95; gfortran examples/testIntegration/snippets/int64NotEquals.f95 cw-2.o; ./a.out', function (error, stdout, stderr) {
        expect(stdout).to.equal("\n<PASSED::>Test Passed - Value /= 9223372036854775807\n\n<FAILED::>Expected result to not equal: 9223372036854775807\n\n<PASSED::>Test Passed - Value /= 9223372036854775807\n\n<FAILED::>Return something else - Expected result to not equal: 9223372036854775807\n");
        done();
      });
    });
    it('should have a working assertNotEquals for 128-bit integers, both with and without a custom failure message', function (done) {
      child_process.exec('gfortran -c frameworks/fortran/cw-2.f95; gfortran examples/testIntegration/snippets/int128NotEquals.f95 cw-2.o; ./a.out', function (error, stdout, stderr) {
        expect(stdout).to.equal("\n<PASSED::>Test Passed - Value /= 170141183460469231731687303715884105727\n\n<FAILED::>Expected result to not equal: 170141183460469231731687303715884105727\n\n<PASSED::>Test Passed - Value /= 170141183460469231731687303715884105727\n\n<FAILED::>Nooo ... not this number ... - Expected result to not equal: 170141183460469231731687303715884105727\n");
        done();
      });
    });
    it('should have a working assertNotEquals for default logical values, both with and without a custom failure message', function (done) {
      child_process.exec('gfortran -c frameworks/fortran/cw-2.f95; gfortran examples/testIntegration/snippets/boolNotEquals.f95 cw-2.o; ./a.out', function (error, stdout, stderr) {
        expect(stdout).to.equal("\n<PASSED::>Test Passed - Value /= T\n\n<PASSED::>Test Passed - Value /= F\n\n<FAILED::>Expected result to not equal: T\n\n<FAILED::>Expected result to not equal: F\n\n<PASSED::>Test Passed - Value /= T\n\n<PASSED::>Test Passed - Value /= F\n\n<FAILED::>Wrong logical value - Expected result to not equal: T\n\n<FAILED::>Wrong logical value - Expected result to not equal: F\n");
        done();
      });
    });
    it('should have a working assertNotEquals for default character strings, both with and without a custom failure message', function (done) {
      child_process.exec('gfortran -c frameworks/fortran/cw-2.f95; gfortran examples/testIntegration/snippets/strNotEquals.f95 cw-2.o; ./a.out', function (error, stdout, stderr) {
        expect(stdout).to.equal("\n<FAILED::>Expected result to not equal: Hello World!\n\n<PASSED::>Test Passed - Value /= Hello World!\n\n<PASSED::>Test Passed - Value /= Hello World!\n\n<PASSED::>Test Passed - Value /= Hello World!\n\n<FAILED::>Not this character string! - Expected result to not equal: Hello World!\n\n<PASSED::>Test Passed - Value /= Hello World!\n\n<PASSED::>Test Passed - Value /= Hello World!\n\n<PASSED::>Test Passed - Value /= Hello World!\n");
        done();
      });
    });
    it('should have a working assertWithinTolerance for default real values, both with and without a custom failure message', function (done) {
      child_process.exec('gfortran -c frameworks/fortran/cw-2.f95; gfortran examples/testIntegration/snippets/floatAssert.f95 cw-2.o; ./a.out', function (error, stdout, stderr) {
        expect(stdout).to.equal("\n<PASSED::>Test Passed - Value == 379.399994 within range 0.001000\n\n<PASSED::>Test Passed - Value == 379.399994 within range 0.001000\n\n<FAILED::>Failed asserting that -379.399994 matches expected value 379.399994 within range 0.001000\n\n<FAILED::>Failed asserting that 380.100006 matches expected value 379.399994 within range 0.001000\n\n<PASSED::>Test Passed - Value == 379.399994 within range 0.001000\n\n<PASSED::>Test Passed - Value == 379.399994 within range 0.001000\n\n<FAILED::>Wrong float - Failed asserting that -379.399994 matches expected value 379.399994 within range 0.001000\n\n<FAILED::>Wrong float - Failed asserting that 380.100006 matches expected value 379.399994 within range 0.001000\n\n<PASSED::>Test Passed - Value == 0.000000 within range 0.100000\n\n<PASSED::>Test Passed - Value == 0.000000 within range 0.100000\n\n<FAILED::>Failed asserting that 0.150000 matches expected value 0.000000 within range 0.100000\n\n<FAILED::>Wrong float - try again - Failed asserting that 0.150000 matches expected value 0.000000 within range 0.100000\n");
        done();
      });
    });
    it('should have a working assertWithinTolerance for double-precision real values, both with and without a custom failure message', function (done) {
      child_process.exec('gfortran -c frameworks/fortran/cw-2.f95; gfortran examples/testIntegration/snippets/doubleAssert.f95 cw-2.o; ./a.out', function (error, stdout, stderr) {
        expect(stdout).to.equal("\n<PASSED::>Test Passed - Value == 379.399999999999977 within range 0.001000000000000\n\n<PASSED::>Test Passed - Value == 379.399999999999977 within range 0.001000000000000\n\n<FAILED::>Failed asserting that -379.399999999999977 matches expected value 379.399999999999977 within range 0.001000000000000\n\n<FAILED::>Failed asserting that 380.100000000000023 matches expected value 379.399999999999977 within range 0.001000000000000\n\n<PASSED::>Test Passed - Value == 379.399999999999977 within range 0.001000000000000\n\n<PASSED::>Test Passed - Value == 379.399999999999977 within range 0.001000000000000\n\n<FAILED::>Wrong double - Failed asserting that -379.399999999999977 matches expected value 379.399999999999977 within range 0.001000000000000\n\n<FAILED::>Wrong double - Failed asserting that 380.100000000000023 matches expected value 379.399999999999977 within range 0.001000000000000\n\n<PASSED::>Test Passed - Value == 0.000000000000000 within range 0.100000000000000\n\n<PASSED::>Test Passed - Value == 0.000000000000000 within range 0.100000000000000\n\n<FAILED::>Failed asserting that 0.150000000000000 matches expected value 0.000000000000000 within range 0.100000000000000\n\n<FAILED::>Wrong double - try again - Failed asserting that 0.150000000000000 matches expected value 0.000000000000000 within range 0.100000000000000\n");
        done();
      });
    });
    it('should have a working assertWithinTolerance for default complex values, both with and without a custom failure message', function (done) {
      child_process.exec('gfortran -c frameworks/fortran/cw-2.f95; gfortran examples/testIntegration/snippets/complexAssert.f95 cw-2.o; ./a.out', function (error, stdout, stderr) {
        expect(stdout).to.equal("\n<PASSED::>Test Passed - Value == (3.000000, -4.000000) within range 0.001000\n\n<PASSED::>Test Passed - Value == (3.000000, -4.000000) within range 0.001000\n\n<FAILED::>Failed asserting that (3.010000, -3.990000) matches expected value (3.000000, -4.000000) within range 0.001000\n\n<PASSED::>Test Passed - Value == (3.000000, -4.000000) within range 0.001000\n\n<PASSED::>Test Passed - Value == (3.000000, -4.000000) within range 0.001000\n\n<FAILED::>Wrong complex number, try again - Failed asserting that (3.010000, -3.990000) matches expected value (3.000000, -4.000000) within range 0.001000\n");
        done();
      });
    });
    it('should have a working assertNotWithinTolerance for default real values, both with and without a custom failure message', function (done) {
      child_process.exec('gfortran -c frameworks/fortran/cw-2.f95; gfortran examples/testIntegration/snippets/floatInvAssert.f95 cw-2.o; ./a.out', function (error, stdout, stderr) {
        expect(stdout).to.equal("\n<FAILED::>Result should not be equivalent to 379.399994 within range 0.001000\n\n<FAILED::>Result should not be equivalent to 379.399994 within range 0.001000\n\n<PASSED::>Test Passed - Value /= 379.399994 (rejected range: 0.001000)\n\n<PASSED::>Test Passed - Value /= 379.399994 (rejected range: 0.001000)\n\n<FAILED::>Wrong float - Result should not be equivalent to 379.399994 within range 0.001000\n\n<FAILED::>Wrong float - Result should not be equivalent to 379.399994 within range 0.001000\n\n<PASSED::>Test Passed - Value /= 379.399994 (rejected range: 0.001000)\n\n<PASSED::>Test Passed - Value /= 379.399994 (rejected range: 0.001000)\n\n<FAILED::>Result should not be equivalent to 0.000000 within range 0.100000\n\n<FAILED::>Wrong float - try again - Result should not be equivalent to 0.000000 within range 0.100000\n\n<PASSED::>Test Passed - Value /= 0.000000 (rejected range: 0.100000)\n\n<PASSED::>Test Passed - Value /= 0.000000 (rejected range: 0.100000)\n");
        done();
      });
    });
    it('should have a working assertNotWithinTolerance for double-precision real values, both with and without a custom failure message', function (done) {
      child_process.exec('gfortran -c frameworks/fortran/cw-2.f95; gfortran examples/testIntegration/snippets/doubleInvAssert.f95 cw-2.o; ./a.out', function (error, stdout, stderr) {
        expect(stdout).to.equal("\n<FAILED::>Result should not be equivalent to 379.399999999999977 within range 0.001000000000000\n\n<FAILED::>Result should not be equivalent to 379.399999999999977 within range 0.001000000000000\n\n<PASSED::>Test Passed - Value /= 379.399999999999977 (rejected range: 0.001000000000000)\n\n<PASSED::>Test Passed - Value /= 379.399999999999977 (rejected range: 0.001000000000000)\n\n<FAILED::>Wrong double - Result should not be equivalent to 379.399999999999977 within range 0.001000000000000\n\n<FAILED::>Wrong double - Result should not be equivalent to 379.399999999999977 within range 0.001000000000000\n\n<PASSED::>Test Passed - Value /= 379.399999999999977 (rejected range: 0.001000000000000)\n\n<PASSED::>Test Passed - Value /= 379.399999999999977 (rejected range: 0.001000000000000)\n\n<FAILED::>Result should not be equivalent to 0.000000000000000 within range 0.100000000000000\n\n<FAILED::>Wrong double - try again - Result should not be equivalent to 0.000000000000000 within range 0.100000000000000\n\n<PASSED::>Test Passed - Value /= 0.000000000000000 (rejected range: 0.100000000000000)\n\n<PASSED::>Test Passed - Value /= 0.000000000000000 (rejected range: 0.100000000000000)\n");
        done();
      });
    });
    it('should have a working assertNotWithinTolerance for default complex values, both with and without a custom failure message', function (done) {
      child_process.exec('gfortran -c frameworks/fortran/cw-2.f95; gfortran examples/testIntegration/snippets/complexInvAssert.f95 cw-2.o; ./a.out', function (error, stdout, stderr) {
        expect(stdout).to.equal("\n<FAILED::>Result should not be equivalent to (3.000000, -4.000000) within range 0.001000\n\n<FAILED::>Result should not be equivalent to (3.000000, -4.000000) within range 0.001000\n\n<PASSED::>Test Passed - Value /= (3.000000, -4.000000) (rejected range: 0.001000)\n\n<FAILED::>Wrong complex number, try again - Result should not be equivalent to (3.000000, -4.000000) within range 0.001000\n\n<FAILED::>Wrong complex number, try again - Result should not be equivalent to (3.000000, -4.000000) within range 0.001000\n\n<PASSED::>Test Passed - Value /= (3.000000, -4.000000) (rejected range: 0.001000)\n");
        done();
      });
    });
    describe('Bug Fixes', function () {
      it('assert(Not)Equals subroutine should properly handle empty strings in either the (un)expected or actual argument (or both) and therefore resolve Codewars/codewars-runner-cli#590', function (done) {
        child_process.exec('gfortran -c frameworks/fortran/cw-2.f95; gfortran examples/testIntegration/bug_fixes/issue590.f95 cw-2.o; ./a.out', function (error, stdout, stderr) {
          expect(stderr).to.equal("");
          expect(stdout).to.equal("\n<PASSED::>Test Passed - Value was an empty string\n\n<FAILED::>Expected: expected string, instead got an empty string\n\n<FAILED::>Expected an empty string, instead got: actual string\n\n<PASSED::>Test Passed - Value was an empty string\n\n<FAILED::>Returned string should equal expected string - Expected: expected string, instead got an empty string\n\n<FAILED::>Returned string should be empty - Expected an empty string, instead got: actual string\n" +
          "\n<FAILED::>Expected result to not equal an empty string\n\n<PASSED::>Test Passed - Value /= unexpected string\n\n<PASSED::>Test Passed - Value is not an empty string\n\n<FAILED::>Returned string should NOT be empty - Expected result to not equal an empty string\n\n<PASSED::>Test Passed - Value /= unexpected string\n\n<PASSED::>Test Passed - Value is not an empty string\n");
          done();
        });
      });
    });
  });
});
