# jspm-fs
JSPM registry implementation for your local filesystem (including paths to mounted network shares). Using `jspm-fs` you can operate a simple stupid *offline package registry* which consists just of a bunch of folders and files. Version informations are derived from the filename.

__Supports windows, mac and linux-based operating systems.__


## Installation

First install the actual JSPM extension package:

```shell
npm install jspm-fs
```

and then create & configure it

```shell
jspm registry create fs jspm-fs
```

## Configuration

Everything `jspm-fs` takes, is the absolute path to the root directory where all package release files reside in. A *package release file* is just a **zip file** containing the actual package source (exactly as expected from npm/jspm).

The recommended way to configure this directory path is to use the command `jspm registry config fs`. But you can also introduce an environment variable called `JSPM_REGISTRY_FS_BASEDIR` and set it to the valid absolute directory path.

## How to publish packages

Package release files must be named according to the following scheme: `{package-name}-{version}.zip`. Whereas `{package-name}` corresponds to the official package name as contained in the `name` package.json property, and `{version}` is an arbitrary version identifier (both, semver-compatible and symbolic version identifiers are allowed). Since our registry may contain multiple versions of the same package and we want to keeps things clear, they must furthermore be grouped into sub-directories whose name corresponds to the according package name.

Let's illustrate this with an example: We have a fictitious package called `my-package` which is available in 3 different version. Our package registry base directory So our registry base directory will look like this:

```
/path/to/our/registry/basedir
    |-- my-package
        |-- my-package-0.0.1.zip
        |-- my-package-0.1.0.zip
        |-- my-package-1.0.0.zip
```

## Meta

My appreciation belongs to @guybedford for his awesome work on systemjs, jspm and everything in between.

If you find a bug or have question, please use the issue page of this repository.