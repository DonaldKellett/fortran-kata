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
  });
});
