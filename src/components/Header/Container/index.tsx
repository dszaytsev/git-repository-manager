import React, { FC } from 'react'

import Logo from '../Logo'
import Repo from '../Repo'

interface Props {
  className?: string
}

const Container: FC<Props> = ({ className }) => (
  <div className={`Header-Container ${className}`}>
    <Logo />
    <Repo />
  </div>
)

export default Container
