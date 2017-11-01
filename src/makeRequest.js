export default (method, url, data) => {
		return new Promise((resolve, reject) => {

			const request = new XMLHttpRequest();

			request.open(method, url, true);

			let body = 'name='+ data; 
			request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')

			request.onload = function() {
				if(this.status === 200) {
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
			if(method === 'GET' || method === 'DELETE') request.send();

			else if (method === 'PATCH') {

				request.send(body);
			}

		});
	}