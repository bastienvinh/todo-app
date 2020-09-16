import React, { FC } from 'react'

interface IProps {
  title: string
  subtitle?: string
}

const Header: FC<IProps> = ({ title, subtitle }) => {
  return <header className="has-text-centered is-dark is-bold mb-5">
    <div className="hero-body">
      <div className="container">
        <h1 className="title mb-3">{title}</h1>
        <h2 className="subtitle mt-0">{subtitle}</h2>
      </div>
    </div>
  </header>
}

export default Header