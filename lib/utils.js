"use strict";

const path = require('path');
const fs = require('graceful-fs');

const isFile = function isFile(path) {
  try {
    return fs.statSync(path).isFile();
  } catch (exc) {
    if (exc.code === 'ENOENT') {
      return false;
    } else {
      throw exc;
    }
  }
};

const isDirectory = function isDirectory(path) {
  try {
    return fs.statSync(path).isDirectory();
  } catch (exc) {
    if (exc.code === 'ENOENT') {
      return false;
    } else {
      throw exc;
    }
  }
};

const listDir = function listDir(dir, itemType) {
  return fs.readdirSync(dir)
    .map(file => path.join(dir, file))
    .map(file => ({ path: file, stat: fs.statSync(file) }))
    .filter(fileObj => {
      if (itemType === 'directory' && fileObj.stat.isDirectory()) {
        return true;
      } else if (itemType === 'file' && fileObj.stat.isFile()) {
        return true;
      } else return !itemType;
    });
};

/**
 * Reads and parses JSON file
 * @param {string} filepath
 * @returns {object}
 */
const loadJsonFile = function loadJsonFile(filepath) {
  return JSON.parse(fs.readFileSync(filepath, 'utf8'));
};

// Exports
exports.isFile = isFile;
exports.isDirectory = isDirectory;
exports.listDir = listDir;
exports.loadJsonFile = loadJsonFile;