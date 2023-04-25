import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import '../Sahan/StyleSheet.css';
import '../Sahan/FormStyles.css';

export default function RegisterForum() {
	const [name, set_name] = useState("");
	const [phone, set_phone] = useState("");
	const [inputAddress, setinputAddress] = useState("");
	const [inputAddress2, setinputAddress2] = useState("");
	const [village, set_village] = useState("");
	const [position, set_position] = useState("");
	const [idfront, set_idfront] = useState("");
	const [idback, set_idback] = useState("");
	const [policeReport, set_policeReport] = useState("");
	const sendData = async (e) => {
		e.preventDefault();

		const NregisterPerson = {
			name,
			phone,
			inputAddress,
			inputAddress2,
			village,
			position,
			idfront,
			idback,
			policeReport
			/*name: name,
			phone: phone,
			inputAddress: inputAddress,
			inputAddress2: inputAddress2,
			village: village,
			position: position,
			idfront: idfront,
			idback: idback,
			policeReport: policeReport*/
		};

		// backend url=== http://localhost:8070/registerPerson/addPerson
		axios.post(
			"http://localhost:8070/registerPerson/addPerson", NregisterPerson)  
			.then(() => {
				swal({
					title: 'Success!',
					text: 'Add Employee Details Successfully',
					icon: 'success',
					timer: 200,
					button: false
				});
			})
			.catch((err) => {
				alert('error in registerPerson frontend route');
			});
			//set values default
		set_name("");
		set_phone("");
		setinputAddress("");
		setinputAddress2("");
		set_village("");
		set_position("");
		set_idfront("");
		set_idback("");
		set_policeReport("");
	};

	return (
		<>
			
				<section className='Payment-form '>
					<br />
					<Link to='/update'>
						<button className='btnf'>
							<span>See all employee details</span>
						</button>
					</Link>
					<br />
					<br />
					<h3>Add a new employee</h3>
					<br />
					<form onSubmit={sendData}>
						<div className='mb-3'>
							<label htmlFor='name' className='form-label'>
								person's name
							</label>
							<input
								type='text'
								className='form-control'
								id='name'
								placeholder="person's name"
								onChange={(e) => {
									set_name(e.target.value);
								}}
							/>
						</div>

						<div className='mb-3'>
							<label
								htmlFor='phone'
								className='form-label'
							>
								phone number
							</label>
							<input
								type='text'
								className='form-control'
								id='phone'
								placeholder='enter phone number'
								onChange={(e) => {
									set_phone(e.target.value);
								}}
								//pattern='[0-9]{10}'
								required
							/>
						</div>
						<div className='mb-3'>
							<label
								htmlFor='inputAddress'
								className='form-label'
							>
								Address 1
							</label>
							<input
								type='text'
								className='form-control'
								id='inputAddress'
								placeholder='enter Address 1'
								onChange={(e) => {
									setinputAddress(e.target.value);
								}}
								required
							/>
						</div>
						<div className='mb-3'>
							<label
								htmlFor='inputAddress2'
								className='form-label'
							>
								Address 2
							</label>
							<input
								type='text'
								className='form-control'
								id='inputAddress2'
								placeholder='enter Address 2'
								onChange={(e) => {
									setinputAddress2(e.target.value);
								}}
								required
							/>
						</div>

						<div className='mb-3'>
							<label
								htmlFor='village'
								className='form-label'
							>
								village name
							</label>
							<input
								type='text'
								className='form-control'
								id='village'
								placeholder='enter village'
								onChange={(e) => {
									set_village(e.target.value);
								}}
								required
							/>
						</div>

						<div className='mb-3'>
							<label
								htmlFor='position'
								className='form-label'
							>
								job position
							</label>
							<input
								type='text'
								className='form-control'
								id='position'
								placeholder='enter job position'
								onChange={(e) => {
									set_position(e.target.value);
								}}
								required
							/>
						</div>

						<div className='mb-3'>
							<label
								htmlFor='idfront'
								className='form-label'
							>
								NIC front photo
							</label>
							<input
								type='text'
								className='form-control'
								id='idfront'
								placeholder='add NIC front photo'
								onChange={(e) => {
									set_idfront(e.target.value);
								}}
								required
							/>
						</div>

						<div className='mb-3'>
							<label
								htmlFor='idback'
								className='form-label'
							>
								NIC back photo
							</label>
							<input
								type='text'
								className='form-control'
								id='idback'
								placeholder='add NIC back photo'
								onChange={(e) => {
									set_idback(e.target.value);
								}}
								required
							/>
						</div>

						<div className='mb-3'>
							<label
								htmlFor='policeReport'
								className='form-label'
							>
								police report photo
							</label>
							<input
								type='text'
								className='form-control'
								id='policeReport'
								placeholder='add police report photo'
								onChange={(e) => {
									set_policeReport(e.target.value);
								}}
								required
							/>
						</div>

						<div>
							<center>
								<button
									type="submit"
									className='btn btn-primary'
								>
									register employee
								</button>
							</center>
						</div>
					</form>
				</section>
		</>
	);
}
