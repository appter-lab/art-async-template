/**
 * 原生模板语法规则
 */
const nativeRule = {
    test: /<%(#?)((?:==|=#|[=-])?)[ \t]*([\w\W]*?)[ \t]*(-?)%>/,
    use: (match, comment, output, code /*, trimMode*/) => {
        output = {
            '-': 'raw',
            '=': 'escape',
            '': false,
            // v3 compat: raw output
            '==': 'raw',
            '=#': 'raw'
        }[output];

        // ejs compat: comment tag
        if (comment) {
            code = `/*${code}*/`;
            output = false;
        }

        if (/^include\(.*\)$/.test(code) || /^block\(.*\)$/.test(code) || /^extend\(.*\)$/.test(code) || /^print\(.*\)$/.test(code)) {
            code = `await ${code}`;
        }

        // ejs compat: trims following newline
        // if (trimMode) {}

        return {
            code,
            output
        };
    }
};

module.exports = nativeRule;
