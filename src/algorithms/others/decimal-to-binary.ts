import { Stack } from '@/data-structures/stack'

export function decimalToBinary(decimalNumber: number): string {
  const remaindersStack = new Stack<number>()

  let number = decimalNumber
  let remainder
  let binaryString = ''

  while (number > 0) {
    remainder = Math.floor(number % 2)
    remaindersStack.push(remainder)
    number = Math.floor(number / 2)
  }
  while (!remaindersStack.isEmpty()) {
    binaryString += remaindersStack.pop()
  }
  return binaryString
}
console.log(decimalToBinary(233))
console.log(decimalToBinary(10))
console.log(decimalToBinary(1000))
