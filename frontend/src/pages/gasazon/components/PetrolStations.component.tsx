import { useAppSelector } from '@noister/hooks/redux'
import { useGetPetrolStationsQuery } from '@noister/api/api.slice'
import { gasazonSelector } from '../gasazon.slice'
import { calculateTotalPrice } from '../gasazon.helper'
import { PetrolStation, Bottle } from '../types'
import { COLUMNS } from '../constants'

function PetrolStationsList() {
  const { bottlesCombination } = useAppSelector(gasazonSelector)
  const { data: petrolStations = [], isLoading, isError } = useGetPetrolStationsQuery(null, {
    pollingInterval: 30000
  })

  if (isLoading) return <p className="text-center">Loading...</p>

  if (isError) return <p className="text-center">Something went wrong</p>

  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg mt-2">
      <table className="w-full text-sm text-left text-gray-400">
        <thead className="text-xs text-gray-100 uppercase bg-blue-500">
          <tr>
            {COLUMNS?.map((column: string) => (
              <th key={column} scope="col" className="py-3 px-6">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {petrolStations?.map((petrolStation: PetrolStation, index: number) => {
            const rowColor = index % 2 ? 'bg-white' : 'bg-gray-100'
            const totalPrice = calculateTotalPrice(
              petrolStation.bottles,
              bottlesCombination
            )
            return (
              <tr
                key={petrolStation.name}
                className={`${rowColor} border-b border-gray-200`}
              >
                <th
                  scope="row"
                  className="py-4 px-6 text-gray-500 whitespace-nowrap text-transform: capitalize"
                >
                  {petrolStation.name}
                </th>
                {petrolStation.bottles.map((bottle: Bottle) => (
                  <td key={JSON.stringify(bottle)} className="py-4 px-6">
                    {bottle.price.toFixed(3)}€
                  </td>
                ))}
                <td className="py-4 px-6 font-bold text-gray-500">{totalPrice.toFixed(3)} €</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default PetrolStationsList
