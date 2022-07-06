export function formataReal(centavos : number | undefined) {
    function AdicionaPonto(semPonto : string) {
        const [antesVirgula, depoisVirgula] = semPonto.split(',');
        const antesVirgulaInvertido = antesVirgula.split('').reverse().join('');
        let antesVirgulaFormatadoInvertido = '';
        for (let i = 0; i < antesVirgulaInvertido.length; i++) {
            antesVirgulaFormatadoInvertido += antesVirgulaInvertido[i];
            if ((i + 1) % 3 === 0 && i + 1 < antesVirgulaInvertido.length) antesVirgulaFormatadoInvertido += '.';
        }
        const antesVirgulaFormatado = antesVirgulaFormatadoInvertido.split('').reverse().join('');
        return [antesVirgulaFormatado, depoisVirgula].join(',');
    }
    if (!centavos) {
        return `R$ 0,00`
    }
    const semPontos = (centavos/100).toFixed(2).replace('.', ',');
    const formatado  = AdicionaPonto(semPontos);
    return `R$ ${formatado}`;
}