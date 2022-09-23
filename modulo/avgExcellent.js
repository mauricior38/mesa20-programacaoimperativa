let pessoas = require('./userData')

let avgExcellent = {
  avgExcellent: (array) => {
    let qtdOtimo = 0;
    let qtdBom = 0;
    let qtdRegular = 0;
    let soma = 0;
    let media = 0;
    let porcento = 0;

    array.forEach((item) => {
      if (item.opiniao === 3) {
        qtdOtimo++;
        soma = soma + item.idade;
        media = soma / qtdOtimo;
      }

      if (item.opiniao === 1) {
        qtdRegular++;
      }

      if (item.opiniao === 2) {
        qtdBom++;
      }
    });

    porcento = (qtdBom * 100) / array.length;

      return `
      =================================== RESULTADO ===================================
      
      RESPOSTA 01) ${qtdOtimo} pessoas responderam ótimo e a média de idade entre elas foi de ${qtdOtimo}. \n
      RESPOSTA 02) A quantidade de pessoas que respondeu regular foi de ${qtdRegular}.\n
      RESPOSTA 03) A porcengatem de pessoas que responderam bom foi de ${porcento.toFixed(2)}%.

      =================================== RESULTADO =================================== 
      `
      
  },
};


module.exports = avgExcellent;