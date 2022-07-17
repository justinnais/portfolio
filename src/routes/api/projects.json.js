export const GET = async () => {
  const projectFiles = import.meta.glob('../project/*.md');
  const iterableProjects = Object.entries(projectFiles);

  const allProjects = await Promise.all(
    iterableProjects.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const postPath = path.slice(2, -3);

      return {
        meta: metadata,
        path: postPath,
      };
    })
  );

  const sortedProjects = allProjects.sort((a, b) => {
    return new Date(b.meta.date) - new Date(a.meta.date);
  });

  return {
    body: sortedProjects,
  };
};
