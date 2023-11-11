// Crie uma função que recebe como parâmetro
//a quantidade de vitórias e derrotas de um jogador,
//depois disso retorne o resultado para uma variável,
//o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

function calculateLevel(victories, defeats) {
    const totalVictories = victories - defeats;
    let level = "";

    if (victories < 10) {
        level = "Ferro";
    } else if (victories >= 10 && victories <= 20) {
        level = "Bronze";
    } else if (victories >= 21 && victories <= 50) {
        level = "Prata";
    } else if (victories >= 51 && victories <= 80) {
        level = "Ouro";
    } else if (victories >= 81 && victories <= 90) {
        level = "Diamante";
    } else if (victories >= 91 && victories <= 100) {
        level = "Lendário";
    } else {
        level = "Imortal";
    }

    return `O Herói tem um saldo de ${totalVictories} e está no nível de ${level}`;
}

//Exemplo:

const victories = 0;
const defeats = 0;
const result = calculateLevel(victories, defeats);

console.log(result);
