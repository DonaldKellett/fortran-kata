program TestCases
  use CW2
  implicit none
  call assertWithinTolerance(379.4, 379.399995, 0.001)
  call assertWithinTolerance(379.4, 379.400005, 0.001)
  call assertWithinTolerance(379.4, -379.4, 0.001)
  call assertWithinTolerance(379.4, 380.1, 0.001)
  call assertWithinTolerance(379.4, 379.399995, 0.001, "Wrong float")
  call assertWithinTolerance(379.4, 379.400005, 0.001, "Wrong float")
  call assertWithinTolerance(379.4, -379.4, 0.001, "Wrong float")
  call assertWithinTolerance(379.4, 380.1, 0.001, "Wrong float")
  call assertWithinTolerance(0.0, 0.0, 0.1)
  call assertWithinTolerance(0.0, 0.0, 0.1, "Wrong float - try again")
  call assertWithinTolerance(0.0, 0.15, 0.1)
  call assertWithinTolerance(0.0, 0.15, 0.1, "Wrong float - try again")
end program TestCases
