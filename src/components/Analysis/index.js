import {useState, useEffect, useContext} from 'react'
import './index.css'
import ProfileContext from '../../ProfileContext'

const Analysis = () => {
  const [analysisData, setAnalysisData] = useState('')
  const {username} = useContext(ProfileContext)
  useEffect(() => {
    const getAnalysisData = async () => {
      // url
      const options = {
        method: 'GET',
      }
      const response = await fetch(analysisApi, options)
      const data = await response.json()
      console.log(data)
    }
    getAnalysisData()
  })
  return <div>Analysis</div>
}
export default Analysis
