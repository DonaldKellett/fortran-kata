program TestCases
  use CW2
  implicit none
  call assertEquals("Hello World!", "Hello World!")
  call assertEquals("Hello World!", "Goodbye World!")
  call assertEquals("Hello World!", "Hello       ")
  call assertEquals("Hello World!", "Hello World!   ")
  call assertEquals("Hello World!", "Hello World!", "Check your returned string ;)")
  call assertEquals("Hello World!", "Goodbye World!", "Check your returned string ;)")
  call assertEquals("Hello World!", "Hello       ", "Check your returned string ;)")
  call assertEquals("Hello World!", "Hello World!   ", "Check your returned string ;)")
end program TestCases
