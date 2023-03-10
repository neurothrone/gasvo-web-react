import React, {useState} from "react";

const defaultFormData = {
  nps: "",
  length: "",
  pressure: "",
};

function App2() {
  const [formData, setFormData] = useState(defaultFormData);
  const {nps, length, pressure} = formData;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(formData);
    // setFormData(defaultFormData);
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <>
      <h1>GasVo</h1>

      <form onSubmit={onSubmit}>
        <label htmlFor="nps">NPS</label>
        <br/>
        <input type="text" id="nps" value={nps} onChange={onChange}/>
        <br/>
        <br/>

        <label htmlFor="length">Length</label>
        <br/>
        <input type="text" id="length" value={length} onChange={onChange}/>
        <br/>
        <br/>

        <label htmlFor="pressure">Pressure</label>
        <br/>
        <input type="text" id="pressure" value={pressure} onChange={onChange}/>
        <br/>
        <br/>

        <button type="submit">Upload post</button>
      </form>
    </>
  );
}
