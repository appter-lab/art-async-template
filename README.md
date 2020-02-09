# art-async-template

[![NPM Version](https://img.shields.io/npm/v/art-async-template.svg)](https://npmjs.org/package/art-async-template)
[![NPM Downloads](http://img.shields.io/npm/dm/art-async-template.svg)](https://npmjs.org/package/art-async-template)
[![Node.js Version](https://img.shields.io/node/v/art-async-template.svg)](http://nodejs.org/download/)

[English document](https://aui.github.io/art-template/) | [中文文档](https://aui.github.io/art-template/zh-cn/index.html)

This is a fork of original [art-template](https://aui.github.io/art-template/) project. It extends functionality by adding async/await calls functions inside templates. For example, if you import in art-template object async function that use I/O, you can use it in template.

    const art = require('art-async-template');
    art.defaults.imports.doAsync = async function () {
        return await asyncProcedure();
    };
    
In template use this:

    <%= await $imports.doAsync() %>

Profit!
Also, it can be applied with methods of render data

    class Test {
        i = 0;

        async doAsync() {
            // some code
        }
    }

    const art = require('art-async-template');
    var fn = await art.compile(path.join(__dirname, 'test.art'));
    var html = await fn({ test: new Test() });

In template use this:

    <% await test.doAsync() %>


