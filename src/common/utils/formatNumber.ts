const MILLION = 1000000
const THOUSAND = 1000

export const formatNumber = (num: number): string => {
    if (num >= MILLION) {
        return `${Math.floor(num / MILLION)}m`
    } else if (num >= THOUSAND) {
        return `${Math.floor(num / THOUSAND)}k`
    }
    return `${num}`
}
