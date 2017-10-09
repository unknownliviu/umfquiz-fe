import React, {Component} from 'react'
import PropTypes from 'prop-types'
import WizardFormPage from '../WizardFormPage'

class WizardForm extends Component {
  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 1
    }
  }
  nextPage() {
    this.setState({page: this.state.page + 1})
  }

  previousPage() {
    this.setState({page: this.state.page - 1})
  }

  render() {
    const {onSubmit} = this.props
    const {page} = this.state
    return (
      <div>
        {page === 1 && <WizardFormPage onSubmit={this.nextPage} />}
        {page > 1 && page < 5 &&
          <WizardFormPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />}
        {page === 5 &&
          <WizardFormPage
            previousPage={this.previousPage}
            onSubmit={onSubmit}
          />}
      </div>
    )
  }
}

WizardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default WizardForm