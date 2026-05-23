import { sendContactEmail } from '../services/email.js';
import { persistContactMessage } from '../services/contactMessages.js';

export async function sendContactMessage(request, response) {
  const message = request.validatedBody;
  const savedMessage = await persistContactMessage(message);
  await sendContactEmail(message);

  response.status(201).json({
    message: 'Contact message received',
    contact: {
      id: savedMessage.id || savedMessage._id,
      status: savedMessage.status || 'new'
    }
  });
}
