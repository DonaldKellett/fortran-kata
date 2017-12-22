program Kata
  implicit none
  integer, dimension(5) :: a = (/1, 2, 4, 8, 11/)
  print "(I0)", a(1)
  print "(I0)", a(4)
  print "(I0)", a(0) ! Fortran arrays are 1-indexed by default so a zero index is out of bounds
end program Kata
