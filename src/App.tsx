import { Route, Routes } from 'react-router'

import { Layout } from '@/components/layout'
import { HomeScreen } from '@/pages/HomeScreen'
import NotFoundScreen from '@/pages/NotFoundScreen'
import { PostScreen } from '@/pages/PostScreen'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/posts/:id" element={<PostScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Route>
    </Routes>
  )
}

export default App
