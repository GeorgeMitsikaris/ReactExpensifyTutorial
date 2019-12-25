export const setTextFilter = (text = '') =>({
    type: 'SET_TEXT_FILTER',
    text
})

export const shortByAmount = () =>({
    type: 'SHORT_BY_AMOUNT'
})
export const shortByDate = () =>({
    type: 'SHORT_BY_DATE'
})

export const setStartDate = (date) =>({
    type: 'SET_START_DATE',
    date
})

export const setEndDate = (date) =>({
    type: 'SET_END_DATE',
    date
})