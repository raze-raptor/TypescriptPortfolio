function App() {
  return (


  /* hero */
  <div id="hero" className="hero min-h-screen bg-base-200">
    <div className="hero-content">


      {/* code box */}
      <div className="glass p-4 rounded-lg shadow-lg w-145 max-w-2xl h-56 flex flex-col justify-center items-center">
        <div className="mockup-code w-full max-w-2xl">
          <pre data-prefix=":~$">
            <code id="whoami" className="text-lg typewriter-cursor text-green-500 w- max-w-2x1 whoami">whoami</code>
          </pre>
        </div>
        {/*end of code box */}

        <p id="start-execute" className="elipsis bounce5s">press enter</p>
      </div>
      
      


    </div>
  </div>
  /* end of hero */

  )
}

export default App
