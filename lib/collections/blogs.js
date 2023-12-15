module.exports = (coll) => {
    const posts = [...coll.getFilteredByGlob('src/blogs/*.md')];

    return posts.reverse();
};
