'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Connection = require('./Connection');

var _Connection2 = _interopRequireDefault(_Connection);

var PersonDao = (function () {
	function PersonDao() {
		_classCallCheck(this, PersonDao);

		this.connection = new _Connection2['default']();
		this.connection.connect();
	}

	_createClass(PersonDao, [{
		key: 'getAllPerson',
		value: function getAllPerson() {
			var _this = this;

			return new Promise(function (resolve, reject) {
				_this.connection.db.query('select from person').then(function (result) {
					resolve(result);
				})['catch'](function (error) {
					reject(error);
				});
			});
		}
	}, {
		key: 'getPersonForName',
		value: function getPersonForName(name) {
			var _this2 = this;

			return new Promise(function (resolve, reject) {
				_this2.connection.db.select().from('person').where({ name: name }).one().then(function (findPerson) {
					resolve(findPerson);
				})['catch'](function (error) {
					reject(error);
				});
			});
		}
	}, {
		key: 'getPersonForId',
		value: function getPersonForId(rid) {
			var _this3 = this;

			return new Promise(function (resolve, reject) {
				_this3.connection.db.select().from('person').where({ rid: rid }).one().then(function (findPerson) {
					resolve(findPerson);
				})['catch'](function (error) {
					reject(error);
				});
			});
		}
	}, {
		key: 'insert',
		value: function insert(info) {
			var _this4 = this;

			return new Promise(function (resolve, reject) {
				_this4.connection.db.query("insert into person(name, surname, age) values(:name, :surname, :age)", {
					params: info
				}).then(function (insertPerson) {
					resolve(insertPerson[0]);
				})['catch'](function (error) {
					reject(error);
				});
			});
		}
	}, {
		key: 'update',
		value: function update(person) {
			var _this5 = this;

			return new Promise(function (resolve, reject) {
				_this5.connection.db.update('person').set({ surname: person.surname, age: person.age }).where({ name: person.name }).scalar().then(function (total) {
					resolve(total);
				})['catch'](function (error) {
					reject(error);
				});
			});
		}
	}, {
		key: 'delete',
		value: function _delete(rid) {
			var _this6 = this;

			return new Promise(function (resolve, reject) {
				_this6.connection.db['delete']().from('person').where({ '@rid': rid }).limit(1).scalar().then(function (result) {
					resolve(result);
				})['catch'](function (error) {
					reject(error);
				});
			});
		}
	}]);

	return PersonDao;
})();

exports['default'] = PersonDao;
module.exports = exports['default'];