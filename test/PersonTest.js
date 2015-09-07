import 	{expect, assert} from 'chai';
import PersonDao from '../dist/PersonDao';

describe('Obtener personas', () => {
	let personDao;
	before(() => {
		personDao  = new PersonDao();
	});

	it('Deberia obtener un array de personas', (done) => {
		
		personDao.getAllPerson()
			.then(result => {
				assert.isArray(result);
				console.log(result);
				done();
			})
			.catch(error => {
				done(error);
			})
	});

	it('Deberia insertar una persona', (done) => {
		let newPerson = {name:'Luis',surname:'Morales',age:20};
		personDao.insert(newPerson)
			.then(savePerson => {
				expect(savePerson.name).to.equals(newPerson.name);
				expect(savePerson.surname).to.equals(newPerson.surname);
				expect(savePerson.age).to.equals(newPerson.age);
				expect(savePerson).to.have.property('@rid');
				console.log(savePerson);
				done();
			})
			.catch(error => {
				done(error);
			})
	});

	it('Deberia actualizar una persona', (done) => {
		let findPerson = null;
		personDao.getPersonForName('Byron')
			.then(person => {
				console.log(person);
				person.surname = 'Cabrera';
				person.age = 20;
				return personDao.update(person);
			})
			.then(total => {
				return personDao.getPersonForName('Byron');
			})
			.then(updatePerson => {
				expect(updatePerson.surname).to.equals('Cabrera');
				expect(updatePerson.age).to.equals(20);
				console.log(updatePerson);
				done();
			})
			.catch(error => {
				done(error);
			})
	});

	it('Deberia eliminar una persona', (done) => {
		let newPerson = {name:'Maria', surname:'Rodriguez', age: 17};
		let rid = null;
		personDao.insert(newPerson)
			.then(savePerson => {
				return personDao.getPersonForName('Maria');
			})
			.then(findPerson => {
				expect(findPerson).to.have.property('@rid');
				rid = findPerson['@rid'].toString();
				console.log(rid);
				return personDao.delete(rid);
			})
			.then(result => {
				return personDao.getPersonForId(rid);
			})
			.then(personDelete => {
				console.log(personDelete);
				expect(personDelete).to.be.a('undefined');
				done();
			})
			.catch(error => {
				done(error);
			});
	});
})