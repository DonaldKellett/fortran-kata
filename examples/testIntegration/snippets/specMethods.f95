program TestCases
  use CW2
  implicit none
  call describe("The `describe` context of the CW-2 testing framework")
    call it("should work properly for the first time")
      print "(A11)", "Hello World"
    call endContext()
    call it("should work properly again after `it` is called a second time")
      print "(A20)", "Testing testing ... "
    call endContext()
  call endContext()
  call describe("`describe` should work on its own")
    print "(A7)", "All OK!"
  call endContext()
end program TestCases
