
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
                    <td>{'like or dislike?'}</td>
                </tr>
                );
            })}
            </tbody>
        </table> 
     );
}
 
export default DisplayPosts;