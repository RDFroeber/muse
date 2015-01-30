# muse 

A CMS Scaffolding Tool (Coming Soon)

[![NPM Version](https://img.shields.io/npm/v/muse.svg?style=flat)](https://www.npmjs.org/package/muse)
[![Dependency Status](https://david-dm.org/RDFroeber/muse.svg)](https://david-dm.org/RDFroeber/muse)
[![devDependency Status](https://david-dm.org/RDFroeber/muse/dev-status.svg?theme=shields.io)](https://david-dm.org/RDFroeber/muse#info=devDependencies)
[![Build Status](https://travis-ci.org/RDFroeber/muse.svg?branch=master)](https://travis-ci.org/RDFroeber/muse)

This package is in the early stages of development. Feel free to browse the code and star for review at a later date. However, use of the module is not recommended at the current version. Basic CMS functionality will be available in the 0.2.0 release. All 0.1.x versions are for project setup and testing.

## Installation

**Note: Current Release Is Not Suitable For Use**

```sh
npm install muse -g
```

Source code can be found [here](https://github.com/RDFroeber/muse).

## Usage

While many command options are listed here, very few are actually implemented to date. I will update this document as more become available.

```sh
  Usage: muse init [options]

  Options:

    -h, --help              output usage information
    -V, --version           output the version number
    -a, --auth              choose authentication strategy (basic|oauth|both) defaults to basic
    -p, --private           make your site private by requiring users to log in
    -n, --noblog            remove blog functionality from site
    -c, --css <engine>      add stylesheet engine support (sass|less) defaults to sass
    -e, --view <engine>     add view engine support (ejs|handlebars) defaults to ejs
    -f, --framework <name>  add client-side framework support (angular|ember) defaults to none
```
## File Structure

![alt tag](./tree.png)

## Development Task List

* Finalize default configuration and structure
    * Basic mongoose models and CRUD operations for Users, Pages, Blogs, and Posts
    * Separate view routes from API routes in preparation for client-side framework support
* User Authentication (Passport)
    * Basic user auth
    * OAuth support for Google+, Twitter, and Facebook
    * Both
* Blog functionality
    * Single blog with multiple posts (without comments)
    * Single blog with multiple posts (with comments)
* Admin functionality without permissions
* Admin functionality with roles and multi-part permissions
    * Content creation and editing
    * Content publication
    * Content deletion
    * User viewing
    * User creation and editing
* Navigation
    * Single top level page routing
    * Additional secondary level routing


### Backlog

* Add tutorial option for base website generation
* Email system support (Mailgun)
    * Account creation
    * Newsletters
* Add multiple client-side framework support 
    * Angular
    * Ember
    * Backbone
* Add multiple Node.js framework support 
    * Koa
    * Sails
    * Hapi
* Multi-blog support

## Tests

Not implemented.

```sh
npm test
```

## Dependencies

- [commander](https://github.com/tj/commander.js): The complete solution for node.js command-line programs
- [mkdirp](https://github.com/substack/node-mkdirp): Recursively mkdir, like `mkdir -p`
- [rimraf](https://github.com/isaacs/rimraf): A deep deletion module for node (like `rm -rf`)
- [underscore](https://github.com/jashkenas/underscore): JavaScript's functional programming helper library.

## Dev Dependencies

- [chai](https://github.com/chaijs/chai): BDD/TDD assertion library for node.js and the browser. Test framework agnostic.
- [mocha](https://github.com/mochajs/mocha): A simple, flexible, fun test framework
- [sinon](https://github.com/cjohansen/Sinon.JS): JavaScript test spies, stubs and mocks.

## License

MIT
