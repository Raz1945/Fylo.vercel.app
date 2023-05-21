import '../../../styles/css/App.css'

export const Button = ({text, className='btn', id=""}) => {
    return ( 
        <>
            <button className={className} id={id}>
                {text}
            </button>
        </>
     );
}
 