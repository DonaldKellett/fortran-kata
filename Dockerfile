# Pull the Codewars base image
FROM codewars/base-runner

# Install the `gfortran` GNU Fortran compiler
RUN apt-get update && apt-get install -y --no-install-recommends gfortran

# Install Nodejs and related components
RUN npm install --production
RUN npm install chai

# Copy files into Docker image
COPY examples/solutionOnly/*.f95 examples/solutionOnly/
COPY test/runners/fortran_spec.js test/runners/
COPY frameworks/fortran/cw-2.f95 frameworks/fortran/
COPY examples/testIntegration/snippets/*.f95 examples/testIntegration/snippets/
COPY examples/testIntegration/bug_fixes/*.f95 examples/testIntegration/bug_fixes/

# Run spec tests
RUN mocha test/runners/fortran_spec.js
