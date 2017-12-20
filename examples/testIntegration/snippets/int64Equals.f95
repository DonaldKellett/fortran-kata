program TestCases
  use CW2
  implicit none
  call assertEquals(9223372036854775807_8, 9223372036854775807_8)
  call assertEquals(9223372036854775807_8, 2147483647_8)
  call assertEquals(9223372036854775807_8, 9223372036854775807_8, &
  "Incorrect, try again ;)")
  call assertEquals(9223372036854775807_8, 2147483647_8, &
  "Incorrect, try again ;)")
end program TestCases
