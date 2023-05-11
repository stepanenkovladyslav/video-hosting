class APIError extends Error {
	constructor(status, message) {
		super();
		this.status = status;
		this.message = message;
	}

	static badRequest(message) {
		return new APIError(400, message);
	}

	static unauthorized(message) {
		return new APIError(401, message);
	}

	static internal(message) {
		return new APIError(500, message);
	}
}

module.exports = APIError;
