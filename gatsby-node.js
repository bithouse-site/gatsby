const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // CREACION DE PAGINAS DE BLOG
  const { data: blogQueryData } = await graphql(`
    query Articles {
      allSanityArticle {
        nodes {
          slug {
            current
          }
        }
      }
    }
  `)

  if (blogQueryData.errors) {
    reporter.panicOnBuild("Error creando paginas de blog")
  }

  blogQueryData.allSanityArticle.nodes.forEach(node => {
    const BlogDetail = path.resolve("./src/templates/ArticlePage.js")
    createPage({
      path: "/visitantes/" + node.slug.current,
      component: BlogDetail,
      context: { slug: node.slug.current },
    })
  })
}
