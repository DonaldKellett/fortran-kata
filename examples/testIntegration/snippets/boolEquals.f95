program TestCases
  use CW2
  implicit none
  call assertEquals(.true., .true.)
  call assertEquals(.true., .false.)
  call assertEquals(.false., .true.)
  call assertEquals(.false., .false.)
  call assertEquals(.true., .true., "Incorrect logical value returned")
  call assertEquals(.true., .false., "Incorrect logical value returned")
  call assertEquals(.false., .true., "Incorrect logical value returned")
  call assertEquals(.false., .false., "Incorrect logical value returned")
end program TestCases
