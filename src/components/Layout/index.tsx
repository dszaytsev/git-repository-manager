import React, { FC } from 'react'

interface Props {
  className?: string
}

const Layout: FC<Props> = ({ children, className }) => {
  return (
    <div className='Repository'>
      <div className='Repository-header'>
        <div className='Repository-branch'>
          <div className='Repository-title'>arcadia</div>
          <div className='Repository-branchSelector'></div>
        </div>
        <div className='Repository-lastCommit'>Last commit <a className='Link' href='#'>c4d248</a> on <a className='Link' href='#'>20 Oct 2017, 12:24</a> by <span className='Committer'>robot-srch-releaser</span></div>
      </div>
      <div className='Repository-tabs'></div><input className='Repository-search' data-component='Search' placeholder='Поиск' />
      <div className={`Repository-content ${className}`}>
        {children}
      </div>
    </div>
  )
}

export default Layout
