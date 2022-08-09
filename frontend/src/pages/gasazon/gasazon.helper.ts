import { Bottle, BottlesCombination } from './types'

export function calculateTotalPrice(
  stationBottles: Array<Bottle>,
  bottlesCombination: BottlesCombination
): number {
  const map = new Map()
  stationBottles.forEach((bottle) => map.set(bottle.capacity, bottle))

  return Object.entries(bottlesCombination).reduce(
    (acc: number, [size, quantity]: Array<string>) => {
      const bottle = map.get(+size)
      acc += bottle.price * +quantity
      return acc
    },
    0
  )
}
