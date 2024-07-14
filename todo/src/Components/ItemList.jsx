
export const ItemList = ({listItem})=>{
    return(
        <>
        <ul>
            {
                listItem.map((item,index)=>{
                    return(
                    <li key={index}>{item}</li>
                    )
                })
            }
        </ul>
        </>
    )
}