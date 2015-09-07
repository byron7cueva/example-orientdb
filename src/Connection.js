import OrientDB from 'orientjs';
import dataBaseConfig from '../config/database.json';

class Connection
{
	constructor() {
		this.server = OrientDB(dataBaseConfig);
		this.db;
	}

	connect() {
		this.db = this.server.use(dataBaseConfig.database);
	}
}

export default Connection;