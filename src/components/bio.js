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
        I'm a full-stack software developer, startup enthusiast, and designer.
        <br />
        <br />
        I've been in the industry for more than{" "}
        {new Date().getFullYear() - 2013} years. I enjoy building applications
        using <strong>Java</strong> and <strong>JavaScript</strong> (React and
        React Native mostly) technologies. I'll be sharing bits and pieces of
        knowledge I learned, and to ultimately cement ideas I gained through the
        years.
      </p>
    </div>
  )
}

export default Bio
