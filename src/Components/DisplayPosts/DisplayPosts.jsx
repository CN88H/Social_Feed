
const DisplayPosts = (props) => {
    return ( 
        <table>
            <thead>
            {/* <tr>Name</tr>
            <tr>Post</tr> */}

            </thead>
            <tbody>
            {props.parentEntries.map((entry) => {
                return (
                <tr>
                    <td>{entry.name}</td>
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