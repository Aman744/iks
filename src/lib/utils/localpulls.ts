export async function allEvents() {
  const allfiles = import.meta.glob('/src/routes/events/*.md')
  const filed = Object.entries(allfiles)
  const eachfiled = await Promise.all(
    filed.map(async ([path, resolver]) => {
      // @ts-expect-error //beacause metadata below works all is okay
      const { metadata } = await resolver()
      const pathitem = path.slice(11, -3)
      const date = new Date(metadata.date as string);
      const formattedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
      return {
        date,
        formattedDate,
        meta: metadata,
        linkpath: pathitem
      };
    })
  )
  // Filter out the null values before sorting
  const filtered = eachfiled.filter(entry => entry !== null);
  return filtered.sort((a, b) => b!.date.getTime() - a!.date.getTime());
}