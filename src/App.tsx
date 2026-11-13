import { Route, Routes } from 'react-router'

import { Layout } from '@/components/layout'
import { HomeScreen } from '@/pages/HomeScreen'
import { PostScreen } from '@/pages/PostScreen'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/posts/:id" element={<PostScreen />} />
      </Route>
    </Routes>
  )
}

export default App
