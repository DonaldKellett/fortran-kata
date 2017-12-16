# Pull the Codewars base image
FROM codewars/base-runner

# Install the `gfortran` GNU Fortran compiler
RUN apt-get update && apt-get install -y --no-install-recommends gfortran

# Install Nodejs
RUN npm install --production

# Copy files into Docker image
COPY test/runners/fortran_spec.js test/runners/

# Run spec tests
RUN mocha test/runners/fortran_spec.js
