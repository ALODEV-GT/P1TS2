import './App.css'
import CsvUploader from './modules/engine/uploader/FileUploader'
import Intersection from './modules/graphics/Intersection'
// import Monitor from './modules/monitor/components/Monitor'


function App() {

  return (
    <>
      <Intersection />
      {/* <Monitor/> */}
      <CsvUploader />
    </>
  )
}

export default App
