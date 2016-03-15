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

### Aliasing

Similarly as known from the default `jspm-registry`, you can define package name lookup aliases in a *jspm-fs* registry folder. When *jspm-fs* detects a JSON file called `aliases.json` in the global registry base directory:

```
/path/to/our/registry/basedir
    |-- aliases.json
```

it expects the file to contain a plain object with key-value string pairs whereas `key` is the exact package name and `value` is the package identifier (JSPM-style scheme) the lookup request should be redirected to. Example `aliases.json` file content:

```json
{
  "jquery": "jspm:jquery",
  "my-package": "npm:my-package"
}
```

## How to publish packages

Package release files must be named according to the following scheme: `{package-name}-{version}.zip`. Whereas `{package-name}` corresponds to the official package name as contained in the `name` package.json property, and `{version}` is an arbitrary version identifier (both, semver-compatible and symbolic version identifiers are allowed). Since our registry may contain multiple versions of the same package and we want to keeps things clear, they must furthermore be grouped into sub-directories whose name corresponds to the according package name.

Let's illustrate this with an example: We have a fictitious package called `my-package` which is available in 3 different version. Our package registry base directory So our registry base directory will look like this:

```
/path/to/our/registry/basedir
    |-- aliases.json
    |-- my-package
        |-- my-package-0.0.1.zip
        |-- my-package-0.1.0.zip
        |-- my-package-1.0.0.zip
```

By using this naming convention we get a semver-based versioning syntax

## Meta

My appreciation belongs to @guybedford for his awesome work on systemjs, jspm and everything in between.

If you find a bug or have question, please use the issue page of this repository.