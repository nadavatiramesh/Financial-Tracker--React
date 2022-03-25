import React, { Component } from 'react';
import { Form, Button, Tabs, Tab } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import { Panel } from '../Shared/Shared';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import paymentList from './paymentList.json'
import './Adduser.css';
class AddPayment extends Component {
	constructor(props) {
		super(props)

		this.state = {
			userId: props.dataValues.length ? props.dataValues[0].userId : '',
			senderName: props.dataValues.length ? props.dataValues[0].senderName : '',
			receiverName: props.dataValues.length ? props.dataValues[0].receiverName : '',
			dateOfpayment: new Date(),
			amount: "",
			notes: "",
			footerBtn: [{
				varient: "primary",
				size: "sm",
				title: "Save",
				onClick: this.submitHandler
			}, {
				varient: "light",
				size: "sm",
				title: "Cancel",
				onClick: this.closeHandler
			}],
			iconBtn: [{
				icon: faXmark,
				onClick: this.closeHandler
			}]
		}
	}

	changeHandler = e => {
		// let formValue = [];
		// formValue.push(e.target.id = e.target.value);
		// console.log(formValue);
		this.setState({
			[e.target.id]: e.target.value
		});
	}

	submitHandler = e => {
		e.preventDefault();
		let formData;
		formData = {
			senderName: this.state.senderName,
			receiverName: this.state.receiverName,
			dateOfpayment: this.state.dateOfpayment,
			amount: this.state.amount,
			notes: this.state.notes,
		}
		console.log(formData);
		// axios
		// 	.post('http://localhost:8080/addUsers', this.state)
		// 	.then(response => {
		// 		console.log(response)
		// 	})
		// 	.catch(error => {
		// 		console.log(error)
		// 	})

		const jsonfile = require(paymentList)
 
		const file = '/tmp/mayAlreadyExistedData.json'
		const obj = []
		 
		jsonfile.writeFileSync(file, obj,formData )
	}

	closeHandler = () => {
		let showPanel = false;
		this.props.closePanel(showPanel)
	}

	render() {
		const { userId, title, senderName, receiverName, dateOfpayment, amount, notes, footerBtn, iconBtn } = this.state;
		const { panelType, dataValues } = this.props;
		const panelBtn = footerBtn.map((btn) => (
			<Button variant={btn.varient} size={btn.size} onClick={btn.onClick}>{btn.title}</Button>

		)
		)
		const formContent = (
			<Tabs defaultActiveKey="1" id="uncontrolled-tab-example" className="mb-3 panel-tab">
				<Tab eventKey="1" title="Debit">
					<Form onSubmit={this.submitHandler} className="row">
						<Form.Group className="mb-3 col-md-12 col-md-6 col-lg-6" controlId="senderName">
							<Form.Label>Sender Name</Form.Label>
							<Form.Control type="text" placeholder="Client Name" value={senderName} defaultvalue={senderName} onChange={this.changeHandler} />
						</Form.Group>
						<Form.Group className="mb-3 col-md-12 col-md-6 col-lg-6" controlId=""></Form.Group>
						<Form.Group className="mb-3 col-md-12 col-md-6 col-lg-6" controlId="dateOfpayment">
							<Form.Label>Date Of Payment</Form.Label>
							<Form.Control type="date" placeholder="Date Of Payment" value={dateOfpayment} defaultvalue={dateOfpayment} onChange={this.changeHandler} />
						</Form.Group>
						<Form.Group className="mb-3 col-md-12 col-md-6 col-lg-6" controlId="amount">
							<Form.Label>Amount</Form.Label>
							<Form.Control type="num" placeholder="Amount" value={amount} defaultvalue={amount} onChange={this.changeHandler} />
						</Form.Group>
						<Form.Group className="mb-3 col-md-12 col-md-12 col-lg-12" controlId="notes">
							<Form.Label>Notes</Form.Label>
							<Form.Control rows={3} as="textarea" placeholder="Notes" value={notes} defaultvalue={notes} onChange={this.changeHandler} />
						</Form.Group>
					</Form>
				</Tab>
				<Tab eventKey="2" title="Credit">
					<Form onSubmit={this.submitHandler} className="row">
						<Form.Group className="mb-3 col-md-12 col-md-6 col-lg-6" controlId="senderName">
							<Form.Label>Receiver Name</Form.Label>
							<Form.Control type="text" placeholder="Receiver Name" value={receiverName} defaultvalue={receiverName} onChange={this.changeHandler} />
						</Form.Group>
						<Form.Group className="mb-3 col-md-12 col-md-6 col-lg-6" controlId=""></Form.Group>
						<Form.Group className="mb-3 col-md-12 col-md-6 col-lg-6" controlId="dateOfpayment">
							<Form.Label>Date Of Payment</Form.Label>
							<Form.Control type="date" placeholder="Date Of Payment" value={dateOfpayment} defaultvalue={dateOfpayment} onChange={this.changeHandler} />
						</Form.Group>
						<Form.Group className="mb-3 col-md-12 col-md-6 col-lg-6" controlId="amount">
							<Form.Label>Amount</Form.Label>
							<Form.Control type="num" placeholder="Amount" value={amount} defaultvalue={amount} onChange={this.changeHandler} />
						</Form.Group>
						<Form.Group className="mb-3 col-md-12 col-md-12 col-lg-12" controlId="notes">
							<Form.Label>Notes</Form.Label>
							<Form.Control rows={3} as="textarea" placeholder="Notes" value={notes} defaultvalue={notes} onChange={this.changeHandler} />
						</Form.Group>
					</Form>
				</Tab>
			</Tabs>
		)
		return (

			<div className="demo">
				<Panel panelType={panelType} panelFooter={panelBtn} iconBtn={iconBtn} panelContent={formContent}>

					{/* <form onSubmit={this.submitHandler}>
					<div clsaaName="a">
						<label for="userId">userId:</label>
						<input type="text" name="userId" value={userId} onChange={this.changeHandler} />
					</div><br></br>
					<div clsaaName="b">
						<label for="title" >Title:</label>
						<input type="text" name="title" value={title} />
						<select onChange={this.changeHandler} name="title">
							<option selected value="Mr">Mr</option>
							<option value="Mis">Mis</option>
							<option value="Dr">Dr</option>
						</select>
					</div><br></br>
					<div clsaaName="c">
						<label for="firstName">firstName:</label>
						<input type="text" name="firstName" value={firstName} onChange={this.changeHandler} />
					</div><br></br>
					<div clsaaName="d">
						<label for="lastName">lastName:</label>
						<input type="text" name="lastName" value={lastName} onChange={this.changeHandler} />
					</div><br></br>
					<div clsaaName="e" >

						<input type="radio" name="gender" value="M" onChange={this.changeHandler} /> Male

						<input type="radio" name="gender" value="F" onChange={this.changeHandler} />Female

						<input type="radio" name="gender" value="O" onChange={this.changeHandler} />Others

					</div><br></br>
					<div clsaaName="f">
						<label for="dob">dob:</label>
						<input type="date" name="dob" value={dob} onChange={this.changeHandler} />
					</div><br></br>
					<div clsaaName="g">
						<label for="bloodGroup">bloodGroup:</label>
						<input type="text" name="bloodGroup" value={bloodGroup} onChange={this.changeHandler} />
					</div><br></br>
					<button type="submit">Submit</button>
				</form> */}
				</Panel>
			</div>
		)
	}
}

export default AddPayment;