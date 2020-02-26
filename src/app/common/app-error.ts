// Create new class for application specific errors
export class AppError {
	// public: accessible from everywhere
	constructor(public originalError?: any) {}
}
