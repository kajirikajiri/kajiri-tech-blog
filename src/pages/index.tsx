import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogIndex = ({
  data,
  location,
}: {
  data: {
    previous: { fields: { slug: string }; frontmatter: { title: string } }
    next: { fields: { slug: string }; frontmatter: { title: string } }
    markdownRemark: any
    allMarkdownRemark: {
      nodes: {
        fields: { slug: string }
        excerpt: string
        frontmatter: { title: string; date: string; description: string }
      }[]
    }
    site: { siteMetadata?: { title: string } }
  }
  location: { pathname: string }
}) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to &ldquo;content/blog&ldquo;
          (or the directory you specified for the
          &ldquo;gatsby-source-filesystem&ldquo; plugin in gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    {
                      ["/20201115134137/", "/20201107180155/", "/20201122202639/", "/20201206200930/", "/20201206150441/", "/20201121231214/", "/20201206181654/", "/20201205232320/", "/20201229180502/", "/20210102063105/", "/20210111220019/", "/20201205233245/", "/20201206155732/", "/20201128200327/", "/20201122230750/", "/20201206195934/", "/"].includes(post.fields.slug) ? (
                        <a href={post.fields.slug}>{title}</a>
                      ) : (
                        <Link to={post.fields.slug} itemProp="url">
                          <span itemProp="headline">{title}</span>
                        </Link>
                      )
                    }
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
