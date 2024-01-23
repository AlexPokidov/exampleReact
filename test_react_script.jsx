import React, { useState } from 'react';

interface Param {
  name: string;
  value: string;
}

interface Model {
  params: Param[];
}

const ParamInput = ({ param, onChange }) => {
  return (
    <div>
      <label>{param.name}</label>
      <input type="text" value={param.value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
};

const ModelEditor = ({ initialModel }) => {
  const [model, setModel] = useState<Model>(initialModel);

  const handleParamChange = (index: number, value: string) => {
    const newParams = [...model.params];
    newParams[index].value = value;
    setModel({ ...model, params: newParams });
  };

  return (
    <div>
      {model.params.map((param, index) => (
        <ParamInput key={index} param={param} onChange={(value) => handleParamChange(index, value)} />
      ))}
      <button onClick={() => console.log(model)}>Получить модель</button>
    </div>
  );
};

const App = () => {
  const initialModel: Model = {
    params: [
      { name: 'Параметр 1', value: 'Значение 1' },
      { name: 'Параметр 2', value: 'Значение 2' },
    ],
  };

  return <ModelEditor initialModel={initialModel} />;
};

export default App;
