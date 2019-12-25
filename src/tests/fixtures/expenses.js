import moment from 'moment';

export const expenseOne = {
     id: '1',
        note: 'rent',
        description: 'description for rent',
        amount: 10,
        createdAt: 0
}

export const expenseTwo = {
     id: '2',
        note: 'gas',
        description: 'description for gas',
        amount: 100,
        createdAt: moment(0).subtract(4, 'days').valueOf()
}

export const expenseThree = {
     id: '3',
        note: 'water',
        description: 'description for water',
        amount: 1000,
        createdAt: moment(0).add(4, 'days').valueOf()
}

export const expenses = [expenseOne, expenseTwo, expenseThree]