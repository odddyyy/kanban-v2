module.exports = (date) => {
    const array = date.split('T')
    const d = new Date(array[0])
    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d)
    const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
    const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)
    
    return `${da}-${mo}-${ye}`
}