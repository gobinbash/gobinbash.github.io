import Meta from '../components/meta'

export default () => (
    <div className="app">
        <Meta/>
        <h1 className="logo"> <span className="red"><i className="fa fa-heart" aria-hidden="true"></i></span> #!/bin/bash</h1>
        <style jsx>
            {`
                .logo{
                    font-family: Inconsolata,monospace;
                    font-size:4em;
                }
            `}
        </style>
    </div>
)