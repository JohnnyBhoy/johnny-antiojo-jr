export const isValidEmail = (email) => {
  const isValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  return isValid.test(email);
};

export const getToken = () => localStorage.getItem("auth-token");

export const catchError = (error) => {
  const { response } = error;
  if (response?.data) return response.data;

  return { error: error.message || error };
};

export const renderItem = (result) => {
  //console.log(result);
  return (
    <div className="flex rounded overflow-hidden">
      <img
        src={result.avatar.url}
        alt={result.name}
        className="w-16 h-16 object-cover"
      />
      <p className="dark:text-white font-semibold">{result.name}</p>
    </div>
  );
};
