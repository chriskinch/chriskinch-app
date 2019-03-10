import React from 'react'
import Header from '../components/Header'

class Layout extends React.PureComponent {
  render () {
    const { children } = this.props
    return (
      <div className='layout'>
        <Header />
        {children}
      </div>
    )
  }
}

export default Layout