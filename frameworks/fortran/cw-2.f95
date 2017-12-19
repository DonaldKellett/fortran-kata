module CW2
  implicit none
  interface assertEquals
    module procedure &
      assertInt32Eq, &
      assertInt32EqWithMsg, &
      assertInt64Eq, &
      assertInt64EqWithMsg, &
      assertInt128Eq, &
      assertInt128EqWithMsg, &
      assertBoolEq, &
      assertBoolEqWithMsg, &
      assertStrEq, &
      assertStrEqWithMsg
  end interface assertEquals
  interface assertNotEquals
    module procedure &
      assertInt32NEq, &
      assertInt32NEqWithMsg, &
      assertInt64NEq, &
      assertInt64NEqWithMsg, &
      assertInt128NEq, &
      assertInt128NEqWithMsg, &
      assertBoolNEq, &
      assertBoolNEqWithMsg, &
      assertStrNEq, &
      assertStrNEqWithMsg
  end interface assertNotEquals
  interface assertWithinTolerance
    module procedure &
      floatAssert, &
      floatAssertWithMsg, &
      doubleAssert, &
      doubleAssertWithMsg, &
      complexAssert, &
      complexAssertWithMsg
  end interface assertWithinTolerance
  interface assertNotWithinTolerance
    module procedure &
      floatInvAssert, &
      floatInvAssertWithMsg, &
      doubleInvAssert, &
      doubleInvAssertWithMsg, &
      complexInvAssert, &
      complexInvAssertWithMsg
  end interface assertNotWithinTolerance
  contains
    subroutine describe(msg)
      implicit none
      character(len=*) :: msg
      print *, "<DESCRIBE::>" // msg
    end subroutine describe
    subroutine it(msg)
      implicit none
      character(len=*) :: msg
      print *, "<IT::>" // msg
    end subroutine it
    subroutine endContext()
      implicit none
      print *, "<COMPLETEDIN::>"
    end subroutine endContext
    subroutine assertInt32Eq(expected, actual)
      implicit none
      integer :: expected, actual
      ! TODO
    end subroutine assertInt32Eq
    subroutine assertInt32EqWithMsg(expected, actual, msg)
      implicit none
      integer :: expected, actual
      character(len=*) :: msg
      ! TODO
    end subroutine assertInt32EqWithMsg
    subroutine assertInt64Eq(expected, actual)
      implicit none
      integer(kind=8) :: expected, actual
      ! TODO
    end subroutine assertInt64Eq
    subroutine assertInt64EqWithMsg(expected, actual, msg)
      implicit none
      integer(kind=8) :: expected, actual
      character(len=*) :: msg
      ! TODO
    end subroutine assertInt64EqWithMsg
    subroutine assertInt128Eq(expected, actual)
      implicit none
      integer(kind=16) :: expected, actual
      ! TODO
    end subroutine assertInt128Eq
    subroutine assertInt128EqWithMsg(expected, actual, msg)
      implicit none
      integer(kind=16) :: expected, actual
      character(len=*) :: msg
      ! TODO
    end subroutine assertInt128EqWithMsg
    subroutine assertBoolEq(expected, actual)
      implicit none
      logical :: expected, actual
      ! TODO
    end subroutine assertBoolEq
    subroutine assertBoolEqWithMsg(expected, actual, msg)
      implicit none
      logical :: expected, actual
      character(len=*) :: msg
      ! TODO
    end subroutine assertBoolEqWithMsg
    subroutine assertStrEq(expected, actual)
      implicit none
      character(len=*) :: expected, actual
      ! TODO
    end subroutine assertStrEq
    subroutine assertStrEqWithMsg(expected, actual, msg)
      implicit none
      character(len=*) :: expected, actual, msg
      ! TODO
    end subroutine assertStrEqWithMsg
    subroutine assertInt32NEq(unexpected, actual)
      implicit none
      integer :: unexpected, actual
      ! TODO
    end subroutine assertInt32NEq
    subroutine assertInt32NEqWithMsg(unexpected, actual, msg)
      implicit none
      integer :: unexpected, actual
      character(len=*) :: msg
      ! TODO
    end subroutine assertInt32NEqWithMsg
    subroutine assertInt64NEq(unexpected, actual)
      implicit none
      integer(kind=8) :: unexpected, actual
      ! TODO
    end subroutine assertInt64NEq
    subroutine assertInt64NEqWithMsg(unexpected, actual, msg)
      implicit none
      integer(kind=8) :: unexpected, actual
      character(len=*) :: msg
      ! TODO
    end subroutine assertInt64NEqWithMsg
    subroutine assertInt128NEq(unexpected, actual)
      implicit none
      integer(kind=16) :: unexpected, actual
      ! TODO
    end subroutine assertInt128NEq
    subroutine assertInt128NEqWithMsg(unexpected, actual, msg)
      implicit none
      integer(kind=16) :: unexpected, actual
      character(len=*) :: msg
      ! TODO
    end subroutine assertInt128NEqWithMsg
    subroutine assertBoolNEq(unexpected, actual)
      implicit none
      logical :: unexpected, actual
      ! TODO
    end subroutine assertBoolNEq
    subroutine assertBoolNEqWithMsg(unexpected, actual, msg)
      implicit none
      logical :: unexpected, actual
      character(len=*) :: msg
      ! TODO
    end subroutine assertBoolNEqWithMsg
    subroutine assertStrNEq(unexpected, actual)
      implicit none
      character(len=*) :: unexpected, actual
      ! TODO
    end subroutine assertStrNEq
    subroutine assertStrNEqWithMsg(unexpected, actual, msg)
      implicit none
      character(len=*) :: unexpected, actual, msg
      ! TODO
    end subroutine assertStrNEqWithMsg
    subroutine floatAssert(expected, actual, epsilon)
      implicit none
      real :: expected, actual, epsilon
      ! TODO
    end subroutine floatAssert
    subroutine floatAssertWithMsg(expected, actual, epsilon, msg)
      implicit none
      real :: expected, actual, epsilon
      character(len=*) :: msg
      ! TODO
    end subroutine floatAssertWithMsg
    subroutine doubleAssert(expected, actual, epsilon)
      implicit none
      real(kind=8) :: expected, actual, epsilon
      ! TODO
    end subroutine doubleAssert
    subroutine doubleAssertWithMsg(expected, actual, epsilon, msg)
      implicit none
      real(kind=8) :: expected, actual, epsilon
      character(len=*) :: msg
      ! TODO
    end subroutine doubleAssertWithMsg
    subroutine complexAssert(expected, actual, epsilon)
      implicit none
      complex :: expected, actual
      real :: epsilon
      ! TODO
    end subroutine complexAssert
    subroutine complexAssertWithMsg(expected, actual, epsilon, msg)
      implicit none
      complex :: expected, actual
      real :: epsilon
      character(len=*) :: msg
      ! TODO
    end subroutine complexAssertWithMsg
    subroutine floatInvAssert(unexpected, actual, epsilon)
      implicit none
      real :: unexpected, actual, epsilon
      ! TODO
    end subroutine floatInvAssert
    subroutine floatInvAssertWithMsg(unexpected, actual, epsilon, msg)
      implicit none
      real :: unexpected, actual, epsilon
      character(len=*) :: msg
      ! TODO
    end subroutine floatInvAssertWithMsg
    subroutine doubleInvAssert(unexpected, actual, epsilon)
      implicit none
      real(kind=8) :: unexpected, actual, epsilon
      ! TODO
    end subroutine doubleInvAssert
    subroutine doubleInvAssertWithMsg(unexpected, actual, epsilon, msg)
      implicit none
      real(kind=8) :: unexpected, actual, epsilon
      character(len=*) :: msg
      ! TODO
    end subroutine doubleInvAssertWithMsg
    subroutine complexInvAssert(unexpected, actual, epsilon)
      implicit none
      complex :: unexpected, actual
      real :: epsilon
      ! TODO
    end subroutine complexInvAssert
    subroutine complexInvAssertWithMsg(unexpected, actual, epsilon, msg)
      implicit none
      complex :: unexpected, actual
      real :: epsilon
      character(len=*) :: msg
      ! TODO
    end subroutine complexInvAssertWithMsg
end module CW2
