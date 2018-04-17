program TestCases
  ! Codewars/codewars-runner-cli#590
  ! https://github.com/Codewars/codewars-runner-cli/issues/590
  use CW2
  implicit none
  call assertEquals("", "")
  call assertEquals("expected string", "")
  call assertEquals("", "actual string")
  call assertEquals("", "", "Returned string should be empty")
  call assertEquals("expected string", "", "Returned string should equal expected string")
  call assertEquals("", "actual string", "Returned string should be empty")
  call assertNotEquals("", "")
  call assertNotEquals("unexpected string", "")
  call assertNotEquals("", "actual string")
  call assertNotEquals("", "", "Returned string should NOT be empty")
  call assertNotEquals("unexpected string", "", "Returned string should NOT be unexpected string")
  call assertNotEquals("", "actual string", "Returned string should NOT be empty")
end program TestCases
