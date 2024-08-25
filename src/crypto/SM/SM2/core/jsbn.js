export default (() => {
  const BigInteger = (a) => {
    console.log("进来了", this);
    return {};
  };

  function formatString() {
    console.log("formatString");
  }

  BigInteger.prototype.formatString = formatString;
  BigInteger.prototype.min = 10;
  return { BigInteger };
})();

/* var jsbn = function () {
  function BigInteger(a) {
    console.log("进来了", this, a);
  }

  BigInteger.prototype.min = 10;
  return BigInteger;
};

export default jsbn; */
