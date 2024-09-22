interface StackContract<ElementType> {
  push: (element: ElementType) => void
  pop: () => ElementType | undefined
  peek: () => ElementType | undefined
  isEmpty: () => boolean
  size: () => number
  clear: () => void
}

export class StackArray<ElementType> implements StackContract<ElementType> {
  private items: ElementType[]

  constructor() {
    this.items = []
  }

  push(element: ElementType): void {
    this.items.push(element)
  }

  pop() {
    return this.items.pop()
  }

  peek() {
    return this.items[this.items.length - 1]
  }

  isEmpty() {
    return this.items.length === 0
  }

  size() {
    return this.items.length
  }

  clear() {
    this.items = []
  }
}
