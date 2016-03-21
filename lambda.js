function Lambda(expression) {
	var regex = /λ[a-zA-Z]+\.(\w+)/

	if (expression.startsWith("(λ")) {
		this.expression = expression;
		this.bound_var = expression.substring(3,2);
		this.body = expression.match(regex)[1];
	} else {
		console.log('Not a valid expression');
	}
};

Lambda.prototype.application = function(lambda) {
	var expression;

	if ( ! lambda instanceof Lambda) {
		console.log('Not an instanceof Lambda');
		return;
	}

	expression = this.body.replace(this.bound_var, lambda.expression);
	console.log(this.bound_var, this.body);
	console.log(expression);
	return new Lambda(expression);
};

