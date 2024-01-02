export const getCookies = (document?: Document): { [key: string]: string } | null => {
    if (!document) return null
    const cookies = document.cookie.split('; ')
    const cookiesObj = cookies.map(item => {
        const cookie = item.split('=')
        return { [cookie[0]]: cookie[1] }
    })
    const result: { [key: string]: string } = cookiesObj.reduce((a, b) => {
        return ({
            ...a,
            ...b
        })
    })
    return result
}