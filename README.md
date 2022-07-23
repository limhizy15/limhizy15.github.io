- vhttps://blog.logrocket.com/create-next-js-mdx-blog
- 왜 Header.module.css라는 파일명을 사용했을까?
- typescript로 마이그레이션 필요..
- 지금은 static meta를 사용하지만 seo를 위해서는 next/seo같은거 써야할 것임
- https://nextjs.org/docs/advanced-features/custom-document

# TODO
- [ ] TypeScript 변환
- [ ] 폴더구조 변경
- [ ] 필요한 부분만 mdx 쓰도록
- [ ] getStaticProps에 대한 정확한 이해 필요
- [ ] 디자인

# TroubleShoot
- YAMLException: can not read a block mapping entry; a multiline key may not be an implicit key at line 3, column 12:
    publishedOn: January, 9th. 2022
  - double quote
- Error: No children were passed to <Link> with `href` of `/posts/memory-interview` but one child is required https://nextjs.org/docs/messages/link-no-children
  - Link 태그 안에 바로 타이틀을 쓰는 게 deprecated 됐다고 함.
