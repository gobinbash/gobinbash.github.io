import Meta from '../components/meta'

export default () => (
    <div className="app">
        <Meta title="Binbash.co"/>
        <h1 className="logo"> <span className="red">❤</span> #!/bin/bash</h1>
        <p className="red" style={ {fontSize: '1.5em'}}> /** Coming Soon ! **/ </p>
        <style jsx>
            {`
             .logo{
                    font-family: Inconsolata,monospace;
                    font-size:6em;
                    color: #ddd;
                }
                @media (max-width: 600px) {
                    .logo{
                        font-size: 3.5em;
                    }
                }
                @media (max-width: 300px) {
                    .logo{
                      font-size: 2em;
                    }
                }

                .red {
                    color:red;
                    animation: colorAnimation 2s infinite;
                }

                @keyframes colorAnimation {
                    10%{
                      color: red;
                    }
                    20%{
                      color: #f44336;
                    }
                    30%{
                      color:#E91E63;
                    }
                    40%{
                      color:#9C27B0;
                    }
                    50%{
                      
                    }
                    60%{
                      color:#009688;
                    }
                    70%{
                      color: #FFEB3B;
                    }
                    100%{
                      color: blue;
                    }
            `}
        </style>
    </div>
)