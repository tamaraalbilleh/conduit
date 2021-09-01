export const returnState = (state: any) => {
  return {
    articles: state.articles,
    tags: state.tags,
    user: state.user,
  };
};
