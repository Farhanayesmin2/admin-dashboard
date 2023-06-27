import { useEffect, useState } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";

const User = () => {
	const [userData, setUserData] = useState([]);

	useEffect(() => {
		// Fetch data from the endpoint
		fetch("/public/allinfo.json")
			.then((response) => response.json())
			.then((data) => setUserData(data))
			.catch((error) => console.error(error));
	}, []);

	const handleDelete = (userId) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You are about to delete this user.",
			icon: "warning",
			showCancelButton: true,
			confirmButtonText: "Delete",
			cancelButtonText: "Cancel",
			reverseButtons: true,
		}).then((result) => {
			if (result.isConfirmed) {
				// Perform the actual deletion logic here
				console.log(`Deleting user with ID: ${userId}`);

				// Show success message
				Swal.fire("Deleted!", "The user has been deleted.", "success");
			}
		});
	};

	const limitedUserData = userData.slice(0, 15); // Limit the data to the first 15 items

	return (
		<div className=" my-10 overflow-x-auto">
			<h1 className="py-4  text-2xl font-semibold font-sans text-gray-600">
				Passenger Data
			</h1>
			<div className="min-w-full overflow-hidden">
				<div className="align-middle inline-block min-w-full">
					<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
						<table className="min-w-full divide-y divide-gray-200">
							<thead>
								<tr>
									<th className="px-6 py-3 bg-purple-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
										Name
									</th>
									<th className="px-6 py-3 bg-purple-300 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
										Gender
									</th>
									<th className="px-6 py-3 bg-purple-400 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
										Age
									</th>
									<th className="px-6 py-3 text-left bg-purple-500 text-xs font-medium text-gray-800 uppercase tracking-wider">
										Ticket
									</th>
									<th className="px-6 py-3 text-left bg-purple-600 text-xs font-medium text-gray-900 uppercase tracking-wider">
										Status
									</th>
									<th className="px-6 py-3 text-left bg-purple-700 text-xs font-medium text-gray-950 uppercase tracking-wider">
										Action
									</th>
								</tr>
							</thead>
							<tbody className="bg-white divide-y divide-gray-200">
								{limitedUserData.map((user, index) => (
									<tr key={index} className="hover:bg-gray-100">
										<td className="px-6 py-4 whitespace-nowrap">{user.Name}</td>
										<td className="px-6 py-4 whitespace-nowrap">{user.Sex}</td>
										<td className="px-6 py-4 whitespace-nowrap">{user.Age}</td>
										<td className="px-6 py-4 whitespace-nowrap">
											{user.Ticket}
										</td>
										<td className="px-6 py-4 whitespace-nowrap">
											<span
												className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
													user.Sex === "male"
														? "bg-green-100 text-green-800"
														: "bg-red-100 text-red-800"
												}`}
											>
												{user.Sex === "male" ? "Active" : "Offline"}
											</span>
										</td>
										<td className="px-6 py-4 whitespace-nowrap">
											<div className="flex items-center space-x-2">
												<button
													onClick={() => handleDelete(user.PassengerId)}
													className="px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out"
												>
													<AiFillDelete />
												</button>
												<button className="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">
													<AiFillEdit />
												</button>
											</div>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default User;
