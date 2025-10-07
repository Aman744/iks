export async function load({ params }: { params: { event: string } }) {
  const post = await import(`../${params.event}.md`)
  const { title, date, link, description } = post.metadata
  const content = post.default

  return {
    content,
    title,
    date,
    link,
    description
  }
}