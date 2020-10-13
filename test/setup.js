'use strict';
process.env.NODE_ENV = 'test';
process.env.JWT_SECRET = 'test-jwt-secret';

const { expect } = require('chai');
const supertest = require('supertest');

global.expect = expect;
global.supertest = supertest;