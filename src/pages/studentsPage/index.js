import React, { Component }  from "react";
import { connect } from "react-redux";
import StudentLayout from "../../layouts/studentLayouts";

class Students extends Component {

        render () {
             console.log(this.props.studentState);
                return (
                        <div >
                         <StudentLayout />
                        </div>
                )
        }
}
const mapStateToProps = state => {
        return {
         studentState: state
        }
}
export default connect(mapStateToProps)(Students);