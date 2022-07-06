export function formataCelular(numero: string) {
    return `+${numero.substr(1, 2)} (${numero.substr(3, 2)}) ${numero.substr(5, 5)}-${numero.substr(10)}`
}