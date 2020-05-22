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

exports.list = () => employees;
exports.view = (id) => {
    employees.find(e => e.id == id);
};