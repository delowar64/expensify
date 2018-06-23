import moment from 'moment'
export default [
    {
        id: '1',
        description: 'Car',
        note: 'Blank',
        amount: 500,
        createdAt: moment(0).valueOf()
    },
    {
        id: '2',
        description: 'Rent',
        note: 'Blank',
        amount: 700,
        createdAt: moment(0).subtract(4, 'day').valueOf()
    },
    {
        id: '3',
        description: 'Credit Card',
        note: 'Blank',
        amount: 600,
        createdAt: moment(0).add(4, 'day').valueOf()
    }
]