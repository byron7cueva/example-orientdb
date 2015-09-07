'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _orientjs = require('orientjs');

var _orientjs2 = _interopRequireDefault(_orientjs);

var _configDatabaseJson = require('../config/database.json');

var _configDatabaseJson2 = _interopRequireDefault(_configDatabaseJson);

var Connection = (function () {
	function Connection() {
		_classCallCheck(this, Connection);

		this.server = (0, _orientjs2['default'])(_configDatabaseJson2['default']);
		this.db;
	}

	_createClass(Connection, [{
		key: 'connect',
		value: function connect() {
			this.db = this.server.use(_configDatabaseJson2['default'].database);
		}
	}]);

	return Connection;
})();

exports['default'] = Connection;
module.exports = exports['default'];