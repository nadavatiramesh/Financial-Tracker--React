import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


function Panel(props) {
    // const [formname, setFormname] = useState(0);

    return (
        <><div className="overlay"></div>
            <div className="panel" >
                <>
                    <Button variant="link"
                        // onClick={() => this.setState({ visiblePanel: false })} 
                        className="panel-close"><FontAwesomeIcon icon={props.iconBtn[0].icon} onClick={props.iconBtn[0].onClick} /></Button>
                    <h4>{props.panelType}</h4>
                    {props.panelContent}
                    <div className="panel-footer">
                        <div className="btn-grp">
                            {props.panelFooter}
                        </div>
                    </div>
                    <div>
                    </div>
                </>
            </div></>
    );
}

export default Panel;
