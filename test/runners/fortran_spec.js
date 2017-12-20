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
  });
});
