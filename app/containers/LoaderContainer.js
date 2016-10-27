import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { changeLoaderStatus } from 'redux/modules/loader'
import Loading from 'components/Loading'

function mapStateToProps ({loaderStatus}) {
  return {
    active: loaderStatus.active,
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    changeLoaderStatus: changeLoaderStatus,
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Loading)
