const BTCinSAT = 100000000

export const satToBtc = (sats) => {
    return (sats / BTCinSAT).toFixed(5)
}
