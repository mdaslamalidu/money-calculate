export const hostDataApi = async (host) => {
  const url = `http://localhost:5000/users/${host?.email}`;
  console.log(host);
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(host),
  });

  const data = await response.json();
  console.log(data);
  return data;
};

export const getuser = async (email) => {
  const url = `http://localhost:5000/users/${email}`;

  const response = await fetch(url);

  const data = await response.json();
  return data;
};

export const getAllUser = async () => {
  const url = "http://localhost:5000/users";
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const makeHost = async (user) => {
  delete user._id;
  const response = await fetch(`http://localhost:5000/users/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ ...user, role: "member" }),
  });
  const users = await response.json();

  return users;
};
