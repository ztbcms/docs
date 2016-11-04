var pkg = require('./package.json');

module.exports = {
    // Documentation for GitBook is stored under "docs"
    root: './docs',
    title: 'ZtbCMS',

    // Enforce use of GitBook v3
    gitbook: '3.2.0',

    // Use the "official" theme
    plugins: ['theme-ztbcms-docs@1.0.1', '-sharing', '-fontsettings', 'sitemap'],

    variables: {
        version: pkg.version
    },

    pluginsConfig: {
        sitemap: {
            hostname: 'https://www.ztbcms.com'
        }
    }
};
