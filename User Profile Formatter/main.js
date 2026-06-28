/* Should return the first and last name as one string.
*/
function getDisplayName(user) {
    return `${user.firstName} ${user.lastName}`;
}

/* Should return "City, Country".
*/
function getLocation(user) {
    return `${user.address.city}, ${user.address.country}`;
}

/* Should return an object with email and phone.
*/
function getContactSummary(user) {
    return { email: user.email, phone: user.phone};
}

/* Should return true when account.status is "active".
*/
function isAccountActive(user) {
    return user.account.status === "active";
}

/* Should return displayName, location, contact, active, and plan.
*/
function createProfileSummary(user) {
    return {
        displayName: getDisplayName(user),
        location: getLocation(user),
        contact: getContactSummary(user),
        active: isAccountActive(user),
        plan: user.account.plan
    }
}

const user = {
  id: 42,
  firstName: 'Ava',
  lastName: 'Stone',
  email: 'ava@example.com',
  phone: null,
  address: {
    city: 'London',
    country: 'UK',
  },
  account: {
    status: 'active',
    plan: 'pro',
  },
};

console.log(createProfileSummary(user));
console.log(getDisplayName(user));
console.log(isAccountActive(user));
console.log(getContactSummary(user));