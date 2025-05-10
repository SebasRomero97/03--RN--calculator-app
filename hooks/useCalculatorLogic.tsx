import { useEffect, useRef, useState } from "react"


    enum Operator {
        add = '+',
        substract = '-',
        multiply = 'X',
        divide = '/'
    }

export function useCalculatorLogic() {

    const lastOperation = useRef<Operator>(null) // aca se va a guardar el ultimo operador seleccionado para saber que tengo que hacer con el numero que tengo y el nuevo numero ingresado

    const [formula, setFormula] = useState('') //para mostrar toda la expresion algebraica ej: 50x50-21+2
    const [number, setNumber] = useState('0') //para tomar el nuevo numero ingresado
    const [prevNumber, setPrevNumber] = useState('0') //para manejar el valor que ya tengo en la calculadora

    useEffect(() => {
        // cada que cambia la formula debo de hacer el calculo que esta en dicha formula
        const subResult = calcularSubResult();
        if (formula !== String(subResult)){
            setPrevNumber(`${subResult}`)
        }
    }, [formula])

    useEffect(() => {
        // cada que cambia el numero actual (se ingresa un numero nuevo) las cosas cambian y debo actualizar lo que se muestra
        if (lastOperation.current) {
            const firstPartOfFormula = formula.split(' ').at(0)
            setFormula(`${firstPartOfFormula} ${lastOperation.current} ${number}`)
        }else{
            setFormula(number)
        }
    
    }, [number])
    
    const calcularSubResult = () => {
        const [firstNumber, operator, secondNumber ] = formula.split(' ')

        const num1 = Number(firstNumber);
        const num2 = Number(secondNumber);

        if (isNaN(num2)){return num1} 

        switch (operator) {
            case Operator.add:
                return num1 + num2
            case Operator.divide:
                return num1 / num2
            case Operator.multiply:
                return num1 * num2
            case Operator.substract:
                return num1 - num2
            default:
                throw new Error(`El operador ${operator} no esta implementado.`);
        }
    }

    const guardarLastNumber = () => {
        //TODO: algo que nose que es todavia

        if (number.endsWith('.')) {
            setNumber(number.slice(0,-1))
        }

        setPrevNumber(number);
        setNumber('0')
    }

    const divideOperator = () => {
        guardarLastNumber();
        lastOperation.current = Operator.divide
    }

    const multiplyOperator = () => {
        guardarLastNumber();
        lastOperation.current = Operator.multiply
    }
    const addOperator = () => {
        guardarLastNumber();
        lastOperation.current = Operator.add
    }
    const substractOperator = () => {
        guardarLastNumber();
        lastOperation.current = Operator.substract
    }

    const toggleSign = () => {
        if (number.includes('-')){
            setNumber(number.slice(1))
        }else{
            setNumber('-' + number)
        }
    }

    const delOperator = () => {
        setNumber(number.slice(0, -1))
        if (number.length === 2 && number.startsWith('-')){
            setNumber('0')
        }
        if ( number.length === 1 ) {
            setNumber('0')
        }
    }

    const calcularResultado = () => {
        const result = calcularSubResult();
        setNumber(`${result}`)
        setFormula(`${result}`);
        
        lastOperation.current = null;
        setPrevNumber('0')
        
    }

    const buildNumber = (num:string) => { // se va a encargar de armar la expresion a mostrar y controlar de que este bien ej: 000001.3(mal) => 1.3(bien)
        if( number.includes('.') && num === '.' ) {
            return
        }

        if ( number.startsWith('0') || number.startsWith('-0') ) {
            if ( num === '.') {
                return setNumber(number + num)
            }

            if ( num === '0' && number.includes('.') ) {
                return setNumber(number + num)
            }

            if ( num !== '0' && !number.includes('.') ) {
                return setNumber(num)
            }

            if ( num === '0' && !number.includes('.') && number === '0' ) {
                return
            }

        }

        setNumber(number + num)
    }

    const reset = () => {
        setFormula('0')
        setNumber('0')
        setPrevNumber('0')
    }
  return {
    // valores
    number,
    prevNumber,
    formula,

    // funciones
    buildNumber,
    reset,
    toggleSign,
    divideOperator,
    delOperator,
    multiplyOperator,
    addOperator,
    substractOperator,
    calcularSubResult,
    calcularResultado,

  }
}