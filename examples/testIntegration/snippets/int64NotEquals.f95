program TestCases
  use CW2
  implicit none
  call assertNotEquals(9223372036854775807_8, 2147483647_8)
  call assertNotEquals(9223372036854775807_8, 9223372036854775807_8)
  call assertNotEquals(9223372036854775807_8, 2147483647_8, "Return something else")
  call assertNotEquals(9223372036854775807_8, 9223372036854775807_8, "Return something else")
end program TestCases
