const Contributors = props => {
  const {contributorDetails} = props
  console.log(contributorDetails)
  const {avatarUrl} = contributorDetails
  return (
    <div>
      <img src={avatarUrl} alt="contributor profile" />
    </div>
  )
}
export default Contributors
