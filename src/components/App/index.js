import React from "react"
import Header from "../Header"
import "./style.css"

const App = ({ data }) => {
  const { contentfulIndex } = data
  const {
    headerTitle,
    headerSubtitle,
    headerPill,
    headerImage,
    headerImageAlt,
    main,
  } = contentfulIndex

  const header = {
    headerTitle,
    headerSubtitle,
    headerPill,
    headerImageAlt,
    headerImageAlt,
  }

  const jsx = (
    <div>
      <Header header={header}></Header>
    </div>
  )

  return jsx
}

export default App
