const getProcessArgs = () => {
  return process.argv.slice(2).reduce((acc, arg) => {
    return { ...acc, [arg.split("=")[0]]: arg.split("=")[1] };
  }, {});
};

export { getProcessArgs };
