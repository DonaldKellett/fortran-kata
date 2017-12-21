program TestCases
  use CW2
  implicit none
  call assertWithinTolerance(cmplx(3, -4), cmplx(3, -4), 0.001)
  call assertWithinTolerance(cmplx(3, -4), cmplx(2.999992, -4.000007), 0.001)
  call assertWithinTolerance(cmplx(3, -4), cmplx(3.01, -3.99), 0.001)
  call assertWithinTolerance(cmplx(3, -4), cmplx(3, -4), 0.001, &
  "Wrong complex number, try again")
  call assertWithinTolerance(cmplx(3, -4), cmplx(2.999992, -4.000007), 0.001, &
  "Wrong complex number, try again")
  call assertWithinTolerance(cmplx(3, -4), cmplx(3.01, -3.99), 0.001, &
  "Wrong complex number, try again")
end program TestCases
