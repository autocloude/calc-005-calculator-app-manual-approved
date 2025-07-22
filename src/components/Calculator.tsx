'use client';

import { useState } from 'react';

type Operation = '+' | '-' | '*' | '/';

interface CalculatorState {
  display: string;
  previousValue: number | null;
  operation: Operation | null;
  waitingForNewValue: boolean;
}

export default function Calculator() {
  const [state, setState] = useState<CalculatorState>({
    display: '0',
    previousValue: null,
    operation: null,
    waitingForNewValue: false,
  });

  const inputNumber = (num: string) => {
    if (state.waitingForNewValue) {
      setState({
        ...state,
        display: num,
        waitingForNewValue: false,
      });
    } else {
      setState({
        ...state,
        display: state.display === '0' ? num : state.display + num,
      });
    }
  };

  const inputOperation = (nextOperation: Operation) => {
    const inputValue = parseFloat(state.display);

    if (state.previousValue === null) {
      setState({
        ...state,
        previousValue: inputValue,
        operation: nextOperation,
        waitingForNewValue: true,
      });
    } else if (state.operation) {
      const currentValue = state.previousValue || 0;
      const newValue = calculate(currentValue, inputValue, state.operation);

      setState({
        display: String(newValue),
        previousValue: newValue,
        operation: nextOperation,
        waitingForNewValue: true,
      });
    }
  };

  const calculate = (firstValue: number, secondValue: number, operation: Operation): number => {
    switch (operation) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '*':
        return firstValue * secondValue;
      case '/':
        return secondValue !== 0 ? firstValue / secondValue : 0;
      default:
        return secondValue;
    }
  };

  const performCalculation = () => {
    const inputValue = parseFloat(state.display);

    if (state.previousValue !== null && state.operation) {
      const newValue = calculate(state.previousValue, inputValue, state.operation);

      setState({
        display: String(newValue),
        previousValue: null,
        operation: null,
        waitingForNewValue: true,
      });
    }
  };

  const clearAll = () => {
    setState({
      display: '0',
      previousValue: null,
      operation: null,
      waitingForNewValue: false,
    });
  };

  const clearEntry = () => {
    setState({
      ...state,
      display: '0',
    });
  };

  return (
    <div className="max-w-xs mx-auto mt-10 bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
      <div className="p-4">
        {/* Display */}
        <div className="bg-black text-white text-right text-3xl p-4 rounded-lg mb-4 min-h-[60px] flex items-center justify-end">
          {state.display}
        </div>

        {/* Button Grid */}
        <div className="grid grid-cols-4 gap-2">
          {/* Row 1 */}
          <button
            onClick={clearAll}
            className="col-span-2 bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-4 rounded-lg transition-colors"
          >
            AC
          </button>
          <button
            onClick={clearEntry}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-4 rounded-lg transition-colors"
          >
            CE
          </button>
          <button
            onClick={() => inputOperation('/')}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-4 rounded-lg transition-colors"
          >
            ÷
          </button>

          {/* Row 2 */}
          <button
            onClick={() => inputNumber('7')}
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-4 rounded-lg transition-colors"
          >
            7
          </button>
          <button
            onClick={() => inputNumber('8')}
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-4 rounded-lg transition-colors"
          >
            8
          </button>
          <button
            onClick={() => inputNumber('9')}
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-4 rounded-lg transition-colors"
          >
            9
          </button>
          <button
            onClick={() => inputOperation('*')}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-4 rounded-lg transition-colors"
          >
            ×
          </button>

          {/* Row 3 */}
          <button
            onClick={() => inputNumber('4')}
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-4 rounded-lg transition-colors"
          >
            4
          </button>
          <button
            onClick={() => inputNumber('5')}
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-4 rounded-lg transition-colors"
          >
            5
          </button>
          <button
            onClick={() => inputNumber('6')}
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-4 rounded-lg transition-colors"
          >
            6
          </button>
          <button
            onClick={() => inputOperation('-')}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-4 rounded-lg transition-colors"
          >
            −
          </button>

          {/* Row 4 */}
          <button
            onClick={() => inputNumber('1')}
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-4 rounded-lg transition-colors"
          >
            1
          </button>
          <button
            onClick={() => inputNumber('2')}
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-4 rounded-lg transition-colors"
          >
            2
          </button>
          <button
            onClick={() => inputNumber('3')}
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-4 rounded-lg transition-colors"
          >
            3
          </button>
          <button
            onClick={() => inputOperation('+')}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-4 rounded-lg transition-colors"
          >
            +
          </button>

          {/* Row 5 */}
          <button
            onClick={() => inputNumber('0')}
            className="col-span-2 bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-4 rounded-lg transition-colors"
          >
            0
          </button>
          <button
            onClick={() => inputNumber('.')}
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-4 rounded-lg transition-colors"
          >
            .
          </button>
          <button
            onClick={performCalculation}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-4 rounded-lg transition-colors"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}
