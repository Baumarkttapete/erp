export interface TriangleData {
  time: number;
  quality: number;
  cost: number;
}

export class TriangleData {
  time: number = 0;
  quality: number = 0;
  cost: number = 0;

  constructor(time: number, quality: number, cost: number) {
    this.time = time;
    this.quality = quality;
    this.cost = cost;
  }
}
