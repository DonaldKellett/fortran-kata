program TestCases
  use CW2
  implicit none
  call assertNotEquals(2147483647, 32767)
  call assertNotEquals(2147483647, 2147483647)
  call assertNotEquals(2147483647, 32767, "You should return anything but this number")
  call assertNotEquals(2147483647, 2147483647, "You should return anything but this number")
end program TestCases
