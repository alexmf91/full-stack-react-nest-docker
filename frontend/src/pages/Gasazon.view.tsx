import { Routes, Route, Outlet, Navigate } from 'react-router-dom'
import { PageLayout } from '@noister/layouts'
import { TabBar } from '@noister/components'
import { BottlesCalculator, PetrolStations } from '@noister/features/Gasazon/components'

const GasazonRouter = () => {
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
      <TabBar tabs={tabs}></TabBar>
      <PageLayout>
        <BottlesCalculator />
        <GasazonRouter />
        <Outlet />
      </PageLayout>
    </>
  )
}

export default Gasazon
