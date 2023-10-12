interface User {
    readonly dbId: number,
    email: string,
    usedId: number,
    googleId?: string,
    startTrial: () => string
}

const mizan: User = {
    dbId: 43, email: 'mr@gmail.com', usedId: 1234,
    startTrial: () => {
        return 'Coding is typical'
    }
}
