import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faSun,
  faMoon,
  faEnvelopeOpenText,
  faRss,
} from "@fortawesome/free-solid-svg-icons"
import {
  faTwitter,
  faGithub,
  faMedium,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.0),
          fontFamily: `'Catamaran', sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            letterSpacing: `2px`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          ...scale(0.75),
          fontFamily: `'Catamaran', sans-serif`,
          marginTop: 0,
          fontWeight: `bold`,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            letterSpacing: `2px`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        {header}
        <ThemeToggler>
          {({ theme, toggleTheme }) =>
            theme === "dark" ? (
              <FontAwesomeIcon
                size={location.pathname === rootPath ? "2x" : "lg"}
                icon={faSun}
                style={{
                  marginRight: `0.5em`,
                  marginTop: `0.25em`,
                  cursor: `pointer`,
                }}
                onClick={() => toggleTheme("light")}
              />
            ) : (
              <FontAwesomeIcon
                size={location.pathname === rootPath ? "2x" : "lg"}
                icon={faMoon}
                style={{
                  marginRight: `0.5em`,
                  marginTop: `0.25em`,
                  cursor: `pointer`,
                }}
                onClick={() => toggleTheme("dark")}
              />
            )
          }
        </ThemeToggler>
      </header>
      <main>{children}</main>
      <footer
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <a href="https://twitter.com/arjayosma">
            <FontAwesomeIcon
              size="lg"
              icon={faTwitter}
              style={{ marginRight: `0.5em` }}
            />
          </a>
          <a href="https://www.linkedin.com/in/arjayosma/">
            <FontAwesomeIcon
              size="lg"
              icon={faLinkedin}
              style={{ marginRight: `0.5em` }}
            />
          </a>
          <a href="https://github.com/arjayosma">
            <FontAwesomeIcon
              size="lg"
              icon={faGithub}
              style={{ marginRight: `0.5em` }}
            />
          </a>
          <a href="https://medium.com/@arjayosma">
            <FontAwesomeIcon
              size="lg"
              icon={faMedium}
              style={{ marginRight: `0.5em` }}
            />
          </a>
          <a href="mailto:arjay.osma@gmail.com">
            <FontAwesomeIcon
              size="lg"
              icon={faEnvelopeOpenText}
              style={{ marginRight: `0.5em` }}
            />
          </a>
        </div>
        <div>
          <a href="https://arjayosma.com/rss.xml">
            <FontAwesomeIcon
              size="lg"
              icon={faRss}
              style={{ marginRight: `0.5em` }}
            />
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Layout
