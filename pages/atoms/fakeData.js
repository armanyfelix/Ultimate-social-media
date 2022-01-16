
function fakeRoles() {
  const roles = ["reader", "author", "publisher"];

  return roles.map(role => {
    return {
      uuid: uuid(),
      type: "Role",
      name: role,
    };
  });
}



function fakeUsers(opts = { n: 15 }) {

  const users = [];
  let howMany = opts.n;

  while (howMany-- > 0) {
    let id = uuid();
    let count = (opts.n - howMany);
    const user = {
      uuid: id,
      type: "User",
      name: `User ${count}`,
      username: `fancy_username${count}`,
      email: `user_${count}@example.com`,
    };

    users.push(user);
  }

  return users;
}

function fakeReaders(opts = { n: 5 }) {

  const readers = [];
  let howMany = opts.n;

  while (howMany-- > 0) {
    let id = uuid();
    let count = (opts.n - howMany);
    const reader = {
      uuid: id,
      type: "Reader",
      name: `Reader ${count}`,
    };

    readers.push(reader);
  }

  return readers;
}
