import Heap from "./Heap";

export default class MinHeap extends Heap {
  pairIsInCorrectOrder(firstElement, secondElement) {
    this.compare.lessThanOrEqual(firstElement, secondElement);
  }
}
