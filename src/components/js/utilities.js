export function formatBlogPosts(posts, {
    limit = undefined
  } = {}) {
  const filteredPosts = posts.reduce((acc, post) => {
    acc.push(post)
    return acc;
  }, [])

  // sortByDate or randomize
  filteredPosts.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))

  if (typeof limit === "number") {
    return filteredPosts.slice(0, limit);
  }
  return filteredPosts;
}
