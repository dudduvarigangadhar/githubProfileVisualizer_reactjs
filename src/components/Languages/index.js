const Languages = props => {
  const {languageDetails} = props
  const {name} = languageDetails
  return (
    <div>
      <p>{name}</p>
    </div>
  )
}
export default Languages
