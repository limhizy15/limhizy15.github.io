import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

interface PostContentProps {
  html: string
}

const MarkdownRenderer = styled.div`
  // Renderer Style
  display: flex;
  flex-direction: column;
  width: 768px;
  margin: 0 auto;
  padding: 30px 0;
  word-break: break-all;

  // Image Style
  img {
    width: 768px;
    height: auto;
  }

  // * Markdown Style
  font-weight: 400;
  font-size: 1em;
  line-height: 1.8em;
  // word-spacing: -1px;

  // Apply Padding Attribute to All Elements
  p {
    padding: 10px 0;
  }

  // Adjust Heading Element Style

  h1,
  h2,
  h3 {
    font-family: 'Do Hyeon', sans-serif;
  }

  h1 {
    font-weight: 700;
    font-size: 2.2em;
    margin-bottom: 7px;
  }

  h2 {
    font-weight: 700;
    font-size: 1.6em;
    margin-bottom: 3px;
  }

  h3 {
    font-weight: 700;
    font-size: 1.4em;
    margin-bottom: 5px;
  }

  * + h1,
  * + h2,
  * + h3 {
    margin-top: 20px;
  }

  hr + h1,
  hr + h2,
  hr + h3 {
    margin-top: 0;
  }

  // Adjust Quotation Element Style
  blockquote {
    margin: 30px 0;
    padding: 5px 15px;
    border-left: 2px solid #000;
    font-weight: 600;
    background-color: #eceff4;
  }

  // Adjust List Element Style
  ol,
  ul {
    margin-left: 20px;
    padding: 10px 0;
  }

  // Adjust Horizontal Rule style
  hr {
    border: 1px solid #d8dee9;
    margin: 40px 0;
  }

  // Adjust Link Element Style
  a {
    color: #9c877c;
    text-decoration: underline;
  }

  // Adjust Code Style
  pre[class*='language-'] {
    margin: 30px 0;
    padding: 15px;
    font-size: 15px;

    ::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.5);
      border-radius: 3px;
    }
  }

  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    background: #2d2d2d;
  }

  code[class*='language-'],
  pre[class*='language-'] {
    tab-size: 2;
  }

  // Markdown Responsive Design
  @media (max-width: 768px) {
    width: 100%;
    padding: 80px 20px;
    line-height: 1.6;
    font-size: 14px;

    h1 {
      font-size: 23px;
    }

    h2 {
      font-size: 20px;
    }

    h3 {
      font-size: 17px;
    }

    img {
      width: 100%;
    }

    hr {
      margin: 50px 0;
    }
  }
`

const PostContent: FunctionComponent<PostContentProps> = function ({ html }) {
  return <MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />
}

export default PostContent
