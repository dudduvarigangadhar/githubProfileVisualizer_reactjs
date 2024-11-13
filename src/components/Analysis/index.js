import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LinearChart from '../LinearChart'

const apiConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Analysis extends Component {
  state = {apiStatus: apiConstants.initial, analysisData: {}}

  componentDidMount() {
    this.getAnalysisData()
  }

  getAnalysisData = async () => {
    const {username} = this.props
    console.log(this.props)
    this.setState({apiStatus: apiConstants.inProgress})
    // api url
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      console.log(data)
      const updatedData = data
      this.setState({
        apiStatus: apiConstants.success,
        analysisData: updatedData,
      })
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  analysisLoadingView = () => (
    <div className="analysis-loading-view">
      <div className="loader-container" data-testid="loader">
        <Loader type="TailSpin" color="#3B82F6" height={50} width={50} />
      </div>
    </div>
  )

  analysisSuccessView = () => {
    const {analysisData} = this.state
    const {
      user,
      quarterCommitCount,
      langRepoCount,
      langCommitCount,
      repoCommitCount,
    } = analysisData

    const quarterCommitData = []
    const quarterCommitKeyNames = Object.keys(quarterCommitCount)
    quarterCommitKeyNames.forEach(keyName => {
      quarterCommitData.push({
        name: keyName,
        commits: quarterCommitCount[keyName],
      })
    })
    const quarterCommitSlicedData = quarterCommitData
      .sort(this.descendingSort)
      .slice(0, Object.keys(quarterCommitCount).length)
    console.log(quarterCommitSlicedData)
    return (
      <div>
        <LinearChart quarterCommitCount={quarterCommitSlicedData} />
      </div>
    )
  }

  analysisFailureView = () => {}

  renderAnalysisView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstants.inProgress:
        return this.analysisLoadingView()
      case apiConstants.success:
        return this.analysisSuccessView()
      case apiConstants.failure:
        return this.analysisFailureView()
      default:
        return null
    }
  }

  render() {
    return <div>{this.renderAnalysisView()}</div>
  }
}

export default Analysis
