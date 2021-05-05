import React, { useEffect, useState } from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { addIdToHeadlines } from "../scripts/addIdToHeadLines"
import { ahrefBeautifier } from "../scripts/ahrefBeautifier"
import { closeDetailsTag } from "../scripts/closeDetailsTag"
import { addCopyButtonToCodeblocks } from "../scripts/addCopyButtonToCodeblocks"

const BlogPostTemplate = ({
  data,
  location,
}: {
  data: {
    previous: { fields: { slug: string }; frontmatter: { title: string } }
    next: { fields: { slug: string }; frontmatter: { title: string } }
    markdownRemark: any
    site: { siteMetadata?: { title: string } }
  }
  location: { pathname: string }
}) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data
  const [form, setForm] = useState<boolean>(false)

  useEffect(() => {
    addIdToHeadlines()
    ahrefBeautifier()
    addCopyButtonToCodeblocks()
    closeDetailsTag()
  }, [])
  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <p style={{ display: "flex", alignItems: "center" }}>
          moving soon →
          <a rel="noreferrer" target="_blank" href="https://kajiri.dev">
            kajiri.dev
          </a>
        </p>
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
      {form ? (
        <form action="https://formspree.io/f/mjvppjne" method="POST">
          <label style={{ display: "block" }}>
            email:
            <input type="text" name="_replyto" />
          </label>
          <label style={{ display: "block" }}>
            message:
            <input type="text" name="message"></input>
          </label>
          <input
            type="hidden"
            name="page-title"
            value={post.frontmatter.title}
          />
          <button type="submit">Send</button>
        </form>
      ) : (
        <a style={{ cursor: "pointer" }} onClick={() => setForm(true)}>
          contact
        </a>
      )}
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
