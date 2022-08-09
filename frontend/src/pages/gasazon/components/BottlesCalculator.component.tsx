import React, { useState } from 'react'
import { useAppDispatch } from '@noister/hooks/redux'
import { setBottlesCombination } from '../gasazon.slice'
import { BottlesCombination } from '../types'

function BottlesCalculator() {
  const dispatch = useAppDispatch()

  const [liters, setLiters] = useState<number>()
  const [bottles, setBottles] = useState<BottlesCombination>()

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setLiters(+event.target.value)
  }

  function handleOnSubmit(event: { preventDefault: () => void }) {
    event.preventDefault()
    calculateCombination(liters!, [1, 3, 5, 15])
  }

  function calculateCombination(liters: number, bottles: Array<number>) {
    const sortedBottles = bottles.sort((a: number, b: number) => b - a)
    let currentLiters: number = liters
    let integerDivision: number
    const bottlesCombination = sortedBottles.reduce((acc: any, curr: number) => {
      if (!currentLiters || curr > currentLiters) return acc
      integerDivision = Math.floor(currentLiters / curr)
      acc[curr] = integerDivision
      currentLiters -= integerDivision * curr
      return acc
    }, {})

    setBottles(bottlesCombination)
    dispatch(setBottlesCombination(bottlesCombination))
  }

  return (
    <div className="bg-white w-fit mx-auto rounded-md p-2 border border-gray-200 shadow-sm">
      <h2 className="text-center bg-blue-500 p-2 rounded-md font-bold text-white">
        Calculate bottles
      </h2>
      <form className="flex flex-col my-4 p-8  bg-gray-200 mx-auto rounded-md">
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-600">
            Put the quantity of the liters you want
          </label>
          <input
            type="number"
            min="0"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Example: 30"
            required
            onChange={handleInputChange}
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 enabled:hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 enabled:dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-50"
          disabled={!liters}
          onClick={handleOnSubmit}
        >
          Calculate
        </button>
      </form>
      {bottles && (
        <div className="flex flex-col my-4 p-8 bg-gray-200 mx-auto rounded-md">
          <h3 className="font-semibold text-gray-700">You need buy:</h3>
          <ul className="flex flex-col py-4 items-center bg-white list-disc rounded-md">
            {Object.entries(bottles)?.map(([key, value]: any) => (
              <li key={key + value} className="mt-2">
                <span>
                  {value} units of {key} liters
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default BottlesCalculator
