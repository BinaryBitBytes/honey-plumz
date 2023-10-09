import React from 'react';

R
const ErrorPage = () => {
    const err = (
        <div>
            <h2>Something Is Wrong</h2>
        </div>
    )
    return err
}
class Errors extends Error.Component {
    render (name,message,stack) {
        name='Error' ,
        message=ErrorPage,
    }
}

export default ErrorPage

console.log(ErrorPage)