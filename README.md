query {
	allEcard {
    edges{
      node {
        id
        path
        title
        content
      }
    }
  }
}

query {
  ecard (path: "/ecard/ecard-two") {
    title
    content
  }
}