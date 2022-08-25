const permissionsLevel = {
  GUARD: 20,
  ADMIN: 1,
  USER: 50,
};

const messageStatus = {
  PENDING: 0,
  SENDED: 1,
  REJECTED: 2,
};

const messagesResponses = [
  {
    message: "Thank you for checking in our condo",
  },
  {
    message:
      "Would you rate our service? \n Type from 1 to 5 according to your experience",
  },
  {
    message: "Thank you for your feedback",
  },
];

module.exports = {
  permissionsLevel,
  messageStatus,
  messagesResponses,
};
