export const maskEmail = (email: string): string => {
  const [user, domain] = email.split("@");
  const maskedUser =
    user.slice(0, 2) + "*".repeat(Math.max(0, user.length - 2));
  return `${maskedUser}@${domain}`;
};
