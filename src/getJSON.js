export default (method, url) => {
		return new Promise((resolve, reject) => {

			const request = new XMLHttpRequest();

			request.open(method, url, true);

			request.onload = function() {
				if(this.status == 200) {
					resolve(this.responseText)
				} else {
					const error = new Error(this.statusText);
					error.code = this.status;
					reject(error);
				}
			}

			request.onerror = function() {
				reject(new Error('Network error'))
			}

			request.send();
		});
	}