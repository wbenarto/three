
const CustomCard = ({type}) => {
    let customStyle = type == 'product' ? 'w-40 h-10' : type === 'user' ? 'w-80 h-60' : ''
    
    return (

        <div className={`bg-white w-40 h-40 ${customStyle} my-10`}>
            Wowow
        </div>
    )
}

export default CustomCard;