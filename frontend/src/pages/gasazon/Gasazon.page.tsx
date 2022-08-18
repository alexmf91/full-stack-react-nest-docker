import { Routes, Route, Outlet, Navigate } from 'react-router-dom'
import { PageLayout } from '@noister/components/layouts'
import { TabBar } from '@noister/components'
import { BottlesCalculator, PetrolStations } from './components'

function GasazonRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="petrol-stations" replace />} />
      <Route path="petrol-stations" element={<PetrolStations />} />
    </Routes>
  )
}

function Gasazon() {
  const tabs = ['petrol stations']

  return (
    <>
      <TabBar tabs={tabs} />
      <PageLayout>
        <BottlesCalculator />
        <GasazonRouter />
        <Outlet />
      </PageLayout>
    </>
  )
}

export default Gasazon
