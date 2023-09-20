import React from 'react'

const InputCity = ({cityName, setCityName}) => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Ingresa una ciudad</label>
        <input type="email" className="form-control" id="exampleInputEmail1"    aria-describedby="emailHelp" value={cityName} onChange={(e) => setCityName(e.target.value)}/>
      </div>
    </form>
  )
}

export default InputCity