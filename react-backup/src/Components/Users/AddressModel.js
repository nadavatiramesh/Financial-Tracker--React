import React from "react";

class AddressModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Items: [],
            searchData: "",
            searchedItems: []
        }
    }
    render() {

        return (
            <>
              {this.props?.modelType === "permanent" ? 
              <h5>Permanent</h5> : this.props?.modelType === "temporary" ? <h5>Temporary</h5>  : <h5>Delivery</h5>}
            </>
        );
    }
}
// function Header(props) {
//   return <h2 style={{color:props.color}}>{props.name}</h2>;
//     }

export default AddressModal;
