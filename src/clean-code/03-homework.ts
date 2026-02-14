(() => {


    // Resolver sin la triple condicional dentro del if
    // includes? arrays?
    function isRedFruit( fruit: string ): boolean {
        
        /*if ( fruit === 'manzana' || fruit === 'cereza' || fruit === 'ciruela' ) {
            return true;
        } else {
            return false;
        }*/
        const validFruits= ['manzana', 'cereza', 'ciruela'];
        return validFruits.includes(fruit)
    }

    // Simplificar esta función
    // switch? Object literal? validar posibles colores
    function getFruitsByColor( color: string ): string[] {

        /*if ( color === 'red' ) {
            return ['manzana','fresa'];
        } else if ( color === 'yellow') {
            return ['piña','banana'];
        } else if ( color === 'purple') {
            return ['moras','uvas']
        } else {
            throw Error('the color must be: red, yellow, purple');
        }*/
        const fruitsByColor: Record<string, string[]> = {
            'red': ['manzana','fresa'],
            'yellow': ['piña','banana'],
            'purple': ['moras','uvas']
        }
        const fruits = fruitsByColor[color];
        if(!fruits)  throw new Error('the color must be: red, yellow, purple');

        return fruits;
    }

    // Simplificar esta función
    let isFirstStepWorking  = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking  = true;
    let isFourthStepWorking = true;
    // "Pyramid of Doom" problem
    function workingSteps() {
        /*if( isFirstStepWorking === true ) {
            if( isSecondStepWorking === true ) {
                if( isThirdStepWorking === true ) {
                    if( isFourthStepWorking === true ) {
                        return 'Working properly!';
                    }
                    else {
                        return 'Fourth step broken.';
                    }
                }
                else {
                    return 'Third step broken.';
                }
            }
            else {
                return 'Second step broken.';
            }
        }
        else {
            return 'First step broken.';
        }*/
        //aca apliacamos: Cláusulas de Guarda (Guard Clauses).
        if(!isFirstStepWorking) return 'First step broken.';
        if(!isSecondStepWorking) return 'Second step broken.';
        if(!isThirdStepWorking) return 'Third step broken.';
        if(!isFourthStepWorking) return 'Fourth step broken.';
        return 'Working properly!';
    }


    // isRedFruit
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // false

    //getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
    //console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

    // workingSteps
    console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados


})();





