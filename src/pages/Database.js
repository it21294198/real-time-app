import ReadWriteFireStore from "../components/ReadWriteFireStore";
import ReadWriteRealTime from "../components/ReadWriteRealTime";

function Database() {
    return ( <div>
        <ReadWriteRealTime/>
        <hr></hr>
        <ReadWriteFireStore/>
    </div> );
}

export default Database;