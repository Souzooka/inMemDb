const chai = require('chai');
const expect = chai.expect;

const inMemDb = require('../inMemDb.js');

describe('inMemDb', () => {

  describe('byId', () => {

    it('should retrieve the user by the given ID', () => {
      expect(inMemDb.byId(1)).to.be.deep.equal({ name: 'Alice', age: 12, gender: 'f', jobType: 'st' });
    });

  });

  describe('youngest', () => {

    it('should retrieve the youngest user', () => {
      expect(inMemDb.youngest()).to.be.deep.equal({ name: 'Kathy', age: 8, gender: 'f', jobType: 'na' });
    });

  });

  describe('oldest', () => {

    it('should retrieve the oldest user', () => {
      expect(inMemDb.oldest()).to.be.deep.equal({ name: 'Eric', age: 61, gender: 'm', jobType: 'dv' });
    });

  });

  describe('males', () => {

    it('should retrieve all males in the databse', () => {
      expect(inMemDb.males()).to.be.deep.equal([
        { name: 'Bob', age: 21, gender: 'm', jobType: 'dv' },
        { name: 'David', age: 9, gender: 'm', jobType: 'na' },
        { name: 'Eric', age: 61, gender: 'm', jobType: 'dv' },
        { name: 'Fred', age: 45, gender: 'm', jobType: 'dv' },
        { name: 'George', age: 38, gender: 'm', jobType: 'dv' },
        { name: 'Jake', age: 27, gender: 'm', jobType: 'dv' },
        { name: 'Liam', age: 20, gender: 'm', jobType: 'st' }
        ]);
    });

  });

  describe('females', () => {

    it('should retrieve all females in the database', () => {
      expect(inMemDb.females()).to.be.deep.equal([
        { name: 'Alice', age: 12, gender: 'f', jobType: 'st' },
        { name: 'Claire', age: 56, gender: 'f', jobType: 'dv' },
        { name: 'Hannah', age: 15, gender: 'f', jobType: 'na' },
        { name: 'Ilona', age: 17, gender: 'f', jobType: 'st' },
        { name: 'Kathy', age: 8, gender: 'f', jobType: 'na' }
        ]);
    });

  });

  describe('employees', () => {

    it('should retrieve all users of a specified employer', () => {
      expect(inMemDb.employees('N/A')).to.be.deep.equal([
        { name: 'David', age: 9, gender: 'm', jobType: 'N/A' },
        { name: 'Hannah', age: 15, gender: 'f', jobType: 'N/A' },
        { name: 'Kathy', age: 8, gender: 'f', jobType: 'N/A' }
        ]);
    });

  });

});