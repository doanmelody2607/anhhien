const siteData = require('../../src/_data/site');

module.exports = (coll) => {
    const allBlogs = require('./blogs')(coll);

    const maxPostsPerPage = siteData.paginate;
    const numberOfPages = Math.ceil(allBlogs.length / maxPostsPerPage);
    const paginateBlogs = [];

    for (let pageNum = 1; pageNum <= numberOfPages; pageNum++) {
        const sliceFrom = (pageNum - 1) * maxPostsPerPage;
        const sliceTo = sliceFrom + maxPostsPerPage;

        paginateBlogs.push({
            number: pageNum,
            posts: allBlogs.slice(sliceFrom, sliceTo),
            first: pageNum === 1,
            last: pageNum === numberOfPages,
        });
    }

    return paginateBlogs;
};
