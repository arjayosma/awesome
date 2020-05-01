import React from "react"

import { rhythm } from "../utils/typography"

const Bio = () => {
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <img
        alt="Arjay Osma"
        src="https://graph.facebook.com/10215809732615809/picture?height=500&width=500"
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          width: rhythm(2),
          height: rhythm(2),
          borderRadius: "50%",
        }}
      />
      <p>
        Notes by{" "}
        <a href="https://twitter.com/arjayosma">
          <strong>Arjay Osma</strong>
        </a>
        <br />
        ENTP with a knack for software development, business and design.
      </p>
    </div>
  )
}

export default Bio
