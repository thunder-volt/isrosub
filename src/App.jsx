import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import "./styles/Navbar.css"
import "./styles/Sidebar.css"
import Home from './components/Home'
import ExcellSheet from './components/ExcellSheet'
import Login from './components/Login'
import SignUp from './components/SignUp'
import PrivateComponent from './components/PrivateComponents'
import BrushChartView from './components/BrushChartView'
import RadarView from './components/RadarView'
import CircleView from './components/CircleView'
import MultiView from './components/MultiView'
import LineChartview from './components/LineChartview'
import Features from './components/Features'
import PieChart from './components/chartsView/PieChart'
import About from './components/About';
import Fits from "./components/Fits"
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<PrivateComponent />}>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<Home />} />
          <Route path='/piechart' element={<PieChart />} />
          <Route path="/brushchart" element={<BrushChartView />} />
          <Route path='/linechart' element={<LineChartview />} />
          <Route path="/radarchart" element={<RadarView />} />
          <Route path="/circlefacet" element={<CircleView />} />
          <Route path="/multichart" element={<MultiView />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} />
          <Route path="/xls" element={<ExcellSheet />} />
          <Route path='/fits' element={<Fits />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
