import Connection from './Connection';

class PersonDao {
	constructor() {
		this.connection = new Connection();
		this.connection.connect();
	}

	getAllPerson() {
		return new Promise((resolve, reject) => {
			this.connection.db.query('select from person')
			.then(result => {
				resolve(result);
			})
			.catch(error => {
				reject(error);
			});
		});
	}

	getPersonForName(name) {
		return new Promise((resolve, reject) => {
			this.connection.db.select().from('person').where({name: name}).one()
				.then(findPerson => {
					resolve(findPerson);
				})
				.catch(error => {
					reject(error);
				});
		});
	}

	getPersonForId(rid) {
		return new Promise((resolve, reject) => {
			this.connection.db.select().from('person').where({rid: rid}).one()
				.then(findPerson => {
					resolve(findPerson);
				})
				.catch(error => {
					reject(error);
				});
		});
	}

	insert(info) {
		return new Promise((resolve, reject) => {
				this.connection.db.query("insert into person(name, surname, age) values(:name, :surname, :age)",{
				params: info
			})
			.then(insertPerson => {
				resolve(insertPerson[0]);
			})
			.catch(error => {
				reject(error);
			});
		});
	}

	update(person) {
		return new Promise((resolve, reject) => {
			this.connection.db.update('person').set({surname: person.surname, age: person.age}).where({name: person.name}).scalar()
			.then(total => {
				resolve(total);
			})
			.catch(error => {
				reject(error);
			});
		});
	}

	delete(rid) {
		return new Promise((resolve, reject) => {
			this.connection.db.delete().from('person').where({'@rid': rid}).limit(1).scalar()
			.then(result => {
				resolve(result);
			})
			.catch(error => {
				reject(error);
			});
		});
	}

}

export default PersonDao;