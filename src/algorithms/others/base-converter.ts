import { Stack } from '@/data-structures/stack'

export function baseConverter(decimalNumber: number, base: number): string {
  const remaindersStack = new Stack<number>()
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  let number = decimalNumber
  let remainder
  let baseString = ''

  if (!(base >= 2 && base <= 36)) {
    return ''
  }

  while (number > 0) {
    remainder = Math.floor(number % base)
    remaindersStack.push(remainder)
    number = Math.floor(number / base)
  }
  while (!remaindersStack.isEmpty()) {
    const poppedValue = remaindersStack.pop()
    if (poppedValue !== undefined) {
      baseString += digits[poppedValue]
    }
  }
  return baseString
}
