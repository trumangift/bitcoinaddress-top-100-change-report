"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var staticFile = express.static('dist');
exports.staticFile = staticFile;
