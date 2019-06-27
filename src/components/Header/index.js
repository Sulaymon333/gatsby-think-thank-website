import React from "react"
import "./style.css"

const App = ({ header }) => {
  const {
    headerTitle,
    headerSubtitle,
    headerPill,
    headerImage,
    headerImageAlt,
    main,
  } = header

  const jsx = (
    <div>
      <h1>{headerTitle}</h1> <h2>{headerSubtitle}</h2>
    </div>
  )

  return jsx
}

export default App
