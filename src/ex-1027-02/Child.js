import PropTypes from 'prop-types'
function Child({ firstName, lastName }) {
  return (
    <>
      {firstName}
      {lastName}
    </>
  )
}
Child.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
}
export default Child
