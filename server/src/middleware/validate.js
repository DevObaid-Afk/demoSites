export function validateBody({ sanitize, validate }) {
  return (request, response, next) => {
    const sanitized = sanitize(request.body);
    const errors = validate(sanitized);

    if (Object.keys(errors).length > 0) {
      return response.status(422).json({
        message: 'Validation failed',
        errors
      });
    }

    request.validatedBody = sanitized;
    next();
  };
}
