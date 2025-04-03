const numerosParesEntre = (num1, num2) => {
    const inicio = Math.min(num1, num2);
    const fin = Math.max(num1, num2);
    
    for (let i = inicio; i <= fin; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
};