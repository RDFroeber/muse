# muse 

A CMS Scaffolding Tool (Coming Soon)

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
    -c, --css <engine>      add stylesheet engine support (sass|less)
    -f, --framework <name>  add client-side framework support (angular|ember)
```

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
    * Loopback
    * Sails
* Multi-blog support

## Tests

Not implemented.

```sh
npm install
npm test
```

## Dependencies

- [commander](https://github.com/tj/commander.js): The complete solution for node.js command-line programs
- [mkdirp](https://github.com/substack/node-mkdirp): Recursively mkdir, like `mkdir -p`

## Dev Dependencies

None as of now.

## License

MIT
