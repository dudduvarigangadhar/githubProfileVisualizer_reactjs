import {useState, useEffect, useContext} from 'react'
import {useParams} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import './index.css'
import ProfileContext from '../../ProfileContext'
import Header from '../Header'

const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  Loading: 'LOADING',
}

const RepoItemDetails = () => {
  const [apiStatus, setApiStatus] = useState(apiConstants.initial)
  const {repoName} = useParams()

  //   console.log('name', repoName)
  const [repositoryItemDetails, setRepositoryItemDetails] = useState([])
  const {username} = useContext(ProfileContext)

  const getOwner = owner => ({
    avatarUrl: owner.avatar_url,
    eventsUrl: owner.events_url,
    followersUrl: owner.followers_url,
    followingUrl: owner.following_url,
    gistsUrl: owner.gists_url,
    gravatarId: owner.gravatar_id,
    htmlUrl: owner.html_url,
    id: owner.id,
    login: owner.login,
    nodeId: owner.node_id,
    organizationsUrl: owner.organizations_url,
    receivedEventsUrl: owner.received_events_url,
    reposUrl: owner.repos_url,
    siteAdmin: owner.site_admin,
    starredUrl: owner.starred_url,
    subscriptionsUrl: owner.subscriptions_url,
    type: owner.type,
    url: owner.url,
  })

  useEffect(() => {
    const respoDetails = async () => {
      const options = {
        method: 'GET',
      }
      //   url
      const response = await fetch(url, options)
      if (response.ok === true) {
        const data = await response.json()
        const updatedData = {
          name: data.name,
          description: data.description,
          languages: data.languages,
          stargazersCount: data.stargazers_count,
          forksCount: data.forks_count,
          commitsCount: data.network_count,
          issuesCount: data.open_issues_count,
          contributors: data.contributors.map(contributor => ({
            avatarUrl: contributor.avatar_url,
            contribution: contributor.contribution,
            eventsUrl: contributor.events_url,
            followersUrl: contributor.followers_url,
            followingUrl: contributor.following_url,
            gistsUrl: contributor.gists_url,
            gravatarId: contributor.gravatar_id,
            htmlUrl: contributor.html_url,
            id: contributor.id,
            login: contributor.login,
            nodeId: contributor.node_id,
            organizationsUrl: contributor.organizations_url,
            receivedEventsUrl: contributor.received_events_url,
            reposUrl: contributor.repos_url,
            siteAdmin: contributor.site_admin,
            starredUrl: contributor.starred_url,
            subscriptionsUrl: contributor.subscriptions_url,
            type: contributor.type,
            url: contributor.url,
          })),
          owner: getOwner(data.owner),
          watchersCount: data.watchers_count,
        }
        //   console.log(data)
        setRepositoryItemDetails(updatedData)
        setApiStatus(apiConstants.success)
      } else {
        setApiStatus(apiConstants.failure)
      }

      respoDetails()
    }
  })

  const repoItemDetailsSuccess = () => {
    const {
      name,
      description,
      languages,
      forksCount,
      stargazersCount,
      watchersCount,
      issuesCount,
      contributors,
      owner,
    } = repositoryItemDetails
    const {avatarUrl, login} = owner
    const contributorLength = contributors.length
    return (
      <div>
        <div>
          <h1>Contributors :</h1>
          <p>{contributorLength} Members</p>
        </div>
      </div>
    )
  }

  const repoItemDetailsFailure = () => (
    <div>
      <img
        className="noRepoFound"
        src="https://res.cloudinary.com/diqwk5cdp/image/upload/v1730975419/Layer_3_unz7cw.png"
        alt="notfound"
      />
      <h1>No Repositories Found</h1>
    </div>
  )

  const repoItemDetailsLoading = () => (
    <div className="loader-div-container">
      <div className="loader-container" data-testid="loader">
        <Loader type="TailSpin" color="#3B82F6" height={50} width={50} />
      </div>
    </div>
  )

  const renderRepoItemDetailsViews = () => {
    switch (apiStatus) {
      case apiConstants.success:
        return repoItemDetailsSuccess()
      case apiConstants.failure:
        return repoItemDetailsFailure()
      case apiConstants.Loading:
        return repoItemDetailsLoading()
      default:
        return null
    }
  }

  return (
    <div>
      <Header />
      <div>{renderRepoItemDetailsViews()}</div>
    </div>
  )
}

export default RepoItemDetails
