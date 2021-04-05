import buildClient from "../apis/buildClient";

const LandingPage = ({ currentUser }) => {
  console.log("current user", currentUser);
  return currentUser?<h1>Welcome {currentUser.email}</h1>:<h1>Please SignIn To Continue</h1>;
};

LandingPage.getInitialProps = async (context) => {
  const client = buildClient(context);
  const { data } = await client.get("/api/users/currentUser");

  return data;
};

export default LandingPage;
