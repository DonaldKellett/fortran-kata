program TestCases
  use CW2
  implicit none
  call assertNotEquals("Hello World!", "Hello World!")
  call assertNotEquals("Hello World!", "Goodbye World!")
  call assertNotEquals("Hello World!", "Hello       ")
  call assertNotEquals("Hello World!", "Hello World!   ")
  call assertNotEquals("Hello World!", "Hello World!", "Not this character string!")
  call assertNotEquals("Hello World!", "Goodbye World!", "Not this character string!")
  call assertNotEquals("Hello World!", "Hello       ", "Not this character string!")
  call assertNotEquals("Hello World!", "Hello World!   ", "Not this character string!")
end program TestCases
