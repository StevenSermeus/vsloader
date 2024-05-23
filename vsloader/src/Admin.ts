import { Student } from "./Student";

class Admin extends Student {
	enableFirewall() {
		const password = this.getPassword();
		this.executeCommand(
			`echo ${password} | sudo firewall-cmd --add-port=8000-9000/tcp`
		);
	}
	disableFirewall() {
		const password = this.getPassword();
		this.executeCommand(
			`echo ${password} | sudo firewall-cmd --remove-port=8000-9000/tcp`
		);
	}
}
