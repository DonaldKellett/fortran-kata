program TestCases
  use CW2
  implicit none
  call assertNotWithinTolerance(379.4_8, 379.399995_8, 0.001_8)
  call assertNotWithinTolerance(379.4_8, 379.400005_8, 0.001_8)
  call assertNotWithinTolerance(379.4_8, -379.4_8, 0.001_8)
  call assertNotWithinTolerance(379.4_8, 380.1_8, 0.001_8)
  call assertNotWithinTolerance(379.4_8, 379.399995_8, 0.001_8, "Wrong double")
  call assertNotWithinTolerance(379.4_8, 379.400005_8, 0.001_8, "Wrong double")
  call assertNotWithinTolerance(379.4_8, -379.4_8, 0.001_8, "Wrong double")
  call assertNotWithinTolerance(379.4_8, 380.1_8, 0.001_8, "Wrong double")
  call assertNotWithinTolerance(0.0_8, 0.0_8, 0.1_8)
  call assertNotWithinTolerance(0.0_8, 0.0_8, 0.1_8, "Wrong double - try again")
  call assertNotWithinTolerance(0.0_8, 0.15_8, 0.1_8)
  call assertNotWithinTolerance(0.0_8, 0.15_8, 0.1_8, "Wrong double - try again")
end program TestCases
