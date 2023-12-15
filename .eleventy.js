const plugin11tyNavigation = require('@11ty/eleventy-navigation');
const lazyImagesPlugin = require('eleventy-plugin-lazyimages');

const INTPUT = 'src';
const OUTPUT = 'public';

module.exports = function (eleventyConfig) {
    // Plugins
    eleventyConfig.addPlugin(plugin11tyNavigation);
    eleventyConfig.addPlugin(lazyImagesPlugin, {
        imgSelector: '.page-lazy-image img',
        // scriptSrc:
        //   'https://cdn.jsdelivr.net/npm/vanilla-lazyload@16.1.0/dist/lazyload.min.js',
    });

    // Pass through copy
    eleventyConfig.addPassthroughCopy(`${INTPUT}/assets/img/**/*`);

    eleventyConfig.addPassthroughCopy({
        [`${INTPUT}/blogs/img/**/*`]: 'assets/img/blogs',
        'node_modules/htmx.org/dist/htmx.min.js': 'assets/js/htmx.min.js',
    });

    // Watch Target
    eleventyConfig.addWatchTarget(`${INTPUT}/assets/js/`);

    // Filters
    eleventyConfig.addFilter(
        'readableDate',
        require('./lib/filters/readableDate'),
    );
    eleventyConfig.addFilter('minifyJs', require('./lib/filters/minifyJs'));

    // Collections
    eleventyConfig.addCollection('blogs', require('./lib/collections/blogs'));
    eleventyConfig.addCollection(
        'paginateBlogs',
        require('./lib/collections/blogs-pagination'),
    );

    // Server Optional
    eleventyConfig.setServerOptions({
        watch: [`./${OUTPUT}/assets/css/styles.css`, `./${OUTPUT}/blogs/*`],
    });

    return {
        passthroughFileCopy: true,

        dir: {
            input: INTPUT,
            output: OUTPUT,
        },

        templateFormats: ['md', 'njk', 'html'],
        dataTemplateEngine: 'njk',
        markdownTemplateEngine: 'njk',
    };
};
