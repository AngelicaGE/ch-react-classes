import React, {useState, useEffect} from 'react';

const dobounce = (fn, time) => {
    let timer;
    return  () =>{
        clearTimeout(timer)
        timer = setTimeout(() => {
            timer = null
            fn() // hatsa este momento ejecuto mi funcion
        }, time)
    }
}

const ResizeComponent = () => {
    const [inputInfo, setInputInfo] = useState()

    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth
      })

      useEffect(() => {
          const handleResize = dobounce( () => {
              setDimensions({height: window.innerHeight, width: window.innerWidth})
          }, 300)
        window.addEventListener("resize", handleResize)

        // remove event listener after using it to improve performance
        return () => {
            window.removeEventListener("resize", handleResize)
        }
      }, []);

      const handleClick =(event)=>{
        console.log('sintetic event ' +event) // react event it is used and created by react
        console.log('native event ' +event.nativeEvent) // regular javascript event
    }

    const handleForm = (event) => {
        event.preventDefault();
    }

    const handleInputInfo = (event) => {
        setInputInfo(event.target.value)
        console.log(event)
    }

    const handleKey = (event) => {
        // ya no se va a escribir nada
        event.preventDefault();
        console.log("Evento de onKeyDown", event)
    }
      

    const hanldleClickPropagation = (event, message) => {
        event.stopPropagation()
        console.log('Message: ' + message)
    }
  return (<div>
        {/* */}
      <h1>HIGHT {dimensions.height}</h1>
      <h1>WIDTH {dimensions.width}</h1>
      <hr />
        {/*  */}
      <button onClick={handleClick}>Click en evento</button>
      <hr />
        {/* prevent default*/}
      <form onSubmit={handleForm}>
            <input onChange={ handleInputInfo} type="text" />
            <button type='submit'>Submit form</button>
            <input onKeyDown={handleKey} type="text" name="" id="" />
        </form>  
        <p>Input info is {inputInfo}</p>

        {/* stop propagation */}
        <div onClick={(event) => hanldleClickPropagation(event, 'Desde el div')}>
            <button onClick={(event) => hanldleClickPropagation(event, 'Desde el boton')}>
                Click en boton
            </button>
        </div>

  </div>);
};

export default ResizeComponent;
