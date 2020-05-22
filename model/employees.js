
const db = require('../db');

const employees = [
    {
        id: 1,
        name: 'John',
        email: 'AAAA',
        address: 'BBBB',
        phone: 'CCCC'
    },
    {
        id: 2,
        name: 'DADADA',
        email: 'FFF',
        address: 'HHH',
        phone: '0909'
    },
    {   
        id: 3,
        name: 'FAFAF',
        email: 'GGG',
        address: 'AAAA',
        phone: '09088'
    },
];

exports.list = async () => {
    const { rows } = await db.query('SELECT * FROM employee');
    return rows;
}

exports.view = async (id) => {
    // return employees.find(e => e.id == id); // NOTE: WE forgot to add return.

    const { rows } = await db.query('SELECT * FROM employee WHERE id = $1', [id]);
    return rows.length ? rows[0] : null;
};