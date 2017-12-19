'use strict';

const expect = require('chai').expect,
  child_process = require('child_process');

describe('GNU Fortran', function () {
  describe('Basic Run', function () {
    it('should handle basic code evaluation', function (done) {
      child_process.exec('gfortran examples/solutionOnly/helloWorld.f95; ./a.out', function (error, stdout, stderr) {
        expect(stdout).to.equal(" Hello World!\n");
        done();
      });
    });
    it('should support free-form programs and allow for line continuation', function (done) {
      child_process.exec('gfortran examples/solutionOnly/freeForm.f95; ./a.out', function (error, stdout, stderr) {
        expect(stdout).to.equal(" Free-form\n");
        done();
      });
    });
  });
  describe('Test Integration (CW-2)', function () {
    // TODO
  });
});
