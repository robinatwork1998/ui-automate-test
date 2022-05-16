const argv = process.argv;
const user = argv[2];
const user_lists = argv[3];

if (!(user_lists && user_lists.length)) {
	console.log('Invalid user list. Please specify list of allowed users.');
	process.exit(0);
} else {
	if (!(user_lists.indexOf(user) > -1)) {
		console.log("Invalid User. You don't have permission to run this workflow...");
		process.exit(0);
	} else {
		console.log('Valid User');
	}
}
