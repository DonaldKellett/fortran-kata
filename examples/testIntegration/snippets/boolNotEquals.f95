program TestCases
  use CW2
  implicit none
  call assertNotEquals(.true., .false.)
  call assertNotEquals(.false., .true.)
  call assertNotEquals(.true., .true.)
  call assertNotEquals(.false., .false.)
  call assertNotEquals(.true., .false., "Wrong logical value")
  call assertNotEquals(.false., .true., "Wrong logical value")
  call assertNotEquals(.true., .true., "Wrong logical value")
  call assertNotEquals(.false., .false., "Wrong logical value")
end program TestCases
