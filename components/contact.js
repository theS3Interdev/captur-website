const Contact = () => {
	return (
		<div className="m-auto h-screen max-w-[1240px] p-4">
			<h1 className="p-4 text-center text-3xl font-bold">Let&#39;s Work Together</h1>
			<form className="m-auto max-w-[600px]">
				<div className="grid grid-cols-2 gap-2">
					<input className="rounded-md border p-3 shadow-lg" type="text" placeholder="Name" />
					<input className="rounded-md border p-3 shadow-lg" type="email" placeholder="Email" />
				</div>
				<input className="my-2 w-full rounded-md border p-3 shadow-lg" type="text" placeholder="Subject" />
				<textarea className="w-full rounded-md border p-3 shadow-lg" cols="30" rows="10" placeholder="Message"></textarea>
				<button className="mt-2 w-full rounded-md border p-3 shadow-lg">Submit</button>
			</form>
		</div>
	);
};

export default Contact;
