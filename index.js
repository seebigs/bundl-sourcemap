/**
 * Source map extension for Bundl
 */

var sourceMap = require('source-map');

module.exports = function (options) {
    options = options || {};

    function sourcemapEach (contents, r) {
        var generator = new sourceMap.SourceMapGenerator({
            file: r.name,
            sourceRoot: options.sourceRoot
        });

        generator.addMapping({
            source: "../../src/entries/e1.js",
            original: { line: 1, column: 0 },
            generated: { line: 23, column: 0 }
        });

        utils.writeFile(r.dest + '.map', generator.toString(), options.callback);

        return contents + '\n//# sourceMappingURL=' + r.name + '.map';
    }

    return {
        each: sourcemapEach
    };

};
