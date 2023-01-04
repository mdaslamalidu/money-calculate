export const hostDataApi = async (host) => {
  const url = `https://server-site-inky.vercel.app/users/${host?.email}`;
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

export const addMoney = async (host) => {
  const url = `https://server-site-inky.vercel.app/addMoney/${host?.email}`;
  console.log(host);
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(host),
  });

  const data = await response.json();
  return data;
};

export const getuser = async (email) => {
  const url = `https://server-site-inky.vercel.app/users/${email}`;

  const response = await fetch(url);

  const data = await response.json();
  return data;
};

export const getAllUser = async () => {
  const url = "https://server-site-inky.vercel.app/users";
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const makeHost = async (user) => {
  delete user._id;
  const response = await fetch(
    `https://server-site-inky.vercel.app/users/${user?.email}`,
    {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ ...user, role: "member" }),
    }
  );
  const users = await response.json();

  return users;
};
