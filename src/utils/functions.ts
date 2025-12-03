function dateStringToDate(dateValue: Date) {
    if(!dateValue) 
        return undefined

    const year = dateValue.getFullYear()
    const month = dateValue.getMonth()
    const date = dateValue.getDate()

    return `${year}${month}${date}`
}

export {
    dateStringToDate
}