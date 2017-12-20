program TestCases
  use CW2
  implicit none
  call assertEquals(2147483647, 2147483647)
  call assertEquals(2147483647, 32767)
  call assertEquals(2147483647, 2147483647, &
  'Try again - what is the largest possible value of a signed 32-bit integer?')
  call assertEquals(2147483647, 32767, &
  'Try again - what is the largest possible value of a signed 32-bit integer?')
end program TestCases
