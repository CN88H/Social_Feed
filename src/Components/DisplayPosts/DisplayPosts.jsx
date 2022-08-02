import CustomButton from "../Button/Button";

const DisplayPosts = (props) => {
    return ( 
        <table className="table">
            <thead>


            </thead>
            <tbody>
            {props.parentEntries.map((entry) => {
                return (
                <tr>
                    <td>{entry.name }</td>
                    <td>{entry.post}</td>
                    <td>
                        <CustomButton message="Like"/>
                    </td>
                </tr>
                );
            })}
            </tbody>
        </table> 
     );
}
 
export default DisplayPosts;