interface StackMethods<ElementType> {
  push: (element: ElementType) => void
  size: () => number
  isEmpty: () => boolean
  pop: () => ElementType | undefined
  peek: () => ElementType | undefined
}

export class Stack<ElementType> implements StackMethods<ElementType> {
  private count: number
  private items: Record<number, ElementType>

  constructor() {
    this.count = 0
    this.items = {}
  }

  push(element: ElementType): void {
    this.items[this.count] = element
    this.count++
  }

  size() {
    return this.count
  }

  isEmpty() {
    return this.count === 0
  }

  pop() {
    if (this.isEmpty()) {
      return undefined
    }
    this.count--
    const result = this.items[this.count]
    delete this.items[this.count]
    return result
  }

  peek() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.count - 1]
  }

  clear() {
    while (!this.isEmpty()) {
      this.pop()
    }
  }

  toString() {
    if (this.isEmpty()) {
      return ''
    }
    let objectString = `${this.items[0]}`
    for (let i = 1; i < this.count; i++) {
      objectString = `${objectString}, ${this.items[i]}`
    }
    return objectString
  }
}
