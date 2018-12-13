import * as React from "react";
import { graphql } from "gatsby";
import Page from "../components/Page";
import BlogPostCard from "../components/BlogPostCard";

export default class Blog extends React.Component<{ data: any }, {}> {
  render() {
    const { data } = this.props;
    const posts = data.allMarkdownRemark.edges;
    return (
      <Page>
        {posts.map((p: any, i: number) => (
          <BlogPostCard
            key={i}
            postTitle={p.node.frontmatter.title}
            postExcerpt={p.node.excerpt}
            postedDate={p.node.frontmatter.date}
            postReadTime={p.node.timeToRead}
            postCommentCount={3}
            postSlug={p.node.fields.slug}
          />
        ))}
      </Page>
    );
  }
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          excerpt
          timeToRead
          fields {
            slug
          }
        }
      }
    }
  }
`;
